import { isPosition } from "../../utils/type";
import generateRandomID from "../../utils/id";
import { findEl, registerElement } from "../../utils/elman";
import getDefaults, { mergeOptions, options } from "../../utils/options";
import WidgetProps, { WidgetList, child, widget, widgetF } from "../_ghost/WidgetProps";
import Dom from "../../utils/dom";
import Store from "../../data/Store";
import { createWidgetModel, widgetModel } from "../../utils/widgetmodel";
import { animation } from "../../components/Animate";

type wid = widget;

const defaults = getDefaults({});

const setterFunctions = [
	'padding',
	'margin',
	'name',
	'id:$id',
	'animation',
	'tooltip',
	'style'
];

function initiateSetters(widget: widgetF, setterFunctions: string[], options: options){
	setterFunctions.forEach((setterFull) => {
		let setter = setterFull, name = setterFull;
		if(setterFull.match(':')){
			[setter, name] = setterFull.split(':');
		}
		if((options as Record<string, any>)[setter]){
			(widget as Record<string, any>)[name] = (options as Record<string, any>)[setter];
		}
	});
}

function _init(widget: widgetF, options: options){
	let elementRaw;

	if(!widget.__generated){
		if(options!.element!.raw || options!.element!.selector){
			elementRaw = new Dom(options!.element!.raw as any).at(0);
		} else {
			elementRaw = document.createElement(options!.element!.name as string);
		}
	}

	const element = widget.__generated ? findEl(widget.id!) : new Dom(elementRaw!);

	if(!widget.__generated && options.element!.html) element.html(options.element!.html);

	if(widget.__generated && options.reset) element.attr({class: '', style: ''});

	element.addClass(options.class);

	if(options.position) {
		let { type, centered, top, left, right, bottom } = options.position;
		element.css({
			position: isPosition(type as string) ? type : null
		});
		if(centered){
			element.css({
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)'
			});
		} else {
			element.css({
				top,
				left,
				right,
				bottom
			});
		}
	}

	if(options.size) {
		const {
			width,
			height
		} = options.size;
		element.css({
			width,
			height
		});
	}

	if(!widget.__generated){
		Object.defineProperty(widget, 'id', {
			writable: false,
			value: generateRandomID()
		});
		element.at(0).GUIWIDGET = widget;
		registerElement(element, widget.id!);


		
		widget.store.addEventListener('change', () => {
			widget.emit('state:change', widget.store);
		});

	}

	if(options.store instanceof Store) widget.store = options.store;

	if(typeof options.build! == "function"){
		if(!options.children) options.children = [] as widgetF[];
		let child = options.build(options, widget);
		if(Array.isArray(child)){
			options.children.push(child as never);
		} else{
			options.children.push(child as never);
		}
	}

	if(options.children && options.children.length){
		options.children.forEach((element: widget) => {
			if(element == null) return;
			widget.add(element!);
		});
	}


	if(options.private === true){
		// widget.seal();
		delete options.private;
	}
	
	if(options.accepts === false){
		widget.accepts = false;
	} else if(options.accepts === true){
		widget.accepts = true;
	}

	for(var i in options){
		if(i.match(/on([A-Z])([a-zA-Z]+)/)){
			if(!options.events) options.events = {};
			options.events[i.replace('on', '').toLowerCase()] = (options as Record<string, any>)[i];
			// delete options[i];
		}
	}

	if(options.events){
		for(var i in options.events){
			widget.on(i, options.events[i]);
		}
	}

	if(options.props){
		element.prop(options.props);
	}

	if(options.attr){
		element.attr(options.attr);
	}

	widget.options = widget.registerProxy(options, () => {
		widget.setOptions({});
	});

	let setters = [...setterFunctions];

	if(options._setters){
		setters.push(...options._setters);
	}
	
	initiateSetters(widget, setters, options);
	
	if(!widget.__generated) widget.__generated = true;


	if(typeof widget._onBuild == "function"){
		let w: widget = widget._onBuild();
		if(w){
			widget.add(w!);
		}
	}

}

/**
 * Widget class represents a graphical user interface (GUI) element.
 *
 * @class Widget
 * @extends {WidgetProps}
 */

class Widget<O extends options = options> extends WidgetProps {

	component?: any;

	/**
	 * Creates an instance of the Widget.
	 *
	 * @param {options} [options={}] - Configuration options for the Widget.
	 */

	options: O | options = {};
	
	constructor(options?: O | options){
		super();
		if(typeof options !== "object") options = { element: { name: 'div' }, class: 'widget' } as O;
		_init(this, {...getDefaults({}), ...(options as Record<string, any>)});
	}

	setOptions(options: O | options){
		const currentOptions = {...this.options, ...options};
		_init(this as Widget, currentOptions as options);
		this._optionChange(currentOptions);
	}

	static from(child: HTMLElement | string){
		return new Widget({ element: {	raw: new Dom(child).at(0) } });
	}

	/**
	 * Creates a Widget class from config.
	 *
	 * @param {widgetModel} [model] - Configuration model for the Widget.
	 * @param {any} [options] - Configuration options for the Widget.
	 */
	static model<T = options>(model: widgetModel, options: Record<string, any> = {}){
		return createWidgetModel<T>(model, options);
	}

	static animateWidgets(animation: animation, ...widgets: Widget[]){
		return WidgetList.from(widgets).animate(animation);
	}

	static new<T = options>(options: T){
		return new this(options as Record<string, any>);
	}
}

function getAllSetters(obj: object) {
  const setters = [];

  let currentObj = obj;

  while (currentObj) {
    const descriptors = Object.getOwnPropertyDescriptors(currentObj);

    for (const key in descriptors) {
      const descriptor = descriptors[key];

			if(key == '__proto__') continue;
			if(setterFunctions.includes(key) || setterFunctions.find(k => k.endsWith(':'+key))) continue;

      if (descriptor.set) {
        setters.push(key);
      }
    }

    currentObj = Object.getPrototypeOf(currentObj);
  }

  return setters;
}

export function uiwidget<T = options>(defaults: T){
	return function(target: any, extended?: any) {
		let setters: string[] = [];
		class WidgetClass extends target {
			constructor(options: T){
				let o = mergeOptions({...defaults, _setters: setters} as any, options as options) as T;
				super(o);
				this.onInit(o);
			}
			onInit(o: T){}
		}
		Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      if (key !== 'constructor') {
        WidgetClass.prototype[key] = target.prototype[key];
      }
    });
		setters.push(...getAllSetters(WidgetClass.prototype));
		return WidgetClass as typeof target;
	}
}

export type { widget };
export default Widget;