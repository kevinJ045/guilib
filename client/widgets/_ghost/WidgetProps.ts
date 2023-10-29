import Style from "../../components/Style";
import Store from "../../data/Store";
import Dom from "../../utils/dom";
import { attr, elementTypes, findEl } from "../../utils/elman";
import { createEventData, getEventName, onHold, onTextInput } from "../../utils/events";
import { filteredChildren, htmlPseudos, resolveSubchild } from "../../utils/misc";
import { options } from "../../utils/options";
import { isHTMLElement, isWidget } from "../../utils/type";
import Widget from "../main/Widget";

type widget = Widget | WidgetProps | null;
type widgetF = Widget | WidgetProps;
type child = WidgetProps | HTMLElement | HTMLGUIWidget;
interface HTMLGUIWidget extends HTMLElement {
  GUIWIDGET?: any;
}
type event = { event: string, callback: Function };

function registerEvent(widget: WidgetProps, event: string, callback: Function){
	event = getEventName(event);
	if(event == 'hold'){
		return onHold(widget, callback, widget.options.holdDuration as number);
	}
	if(event == 'textinput'){
		return onTextInput(widget, callback);
	}
	widget.__events__.push({ event, callback });
	findEl(widget.id!).on(event, (e: Event, args: []) => {
		if(widget.is('disabled')) return;
		if(event == 'click' && widget.is('held')) return;
		var data = createEventData(e, event, widget);
		return callback.call(widget, data, args);
	});
}

function mounted(parent: widget, child: widget){
	if(typeof child!._onMount == "function") child!._onMount(parent!);
}

class WidgetProps {

	tree = [];
	_id?: string | null = null;
	id: string | null = null;
	accepts = true;
	private = false;
	sealed = false;
	options: options = {};
	__generated : boolean = false;
	_onBuild?: Function;
	store = new Store({});

	__events__: event[] = [];

	set style(style){
		findEl(this.id!).at(0).GUISTYLE = style;
		if(style instanceof Style) findEl(this.id!).css(style.all);
		else findEl(this.id!).css(style);
	}

	get style(){
		return findEl(this.id!).at(0).GUISTYLE;
	}
	
	set padding(value: string){
		findEl(this.id!).css({ "padding": value });
	}

	set margin(value: string){
		findEl(this.id!).css({ "margin": value });
	}

	set name(value: string){
		findEl(this.id!).attr({ "name": value });
	}

	set type(type: string | string[]){
		if(typeof type == 'string'){
			type = [type];
		} else if(Array.isArray(type)){
			type = type;
		} else {
			throw new Error('Undefined type type');
		}

		elementTypes(null, type, this.id!);
		this.emit('typechange', type);
	}
	setType(type: string){
		this.type = type;
		return this;
	}

	setOptions(options: options){}
	_optionChange(options: options){}

	addHTMLElement(child: HTMLGUIWidget | HTMLElement, subchild: string | null){
		let hadGUI = (child as HTMLGUIWidget).GUIWIDGET;
		const elt = this.add(hadGUI ? (child as HTMLGUIWidget).GUIWIDGET : Widget.from(child), subchild);
		if(!hadGUI) elt.stripElement();
		return elt;
	}

	addWidget(child: child, subchild: string | null){
		if(this.accepts === false) return this;
		if(this.sealed === true) return this;
		if(isWidget(child)){
			const l = resolveSubchild(findEl(this.id!), subchild);
			if((child as Widget).is('prefix')){
				(l as any).prepend(findEl(child.id!));
			} else {
				(l as any).append(findEl(child.id!));
			}
			mounted(this, child as widget);
		}
		return this;
	}

	add(child: child, subchild: string | null = null){
		if(isWidget(child)){
			this.addWidget(child, subchild);
		} else if(isHTMLElement(child)){
			this.addHTMLElement(child as HTMLGUIWidget, subchild);
		} else {
			console.log(child, ' was given');
			throw new Error('Only Widgets or HTMLElements Allowed, The given child was logged.');
		}
		return this;
	}
	
	addBefore(child: child, subchild: string | null = null){
		(child as Widget).is('prefix', true);
		this.add(child, subchild);
		(child as Widget).is('prefix', false);
		return this;
	}
	
	addAll(...children: Array<string | child>){
		let subchild = "";
		let last = children[children.length-1];
		if(typeof last == 'string'){
			subchild = children.pop() as string;
		}
		children.forEach(child => this.add(child as child, subchild));
		return this;
	}

