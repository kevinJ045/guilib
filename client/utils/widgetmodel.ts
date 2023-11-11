import Widget from "../widgets/main/Widget"
import { mergeOptions, options } from "./options";

function determineType(thing: any) {
  return thing instanceof Widget ? 'widget' : typeof thing;
}

function getSelectorContent(selector: string) {
  const parts = selector.split('.');
  const element = parts[0];
  const classes = parts.slice(1).join(' ');
  return { element, classes };
}

/**
	{
		"selector": "div.card",
		"children": [
			{
				"selector": "div.card-body",
				"children": [
					"h2.card-title",
					{ "selector": "div.card-content" },
					{ "selector": "div.card-actions" }
				]
			}
		],
		"options": {
			"actions": {
				"type": "array",
				"forEach": {
					"div.card-actions": {
						"append": "$item"
					}
				}
			},
			"content": {
				"type": "array",
				"forEach": {
					"div.card-content": {
						"append": "$item"
					}
				}
			},
			"title": {
				"string": {
					"h2.card-title": {
						"text": "$title"
					}
				},
				"widget": {
					"h2.card-title": {
						"empty": true,
						"append": "$title"
					}
				}
			},
			"image": {
				"any": {
					"div.card-body": {
						"prepend": {
							"selector": "figure.card-image-container"
						}
					}
				},
				"string": {
					"figure.card-image-container": {
						"append": {
							"selector": "img.card-image",
							"atributes": {
								"src": "$image"
							}
						}
					}
				},
				"widget": {
					"figure.card-image-container": {
						"append": "$image"
					}
				}
			}
		}
	}
*/


export type widgetModelActionCases = {
	[key: string]: {
		[key: string]: any,
		text?: string,
		addClass?: string,
		removeClass?: string,
		toggleClass?: string,
		append?: string | widgetModel,
		empty?: boolean,
		prepend?: string | widgetModel
	}
}

export type widgetModelTypeCases = {
	any?: widgetModelActionCases,
	number?: widgetModelActionCases,
	boolean?: widgetModelActionCases,
	string?: widgetModelActionCases,
	function?: widgetModelActionCases,
	object?: widgetModelActionCases,
	null?: widgetModelActionCases,
	undefined?: widgetModelActionCases,
	widget?: widgetModelActionCases,
	else?: widgetModelActionCases,
	type?: string,
	forEach?: widgetModelTypeCases,
	[key: string]: any
}

export type widgetModel = {
	selector: string,
	children?: (widgetModel | string)[],
	child?: widgetModel | string,
	options?: Record<string, widgetModelTypeCases>,
	attributes?: Record<string, any>,
	text?: string,
	widgetOptions?: Record<string, any>,
	[key: string]: any
}

// @ts-ignore
function modelToWidget(model: widgetModel | string){
	if(model instanceof Widget) return model;
 	if(typeof model == "string") model = { selector: model };
	let el = getSelectorContent(model.selector);
	let widget: Widget = new Widget({
		...model.options,
		element: { name: el.element },
		class: el.classes,
		attr: model.attributes,
		children: model.children ? model.children.map(modelToWidget) : [],
		model: model
	});
	if(model.text) widget.text(model.text);
	if(model.child) widget.add(modelToWidget(model.child));
	return widget;
}

type modelValue = {
	type: string,
	value: any
};
function determineValue(valueRaw: any, widget: Widget, option: any) {
	let value : modelValue  = {type: typeof valueRaw, value: valueRaw};
  return value;
}

