import $ from "jquery";
import { isPosition } from "../../utils/type.js";
import generateRandomID from "../../utils/id.js";
import { findEl, registerElement } from "../../utils/elman";
import getDefaults, { options } from "../../utils/options";
import WidgetProps, { child, widget, widgetF } from "../_ghost/WidgetProps";
import Dom from "../../utils/dom";

type wid = widget;

const defaults = getDefaults({});
let $1$app = {};

function initiateSetters(widget: widgetF, setterFunctions: string[], options: options){
	setterFunctions.forEach((setter) => {
		if((options as Record<string, any>)[setter]){
			(widget as Record<string, any>)[setter] = (options as Record<string, any>)[setter];
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
			position: isPosition(type) ? type : null
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
	}

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

	widget.options = options;

	const setterFunctions = [
		'padding',
		'margin',
		'type',
		'id',
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
		_init(this, options);
	}

	static from(child: HTMLElement | string){
		return new Widget({ element: {	raw: new Dom(child).at(0) } });
	}
}

export default Widget;