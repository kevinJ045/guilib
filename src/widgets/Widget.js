import $ from "jquery";
import _ from "lodash";
import { isHTMLElement, isPosition, isWidget } from "../utils/type.js";
import generateRandomID from "../utils/id.js";
import { elementTypes, findEl, registerElement } from "../utils/elman.js";
import { createEventData, getEventName, onHold } from "../utils/events.js";
import getDefaults from "../utils/options.js";
import { htmlPseudos } from "../utils/misc.js";

const defaults = getDefaults({});

function _init(widget, options){
	let elementRaw;

	if(!widget.__generated){
		if(typeof options.element == "string") { 
			options.element = { raw: options.element };
		} 

		if(options.html){
			options.element.html ?
			options.element.html += options.html :
			options.element.html = options.html;
		}
	
		if(options.element.raw || options.element.selector){
			elementRaw = $(options.element.raw)[0];
		} else {
			elementRaw = document.createElement(options.element.name);
		}
	}

	const element = widget.__generated ? findEl(widget.id) : $(elementRaw);

	if(!widget.__generated && options.element.html) element.html(options.element.html);

	if(widget.__generated && options.reset) element.attr({class: '', style: ''});

	element.addClass(options.class);
	element.css(options.style);


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

	if(options.children && options.children.length){
		options.children.forEach(element => {
			widget.add(element);
		});
	}

	if(!widget.__generated){
		widget.id = generateRandomID();
		element[0].GUIWIDGET = widget;
		registerElement(element, widget.id);
	}

	if(options.private === true){
		widget.seal();
		delete options.private;
	}
	
	if(options.accepts === false){
		widget.accepts = false;
	}

	for(var i in options){
		if(i.match(/on([A-Z])([a-zA-Z]+)/)){
			if(!options.events) options.events = {};
			options.events[i.replace('on', '').toLowerCase()] = options[i];
			delete options[i];
		}
	}

	if(options.events){
		for(var i in options.events){
			widget.on(i, options.events[i]);
		}
	}

	if(options.type && options.type.length){
		elementTypes(options.element.name, options.type, this.id);
		if(typeof this._onTypeChange == "function"){
			this._onTypeChange(...options.type);
		}
	}

	if(options.props){
		element.prop(options.props);
	}

	widget.options = options;
	if(!widget.__generated) widget.__generated = true;
}

class Widget {

	tree = [];
	id;
	accepts = true;
	private = false;
	options = {};
	__generated;
	state = {};

	__events__ = [];

	constructor(selectedOptions){
		const options = {...defaults, ...selectedOptions};
		_init(this, options);
	}

	set(options){
		if(this.sealed) return this;
		const opts = {...this.options, ...options};
		_init(this, opts);
		return this;
	}

	seal(superMode){
		Object.defineProperty(this, 'private', {
			writable: false,
			value: true
		});
		if(superMode === true){
			Object.defineProperty(this, 'sealed', {
				writable: false,
				value: true
			});
		}
		return this;
	}

	addHTMLElement(child){
		if(this.accepts === false) return this;
		if(this.sealed === true) return this;
		if(isHTMLElement(child)){
			findEl(this.id).append(child);
		}
		return this;
	}

	addWidget(child){
		if(this.accepts === false) return this;
		if(this.sealed === true) return this;
		if(isWidget(child)){
			child.to(this);
		}
		return this;
	}

	add(child){
		if(isWidget(child)){
			this.addWidget(child);
		} else if(isHTMLElement(child)){
			this.addHTMLElement(child);
		} else {
			throw new Error('Only Widgets or HTMLElements Allowed');
		}
		return this;
	}

	remove(child){
		if(this.sealed === true) return this;
		if(!child) findEl(this.id).remove(); 
		else child.remove();
		return this;
	}

	is(state, is){
		const stateName = ':'+state;
		if(is === true || is === false){
			if(is === true) findEl(this.id)[0][stateName] = true;
			else delete findEl(this.id)[0][stateName];
			return true;
		}
		if(state == 'disabled'){
			return findEl(this.id).hasClass('disabled') && findEl(this.id).is(':disabled');
		} else {
			return htmlPseudos.indexOf(stateName) == -1 ? findEl(this.id)[0][stateName] : findEl(this.id).is(stateName);
		}
	}