function resolveValue(valueRaw: any, value: modelValue){
	let _value : modelValue  = {type: typeof valueRaw, value: valueRaw};
	if(typeof valueRaw == "string" && valueRaw.match(/\$\(/)){
		_value.value = valueRaw.replace(/\$\(([\w]+)\)/g, value.type == "list" ? ((a: string, name: string) => value.value[name]) :value.value);
		_value.type = 'string';
	} else if(typeof valueRaw == "string" && valueRaw.startsWith('$')){
		_value.value = value.type == "list" ? value.value[valueRaw.split('$')[1]] : value.value;
		_value.type = typeof value;
	}
	if(_value.value instanceof Widget){
		return _value;
	}
	if(typeof _value.value == "object" && typeof _value.value.selector == "string"){
		if(_value.value.attributes)
			for(let i in _value.value.attributes)
				_value.value.attributes[i] = resolveValue(_value.value.attributes[i], value).value;

		for(let i in _value.value)
			_value.value[i] = resolveValue(_value.value[i], value).value;

		_value.value = modelToWidget(_value.value);
	}
	return _value;
}

function actionCase(actions: any, widget: Widget, value: modelValue){
	for(let action in actions){
		let act = typeof actions[action] == "object" ? 
		(
			Array.isArray(actions[action]) ? [...actions[action]] : {...actions[action]}
		) : actions[action];
		let actionValue = resolveValue(act, value);
		if(action == 'empty' && actionValue.value == true){
			widget.remove('*');
		} else if(action == 'append'){
			widget.add(actionValue.value);
		} else if(action == 'prepend'){
			widget.addBefore(actionValue.value);
		} else if(action == 'text'){
			widget.text(actionValue.value);
		} else {
			let w: any = widget;
			let args = typeof actionValue.value == "object" && actionValue.value.arguments ? actionValue.value.arguments : [actionValue.value];
			if(typeof actionValue.value == "object" && actionValue.value.resolve){
				for(let i in actionValue.value){
					actionValue.value[i] = resolveValue(actionValue.value[i], value).value;
				}
			}
			if(typeof actionValue.value == "function" && action.startsWith('on')){
				w.on(action.split('on')[1].toLowerCase(), function(e: any, ...data: any[]){
					actionValue.value(w, e, ...data);
				});
			} else if(typeof w[action] == "function") w[action](...args);
			else if(action in w){
				w[action] = actionValue.value;
			}
		}
	}
}

function selectorCase(selectors: any, widget: Widget, value: modelValue){
	for(let i in selectors){
		let item = i == 'this' ? widget : widget.find(i);
		if(item){
			actionCase(selectors[i], item, value);
		}
	}
}

function typeCase(widget: Widget, option: any, valueRaw: any){
	let value = determineValue(valueRaw, widget, option);
	let type = determineType(value.value);
	if('any' in option) selectorCase(option.any, widget, value);
	
	if(type in option) selectorCase(option[type], widget, value);
	else if('else' in option) selectorCase(option.else, widget, value);
}


export function createWidgetModel<T = Record<string, any>>(model: widgetModel, _options: any) {
	const classGenerated = class extends Widget {
		constructor(options: T = _options){
			let wo:Record<string, any>  = {};
			if(model.widgetOptions){
				for(let i in model.widgetOptions)
					wo[i] = resolveValue(model.widgetOptions[i], {type: "list", value: options} as modelValue).value;
			}
			super(mergeOptions({
				...wo,
				element: { name: getSelectorContent(model.selector).element },
				class: getSelectorContent(model.selector).classes,
				children: model.children ? model.children.map(modelToWidget) : [],
				_setters: Object.keys(options as Record<string, any>)
			}, options as Record<string, any>));
		}
	};
	if(typeof model._onMount == "function") classGenerated.prototype._onMount = model._onMount;
	if(typeof model._optionChange == "function") classGenerated.prototype._optionChange = model._optionChange;
	function generateClassOptions(model: widgetModel){
		for(var i in model.options){
			let option = model.options[i];
			(classGenerated.prototype as any).__defineSetter__(i, function(value: any){
				// @ts-ignore
				let that: Widget = this;
				if(option.type == "array"){
					let items: Widget[] = value;
					for(let i in option){
						if(typeof (items as any)[i] == 'function'){
							(items as any)[i](function(item: Widget){
								typeCase(that, option[i], item);
							});
						}
					}
				} else {
					typeCase(that, option, value);
				}
			});
		}
	}
	generateClassOptions(model);
	return classGenerated;
}
