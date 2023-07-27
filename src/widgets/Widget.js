import $ from "jquery";
import _ from "lodash";
import { isHTMLElement, isPosition, isWidget } from "../utils/type.js";
import generateRandomID from "../utils/id.js";
import { elementTypes, findEl, registerElement } from "../utils/elman.js";
import { createEventData, getEventName, onHold } from "../utils/events.js";
import getDefaults from "../utils/options.js";
import { htmlPseudos, filteredChildren, resolveSubchild } from "../utils/misc.js";

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

	if(!widget.__generated){
		Object.defineProperty(widget, 'id', {
			writable: false,
			value: generateRandomID()
		});
		element[0].GUIWIDGET = widget;
		registerElement(element, widget.id);
	}

	if(options.children && options.children.length){
		options.children.forEach(element => {
			widget.add(element);
		});
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
		elementTypes(options.element.name, options.type, widget.id);
		if(typeof widget._onTypeChange == "function"){
			widget._onTypeChange(...options.type);
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

	addHTMLElement(child, subchild){
		let hadGUI = child.GUIWIDGET;
		const elt = this.add(hadGUI ? child.GUIWIDGET : Widget.from(child), subchild);
		if(!hadGUI) elt.stripElement();
		return elt;
	}

	addWidget(child, subchild){
		if(this.accepts === false) return this;
		if(this.sealed === true) return this;
		if(isWidget(child)){
			const l = resolveSubchild(findEl(this.id), subchild);
			if(child.is('prefix')){
				l.prepend(findEl(child.id));
			} else {
				l.append(findEl(child.id));
			}
		}
		return this;
	}

	add(child, subchild){
		if(isWidget(child)){
			this.addWidget(child, subchild);
		} else if(isHTMLElement(child)){
			this.addHTMLElement(child, subchild);
		} else {
			throw new Error('Only Widgets or HTMLElements Allowed');
		}
		return this;
	}
	
	addBefore(child, subchild){
		this.is('prefix', true);
		this.add(child, subchild);
		this.is('prefix', false);
		return this;
	}
	
	addAll(...children){
		let subchild = "";
		let last = children[children.length-1];
		if(typeof last == 'string'){
			subchild = children.pop();
		}
		children.forEach(child => this.add(child, subchild));
		return this;
	}

	addWrappedElement(elt, elementText, where, subchild){
		const el = resolveSubchild(findEl(this.id), subchild);
		let [cssClass, element] = elementText.split(' ');
		if(!elt) {
			el.find('.'+cssClass).remove();
			return this;
		}
		if(!element) element = 'div';
		let additionEl;
		if(elt instanceof Widget){
			additionEl = findEl(elt.id);
		} else if(elt instanceof HTMLElement){
			additionEl = $(elt);
		} else {
			throw new Error("Unexpected Element: not HTMLElement nor Widget")
		}
		const h = $('<'+element+' class="'+cssClass+'" />');
		h.append(additionEl);
		if(where == 'before') el.prepend(h);
		else el.append(h);
		return this;
	}

	remove(child, subchild){
		if(this.sealed === true) return this;
		if(!child) resolveSubchild(findEl(this.id), subchild).remove(); 
		else if (child == '*') resolveSubchild(findEl(this.id), subchild).empty();
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

	children(subchild){
		return filteredChildren(resolveSubchild(findEl(this.id), subchild).children());
	}

	find(q, subchild){
		return filteredChildren(resolveSubchild(findEl(this.id), subchild).find(q));
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

	toHTMLElement(parent, direction){
		if(this.sealed === true) return this;
		if(direction == 'before') findEl(this.id).prependTo(parent);
		else findEl(this.id).appendTo(parent);
		return this;
	}

	toWidget(parent, direction){
		if(this.sealed === true) return this;
		return this.toHTMLElement(findEl(parent.id), direction);
	}

	to(parent, direction){
		if(isWidget(parent)){
			this.toWidget(parent, direction);
		} else if(isHTMLElement(parent)){
			this.toHTMLElement(parent, direction);
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

	hide(time){
		findEl(this.id).hide(time);
		return this;
	}

	show(time){
		findEl(this.id).show(time);
		return this;
	}

	toggle(time){
		findEl(this.id).toggle(time);
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

	shareState(elt){
		elt.on('state:change', (e, {new: state}) => {
			this.setState({ ...(elt.getState()) });
		});
		return this.setState({ ...(elt.getState()) });
	}

  getState() {
    return { ...this.state };
  }

	toString(){
		return findEl(this.id)[0].outerHTML;
	}

	stripElement(){
		return delete findEl(this.id)[0].GUIWIDGET;
	}

	set id(id) { this._id = id };

	static from(raw){
		return new Widget({
			element: { raw }
		});
	}

	static html(widget){
		return findEl(widget.id)[0].outerHTML;
	}
}

function AssemblyWidget(Func, el){
	const widget = Widget.from(el);
	widget.__proto__.__proto__ = Func.__proto__;
	Func.__proto__ = widget;
	return Func;
}

export { AssemblyWidget };
export default Widget;