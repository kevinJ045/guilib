import $ from "jquery";
import _ from "lodash";
import { isHTMLElement, isPosition, isWidget } from "../../utils/type.js";
import generateRandomID from "../../utils/id.js";
import { elementTypes, findEl, registerElement } from "../../utils/elman.js";
import { createEventData, getEventName, onHold } from "../../utils/events.js";
import getDefaults from "../../utils/options.js";
import { htmlPseudos, filteredChildren, resolveSubchild } from "../../utils/misc.js";
import Store from "../../data/Store.js";
import Dialog from "../popup/dialog.js";
import Style from "../../components/Style.js";
import { animateWidget, animateWidgets } from "../../components/Animate.js";
import { $inject$1app } from "../popup/popover.js";
import { $inject$1app$popup } from "../popup/popup.js";

const defaults = getDefaults({});
let $1$app = {};

function initiateSetters(widget, setterFunctions, options){
	setterFunctions.forEach((setter) => {
		if(options[setter]){
			widget[setter == 'id' ? '$id' : setter] = options[setter];
		}
	});
}

function mounted(parent, child){
	if(typeof child._onMount == "function") child._onMount(parent, $1$app);
	child.setStore(parent.state);
}

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
		widget.options = options;
		options.children.forEach(element => {
			widget.add(element);
		});
		delete widget.options;
	}

	if(typeof widget.state == "object" && !widget.state instanceof Store){
		widget.state = new Store(widget.state);
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

	if(options.props){
		element.prop(options.props);
	}

	if(options.style){
		if(options.style instanceof Style) element.css(options.style.all);
		else element.css(options.style);
	}

	widget.options = options;

	const setterFunctions = [
		'padding',
		'margin',
		'type',
		'id',
		'animation',
		'tooltip'
	];

	if(options._setters){
		setterFunctions.push(...options._setters);
	}
	
	initiateSetters(widget, setterFunctions, options);
	
	if(!widget.__generated) widget.__generated = true;


	if(typeof widget._onBuild == "function"){
		widget._onBuild($1$app);
	}

	if(options.store){
		widget.state = options.store;
	}

	if(options.state){
		widget.setState(options.state);
	}

	const targetProxy = new Proxy(widget.options, {
		set: function (target, key, value) {
			target[key] = value;
			widget.set(target);
			return true;
		},
	});
	
	new Proxy(widget.state, {
		set: function (target, key, value) {
			target[key] = value;
			widget.setState(target);
			return true;
		},
	});
}

class Widget {

	tree = [];
	id;
	accepts = true;
	private = false;
	options = {};
	__generated;
	state = new Store();

	__events__ = [];

	constructor(selectedOptions){
		const options = {...defaults, ...selectedOptions};
		_init(this, options);
	}

	set padding(value){
		findEl(this.id).css({ "padding": value });
	}

	set margin(value){
		findEl(this.id).css({ "margin": value });
	}
	
	set tooltip(value){
		findEl(this.id).addClass('tooltip-init').attr('data-tooltip', value);
	}

	set type(type){
		if(typeof type == 'string'){
			type = [type];
		} else if(Array.isArray(type)){
			type = type;
		} else {
			throw new Error('Undefined type type');
		}

		elementTypes(this.options.element.name, type, this.id);
		if(typeof this._onTypeChange == "function"){
			this._onTypeChange(...type);
		}
	}
	setType(type){
		this.type = type;
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

	_onMount(parent){
		// this.setStore(parent.state);
	}

	reMount(){
		this._onMount(this, $1$app);
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
			mounted(this, child);
		}
		return this;
	}

	add(child, subchild){
		if(isWidget(child)){
			this.addWidget(child, subchild);
		} else if(isHTMLElement(child)){
			this.addHTMLElement(child, subchild);
		} else {
			console.log(child, ' was given');
			throw new Error('Only Widgets or HTMLElements Allowed, The given child was logged.');
		}
		return this;
	}
	
