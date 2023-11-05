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

type widgetModel = {
	selector: string,
	children?: widgetModel[],
	options?: Record<string, any>,
	attributes?: Record<string, any>
}

// @ts-ignore
function modelToWidget(model: widgetModel){
	if(typeof model == "string") model = { selector: model };
	let el = getSelectorContent(model.selector);
	return new Widget({
		...model,
		element: { name: el.element },
		class: el.classes,
		attr: model.attributes,
		children: model.children ? model.children.map(modelToWidget) : [],
	});
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
	if(typeof valueRaw == "string" && valueRaw.startsWith('$')){
		_value.value = value.value;
		_value.type = typeof value;
	}
	if(typeof _value.value == "object" && _value.value.selector){
		if(_value.value.attributes)
			for(let i in _value.value.attributes)
				_value.value.attributes[i] = resolveValue(_value.value.attributes[i], value).value;
		_value.value = modelToWidget(_value.value);
	}
	return _value;
}

function actionCase(actions: any, widget: Widget, value: modelValue){
	for(let action in actions){
		let actionValue = resolveValue(actions[action], value);
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
			// @ts-ignore
			let args = actionValue.value.arguments ? actionValue.value.arguments : [actionValue.value]
			if(typeof w[action] == "function") w[action](...args);
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

export function createWidgetModel(model: widgetModel, _options: Record<string, any>) {
	const classGenerated = class extends Widget {
		constructor(options: Record<string, any>){
			super(mergeOptions({
				element: { name: getSelectorContent(model.selector).element },
				class: getSelectorContent(model.selector).classes,
				children: model.children ? model.children.map(modelToWidget) : [],
				_setters: Object.keys(options)
			}, options));
		}
	};
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
	return classGenerated;
}