	addWrappedElement(elt: widget | HTMLGUIWidget, elementText: string, where: string, subchild : string | null = null){
		const el = resolveSubchild(findEl(this.id!), subchild);
		let [cssClass, element] = elementText.split(' ');
		if(!elt) {
			el.find('.'+cssClass).remove();
			return this;
		}
		if(!element) element = 'div';
		let additionEl;
		if(elt instanceof Widget){
			additionEl = findEl(elt.id!);
		} else if(elt instanceof HTMLElement){
			additionEl = new Dom(elt);
		} else {
			throw new Error("Unexpected Element: not HTMLElement nor Widget")
		}
		const h = document.createElement(element);
		h.className = cssClass;
		h.append(additionEl.at(0));
		if(where == 'before') (el as any).prepend(h);
		else (el as any).append(h);
		if(isWidget(elt)){
			mounted(this, elt as Widget);
		}
		return this;
	}

	remove(child: child | string | null = null, subchild: string | null = null){
		if(this.sealed === true) return this;
		if(!child) resolveSubchild(findEl(this.id!), subchild).remove(); 
		else if (child == '*') findEl(resolveSubchild(findEl(this.id!), subchild).id!).empty();
		else (child as widget)!.remove();
		return this;
	}

	is(state: string, is: any = null){
		const stateName = ':'+state;
		if(is === true || is === false){
			if(is === true) findEl(this.id!).at(0)[stateName] = true;
			else delete findEl(this.id!).at(0)[stateName];
			return true;
		}
		if(state == 'disabled'){
			return findEl(this.id!).hasClass('disabled') && findEl(this.id!).is(':disabled');
		} else {
			return htmlPseudos.indexOf(stateName) == -1 ? findEl(this.id!).at(0)[stateName] : findEl(this.id!).is(stateName);
		}
	}

	children(subchild: string | null = null): Widget[] {
		return filteredChildren(resolveSubchild(findEl(this.id!), subchild).children());
	}

	find(q: string, subchild: string | null = null): Widget {
		return q == '*' ? this.children() : filteredChildren(resolveSubchild(findEl(this.id!), subchild).find(q), true);
	}

	closest(q: string){
		return filteredChildren(findEl(this.id!).closest(q), true, true);
	}

	parent(container: boolean){
		let parent = findEl(this.id!).parent();
		if(!parent && !this.private) return Widget.from(document.body);
		if(container) return this.container();
		if(!parent.at(0)) return null;
		while(!parent.at(0).GUIWIDGET){
			parent = parent.parent();
		}
		if(!parent.at(0).GUIWIDGET) return Widget.from(parent.at(0));
		return parent.at(0).GUIWIDGET;
	}

	container(){
		let parent = findEl(this.id!).parent();
		return Widget.from(parent.at(0));
	}

	attr(props: attr){
		if(this.sealed === true) return this;
		if(typeof props == "object") findEl(this.id!).attr(props);
		return typeof props == "string" ? findEl(this.id!).attr(props) : this;
	}

	prop(props: attr){
		if(this.sealed === true) return this;
		if(typeof props == "object") findEl(this.id!).prop(props);
		return typeof props == "string" ? findEl(this.id!).prop(props) : this;
	}

	css(props: attr){
		if(this.sealed === true) return this;
		if(typeof props == "object") findEl(this.id!).css(props);
		return typeof props == "string" ? findEl(this.id!).css(props) : this;
	}

	styleProp(prop: string){
		if(typeof prop !== 'string') return this;
		return findEl(this.id!).css(prop);
	}
	
	text(text: string){
		if(this.sealed === true) return this;
		findEl(this.id!).text(text)
		return findEl(this.id!).text() || this;
	}

	height(h: number | string | null = null){
		if(this.sealed === true) return this;
		findEl(this.id!).height(h)
		return h ? this : findEl(this.id!).height();
	}

	width(w: number | string | null = null){
		if(this.sealed === true) return this;
		findEl(this.id!).width(w)
		return w ? this : findEl(this.id!).width();
	}

	html(text: string | null = null){
		if(this.sealed === true) return this;
		findEl(this.id!).html(text)
		return text ? this : findEl(this.id!).html();
	}

	addClass(classes: string){
		findEl(this.id!).addClass(classes);
		return this;
	}

	hasClass(classes: string){
		return findEl(this.id!).hasClass(classes);
	}

	removeClass(classes: string){
		findEl(this.id!).removeClass(classes);
		return this;
	}

	toggleClass(classes: string){
		findEl(this.id!).toggleClass(classes);
		return this;
	}

	rect(){
		return findEl(this.id!).at(0).getBoundingClientRect();
	}

	focus(){
		findEl(this.id!).focus();
		return this;
	}

	click(){
		findEl(this.id!).click();
		return this;
	}
	
	toHTMLElement(parent: HTMLGUIWidget | HTMLElement, direction: string | null = null){
		if(this.sealed === true) return this;
		return this.toWidget(Widget.from(parent as HTMLElement), direction);
	}