	children(){
		return findEl(this.id).children().toArray().map(element => element.GUIWIDGET);
	}

	find(q){
		return findEl(this.id).find(q).toArray().map(element => element.GUIWIDGET);
	}

	attr(props){
		if(this.sealed === true) return this;
		if(typeof props == "object") findEl(this.id).attr(props);
		return typeof props == "string" ? findEl(this.id).attr(props) : this;
	}

	prop(props){
		if(this.sealed === true) return this;
		if(typeof props == "object") findEl(this.id).prop(props);
		return typeof props == "string" ? findEl(this.id).prop(props) : this;
	}

	css(props){
		if(this.sealed === true) return this;
		if(typeof props == "object") findEl(this.id).css(props);
		return typeof props == "string" ? findEl(this.id).css(props) : this;
	}
	
	text(text){
		if(this.sealed === true) return this;
		findEl(this.id).text(text)
		return findEl(this.id).text() || this;
	}

	val(text){
		if(this.sealed === true) return this;
		findEl(this.id).val(text)
		return findEl(this.id).val() || this;
	}

	html(text){
		if(this.sealed === true) return this;
		findEl(this.id).html(text)
		return findEl(this.id).html() || this;
	}

	toHTMLElement(parent){
		if(this.sealed === true) return this;
		findEl(this.id).appendTo(parent);
	}

	toWidget(parent){
		if(this.sealed === true) return this;
		findEl(this.id).appendTo(findEl(parent.id));
	}

	to(parent){
		if(isWidget(parent)){
			this.toWidget(parent);
		} else if(isHTMLElement(parent)){
			this.toHTMLElement(parent);
		} else {
			throw new Error('Only Widgets or HTMLElements Allowed');
		}
		return this;
	}

	on(event, callback){
		event = getEventName(event);
		if(event == 'hold'){
			if(!this.options.holdDuration) this.options.holdDuration = 1000;
			return onHold(this, callback, this.options.holdDuration);
		}
		this.__events__.push({event, callback});
		findEl(this.id).on(event, (e, args) => {
			if(this.is('disabled')) return;
			if(event == 'click' && this.is('held')) return;
			var data = createEventData(e, event);
			if(this.state.value) this.setState({value: findEl(this.id).val()})
			return callback.call(this, data, args);
		});
		return this;
	}

	off(event, callback){
		findEl(this.id).off(event, callback);
		return this;
	}

	emit(event, data){
		findEl(this.id).trigger(event, data);
		return this;
	}

	raw(){
		if(this.sealed === true) return this;
		return this.private ? this : findEl(this.id);
	}

	setState(newState) {
    if (this.sealed === true) return this;
		const old = { ...this.state };
    this.state = { ...this.state, ...newState };
		if(this.state.text) this.text(this.state.text);
		if(this.state.value) this.val(this.state.value);
		this.emit('state:change', { old, current: this.state, new: newState });

		if(this.state.$children){
			this.state.$children = this.state.$children.map(element => {
				if(isWidget(element)){
					return element;
				} else {
					return Widget.from(element);
				}
			});
			if(!_.isEqual(old.$children || [], this.state.$children)){
				if (this.state.$children.length > old.$children.length) {
					
					const elementsToRemove = old.$children.filter(
						(oldChild) => !this.state.$children.includes(oldChild)
					);

					elementsToRemove.forEach((element) => this.remove(element));
				} else if (this.state.$children.length < old.$children.length) {
					
					const elementsToRemove = this.state.$children.filter(
						(newChild) => !old.$children.includes(newChild)
					);

					elementsToRemove.forEach((element) => this.remove(element));
				}

				const newlyAddedElements = this.state.$children.filter(
					(newChild) => !old.$children.includes(newChild)
				);
			
				newlyAddedElements.forEach((element) => this.add(element));

				const oldElements = this.state.$children.filter(
					(newChild) => old.$children.includes(newChild)
				);

				oldElements.forEach((element) => {this.children().find(elt => element.id == elt.id)?.setState(element.state)})
			}
		}
    return this;
  }

  getState() {
    return { ...this.state };
  }

	static from(raw){
		return new Widget({
			element: { raw }
		});
	}
}

export default Widget;