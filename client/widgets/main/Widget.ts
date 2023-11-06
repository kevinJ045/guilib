import { isPosition } from "../../utils/type";
import generateRandomID from "../../utils/id";
import { findEl, registerElement } from "../../utils/elman";
import getDefaults, { options } from "../../utils/options";
import WidgetProps, { WidgetList, child, widget, widgetF } from "../_ghost/WidgetProps";
import Dom from "../../utils/dom";
import Store from "../../data/Store";
import { createWidgetModel, widgetModel } from "../../utils/widgetmodel";
import { animation } from "../../components/Animate";

type wid = widget;

const defaults = getDefaults({});
let $1$app = {};

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

	const setterFunctions = [
		'padding',
		'margin',
		'type',
		'name',
		'id:$id',
		'animation',
		'tooltip',
		'style'
	];

	if(options._setters){
		setterFunctions.push(...options._setters);
	}
	
	initiateSetters(widget, setterFunctions, options);
	
	if(!widget.__generated) widget.__generated = true;


	if(typeof widget._onBuild == "function"){
		let w: widget = widget._onBuild();
		if(w){
			widget.add(w!);
		}
	}

}

class Widget extends WidgetProps {

	constructor(options: options = { element: { name: 'div' }, class: 'widget' }){
		super();
		_init(this, {...getDefaults({}), ...(options as Record<string, any>)});
	}

	setOptions(options: options){
		const currentOptions = {...this.options, ...options};
		_init(this,currentOptions );
		this._optionChange(currentOptions);
	}

	static from(child: HTMLElement | string){
		return new Widget({ element: {	raw: new Dom(child).at(0) } });
	}

	static model(model: widgetModel, options: Record<string, any>){
		return createWidgetModel(model, options);
	}

	static animateWidgets(animation: animation, ...widgets: Widget[]){
		return WidgetList.from(widgets).animate(animation);
	}
}

export type { widget };
export default Widget;