	toWidget(parent: widget, direction: string | null = null){
		if(this.sealed === true) return this;
		// if(parent.options.shareState) this.setState(parent.state);
		if(direction == 'before') parent!.addBefore(this);
		else parent!.add(this);
		return this;
	}

	to(parent: child, direction: string | null = null){
		if(isWidget(parent)){
			this.toWidget(parent as widget, direction);
		} else if(isHTMLElement(parent)){
			this.toHTMLElement(parent as HTMLGUIWidget, direction);
		} else {
			throw new Error('Only Widgets or HTMLElements Allowed');
		}
		return this;
	}

	

	on(event: string | string[], callback : Function){
		if(Array.isArray(event)){
			event.forEach(event => registerEvent(this, event, callback));
		} else {
			registerEvent(this, event, callback);
		}
		return this;
	}

	off(event: string | string[], callback : Function | null = null){
		if(Array.isArray(event)){
			event.forEach(event => findEl(this.id!).off(event, callback));
		} else {
			findEl(this.id!).off(event, callback);
		}
		return this;
	}

	emit(event: string, data: any){
		findEl(this.id!).trigger(event, data);
		return this;
	}

	hide(time: number | null){
		findEl(this.id!).hide(time);
		return this;
	}

	show(time: number | null){
		findEl(this.id!).show(time);
		return this;
	}

	toggle(time: number | null){
		findEl(this.id!).toggle(time);
		return this;
	}

	raw(){
		if(this.sealed === true) return this;
		return this.private ? this : findEl(this.id!);
	}

	toString(){
		return findEl(this.id!).at(0).outerHTML;
	}

	stripElement(){
		return delete findEl(this.id!).at(0).GUIWIDGET;
	}

	toArray(){
		return [this];
	}

	// State Management

	getStore(store = 'state'){
		return this.store.getStore(store);
	}

	setStore(props: Record<string, any>, store = 'state'){
		this.store.setStore(props, store);
	}

	_onMount(parent: widget){
		if(parent instanceof Widget){
			if(this.options.inheritStore){
				this.store.inherit(parent.store);
			}
		}
	}

	registerProxy(object: any, callback: Function, set = true){
		try{
			return new Proxy(object, {
				set: (target, prop, value) => {
					if(set) target[prop] = value;
					callback(target, prop, value);
					return true;
				}
			});
		} catch(e){
			return object;
		}
	}

	proxyCloner(object: any, object1: any){
		return this.registerProxy(object, (target: any, prop: any, value: any) => {
			console.log(object, object1);
			object1[prop] = value;
		}, false);
	}

	set $id(id: string) { this._id = id, findEl(this.id!).attr({'id': id}); };
}


class WidgetList extends Array {

	static from(array: Array<any>){
		return new WidgetList(...array);
	}

	add(child: child, subchild: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.add(child, subchild));
			}
		});
		return responses;
	}

	remove(child: child, subchild: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.remove(child, subchild));
			}
		});
		return responses;
	}

	is(state: string, is: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.is(state, is));
			}
		});
		return responses;
	}

	attr(props: attr){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.attr(props));
			}
		});
		return responses;
	}

	disable(){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.disable());
			}
		});
		return responses;
	}

	enable(){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.enable());
			}
		});
		return responses;
	}

	prop(props: attr){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.prop(props));
			}
		});
		return responses;
	}

	addClass(classes: string){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.addClass(classes));
			}
		});
		return responses;
	}

	hasClass(classes: string){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.hasClass(classes));
			}
		});
		return responses;
	}

	removeClass(classes: string){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.removeClass(classes));
			}
		});
		return responses;
	}

	toggleClass(classes: string){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.toggleClass(classes));
			}
		});
		return responses;
	}

	text(text: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.text(text));
			}
		});
		return responses;
	}

	height(h: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.height(h));
			}
		});
		return responses;
	}

	width(w: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.width(w));
			}
		});
		return responses;
	}

	on(event: string | string[], callback: Function){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.on(event, callback));
			}
		});
		return responses;
	}

	off(event: string | string[], callback: Function){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.off(event, callback));
			}
		});
		return responses;
	}

	emit(event: string | string[], data: any){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.emit(event, data));
			}
		});
		return responses;
	}

	hide(time: number | null = null){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.hide(time));
			}
		});
		return responses;
	}

	show(time: number | null = null){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.show(time));
			}
		});
		return responses;
	}

	toggle(time: number | null = null){
		let responses = new WidgetList();
		this.forEach(widget => {
			if(isWidget(widget)){
				responses.push(widget.toggle(time));
			}
		});
		return responses;
	}

}

export type { widget, child, widgetF, HTMLGUIWidget, event };
export { WidgetList };
export default WidgetProps;