	addBefore(child, subchild){
		child.is('prefix', true);
		this.add(child, subchild);
		child.is('prefix', false);
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
		if(isWidget(elt)){
			mounted(this, elt);
		}
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
		return q == '*' ? this.children() : filteredChildren(resolveSubchild(findEl(this.id), subchild).find(q), true);
	}

	parent(){
		let parent = findEl(this.id).parent();
		if(!parent) return Widget.from(document.body);
		while(!parent[0].GUIWIDGET){
			parent = parent.parent();
		}
		return parent;
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

	height(h){
		if(this.sealed === true) return this;
		findEl(this.id).height(h)
		return findEl(this.id).height() || this;
	}

	width(w){
		if(this.sealed === true) return this;
		findEl(this.id).width(w)
		return findEl(this.id).width() || this;
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
		// if(parent.options.shareState) this.setState(parent.state);
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
			data.target = this;
			if(this.getState().value) this.setState({value: findEl(this.id).val()})
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

	toString(){
		return findEl(this.id)[0].outerHTML;
	}

	stripElement(){
		return delete findEl(this.id)[0].GUIWIDGET;
	}

	set $id(id) { this._id = id, findEl(this.id).attr('id', id); };




	/*

		State Management
	
	*/

	setStore(store){
		if(store instanceof Store){
			this.state = store;
			store.setStore(this.getState(), this.id);
		}
	}

	setState(newState) {
    if (this.sealed === true) return this;

		// if(!this.state instanceof Store) 

		let state = this.state;

		const old = { ...this.state.getStore() };
    this.state.setStore({...old, ...newState});
		// if(this.state.text) this.text(this.state.text);
		// if(this.state.value) this.val(this.state.value);
		this.emit('state:change', { old, current: this.state.getStore(), new: newState });

		state = this.state.getStore();

		if(state.$children){
			state.$children = state.$children.map(element => {
				if(isWidget(element)){
					return element;
				} else {
					return Widget.from(element);
				}
			});
			if(!_.isEqual(old.$children || [], state.$children)){
				if (state.$children.length > old.$children.length) {
					
					const elementsToRemove = old.$children.filter(
						(oldChild) => !state.$children.includes(oldChild)
					);

					elementsToRemove.forEach((element) => this.remove(element));
				} else if (state.$children.length < old.$children.length) {
					
					const elementsToRemove = state.$children.filter(
						(newChild) => !old.$children.includes(newChild)
					);

					elementsToRemove.forEach((element) => this.remove(element));
				}

				const newlyAddedElements = state.$children.filter(
					(newChild) => !old.$children.includes(newChild)
				);
			
				newlyAddedElements.forEach((element) => this.add(element));

				const oldElements = state.$children.filter(
					(newChild) => old.$children.includes(newChild)
				);

				oldElements.forEach((element) => {this.children().find(elt => element.id == elt.id)?.setState(element.state)})
			}
		}
    return this;
  }

  getState() {
    return this.state.getStore();
  }


	/*
		Animations
	*/


	set animation(animation){
		this.options._animation = animation;
		animateWidget(this, animation);
	}
	setAnimation(animation){
		this.animation = animation;
	}

	animate(children, animation){
		animateWidgets(this.find(children), animation);
		return this;
	}



	/*
		Static
	*/

	static from(raw){
		return $(raw)[0].GUIWIDGET ?  $(raw)[0].GUIWIDGET : new Widget({
			element: { raw: $(raw)[0] }
		});
	}

	static html(widget){
		return findEl(widget.id)[0].outerHTML;
	}

	static injectApp(app){
		$1$app = app;
		Dialog.injectApp(app);
		$inject$1app(app);
		$inject$1app$popup(app);
	}
}

function AssemblyWidget(Func, el){
	const widget = Widget.from(el);
	widget.__proto__.__proto__ = Func.__proto__;
	Func.__proto__ = widget;
	return Func;
}

export { AssemblyWidget, initiateSetters };
export default Widget;