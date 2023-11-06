import { HTMLGUIWidget, child } from "../widgets/_ghost/WidgetProps";
import Widget from "../widgets/main/Widget";
import { attr, createElement, emptyElement, findEl, setAttributeMap, setClasses, setCss, setObjectProps, siblings } from "./elman";

interface HTMLElementWithEvents extends HTMLElement {
  domEventListeners?: any;
}

const doAll = (all : Dom, cb : Function) => {
	let response : Array<any> = [];
	all.forEach((element: any) => {
		let r = cb(element);
		if(r) response.push(r);
	});
	response = response.filter(item => !(item instanceof Dom));
	if(response.length){
		response = response.shift()
	} else {
		(response as any) = all;
	}
	return Array.isArray(response) ? all : response;
};


class Dom {

	elements: Array<HTMLElement | HTMLGUIWidget> = [];

	constructor(element: HTMLElement | string, classes : null | string = null, attributes : null | string = null){
		if(element instanceof HTMLElement){
			this.elements.push(element);
		} else {
			let el = document.querySelectorAll(element);
			el.forEach(el => this.elements.push(el as HTMLElement));
		}

		if(classes){
			this.addClass(classes);
		}

		if(attributes){
			this.attr(attributes);
		}
	}

	at(index: number){
		return this.elements.at(index)!;
	}
	
	push(child: child){
		if(child instanceof Widget){
			this.elements.push(findEl(child.id!));
		} else {
			this.elements.push(child as HTMLGUIWidget);
		}
		return this;
	}

	unshift(child: child){
		if(child instanceof Widget){
			this.elements.unshift(findEl(child.id!));
		} else {
			this.elements.unshift(child as HTMLGUIWidget);
		}
		return this;
	}

	shift(){
		return this.elements.shift()!;
	}

	pop(){
		return this.elements.pop()!;
	}

	forEach(callback: any){
		this.elements.forEach(callback);
		return this;
	}

	get length(): number {
		return this.elements.length;
	}

	addClass(classes: string){
		return doAll(this, (el: HTMLElement) => setClasses(el, classes, 'add'));
	}

	removeClass(classes: string){
		return doAll(this, (el: HTMLElement) => setClasses(el, classes, 'remove'));
	}

	toggleClass(classes: string){
		return doAll(this, (el: HTMLElement) => setClasses(el, classes, 'toggle'));
	}

	hasClass(classes: string){
		return this.elements.at(0)!.classList.contains(classes);
	}

	attr(attr: object | string){
		if(typeof attr == 'object') doAll(this, (el: HTMLElement) => setAttributeMap(el, attr as attr));
		return typeof attr == "string" ? (this.elements.at(0)!.attributes as Record<string, any>)[attr as string].value : this;
	}

	getAttr(attr: string){
		return (this.elements.at(0)!.attributes as Record<string, any>)[attr as string].value;
	}

	prop(attr: object | string){
		if(typeof attr == 'object') doAll(this, (el: HTMLElement) => setObjectProps(el, attr as attr));
		return typeof attr == "string" ? (this.elements.at(0)! as Record<string, any>)[attr as string] : this;
	}

	getProp(attr: string){
		return (this.elements.at(0)! as Record<string, any>)[attr as string];
	}

	html(html: string | null): string | null {
		if(html) this.elements.at(0)!.innerHTML = html;
		return this.elements.at(0)!.innerHTML;
	}

	width(width: string | number | null = null){
		if(width) doAll(this, (el: HTMLElement) => el.style.width = typeof width == "number" ? width+'px' : width);
		return width ? this : this.at(0).getBoundingClientRect().width;
	}

	height(height: string | number | null = null){
		if(height) doAll(this, (el: HTMLElement) => el.style.height = typeof height == "number" ? height+'px' : height);
		return height ? this : this.at(0).getBoundingClientRect().height;
	}

	text(text: string | null): string | null {
		if(typeof text == "string") this.elements.at(0)!.innerText = text;
		return this.elements.at(0)!.innerText;
	}


	append(element: HTMLElement | Dom){
		if(element instanceof Dom){
			element.forEach((element: HTMLElement) => this.at(0).appendChild(element));
		} else {
			this.at(0).appendChild(element);
		}
		return this;
	}

	appendTo(element: HTMLElement){
		return doAll(this, (el: HTMLElement) => element.appendChild(el));
	}

	prepend(element: HTMLElement) {
		if(element instanceof Dom){
			element.forEach((element: HTMLElement) => this.at(0).insertBefore(element, this.at(0).firstChild));
		} else {
			this.at(0).insertBefore(element, this.at(0).firstChild)
		}
    return this;
	}

	prependTo(element: HTMLElement) {
		return doAll(this, (el: HTMLElement) => element.insertBefore(el, element.firstChild));
	}


	css(values: string | object, value: string | null){
		return doAll(this, (el: HTMLElement) => setCss(el, values, value));
	}

	remove(){
		return doAll(this, (el: HTMLElement) => el.remove());
	}

	empty() : Dom {
		return doAll(this, (el: HTMLElement) => emptyElement(el));
	}

	children(): Dom {
		return Dom.from(this.at(0).children.length ?  this.at(0).children : []);
	}
	
	siblings(): Dom {
		return Dom.from(siblings(this.at(0)));
	}

	parent(): Dom | null {
		return this.at(0).parentNode ? new Dom(this.at(0).parentNode as HTMLElement) : null;
	}

	closest(selector: string): Dom | null {
		return new Dom(this.at(0).closest(selector) as HTMLElement);
	}

	find(selector: string): Dom;
  find<S extends HTMLElement>(predicate: (value: HTMLElement, index: number, array: HTMLElement[]) => value is S): S | undefined;
  find(predicate: (value: HTMLElement, index: number, array: HTMLElement[]) => unknown): HTMLElement | undefined;

  find(arg: any): any {
    if (typeof arg === 'string') {
      return Dom.from(Array.from(this.at(0).querySelectorAll(arg)));
    } else if (typeof arg === 'function') {
      return Array.prototype.find.call(this, arg);
    }
    return undefined;
  }

	on(event: string, callback: Function){
		doAll(this, (el: HTMLElementWithEvents) => {
			if(!el.domEventListeners) el.domEventListeners = [];
			el.domEventListeners.push({ event, callback });
			el.addEventListener(event, callback as EventListenerOrEventListenerObject);
		});
		return this;
	}

	is(selector: string) {
		const element = this.elements.at(0) as any;
		if ('matches' in element) {
			return element.matches(selector);
		} else if ('msMatchesSelector' in element && typeof element.msMatchesSelector === "function") {
			return element.msMatchesSelector(selector);
		} else if ('webkitMatchesSelector' in element && typeof element.msMatchesSelector === "function") {
			return element.webkitMatchesSelector(selector);
		} else if ('mozMatchesSelector' in element && typeof element.msMatchesSelector === "function") {
			return element.mozMatchesSelector(selector);
		} else {
			const matches = document.querySelectorAll(selector);
			return Array.from(matches).indexOf(element) !== -1;
		}
	}
	

	off(name: string, callback: Function | null = null){
		doAll(this, (el: HTMLElementWithEvents) => {
			if(!el.domEventListeners) el.domEventListeners = [];
			el.domEventListeners.forEach((event: Record<string, any>) => {
				if(callback){
					if(event.event === name && event.callback == callback) el.removeEventListener(name, callback as EventListenerOrEventListenerObject);
				} else {
					if(event.event === name)  el.removeEventListener(name, event.callback);
				}
			});
			el.domEventListeners = el.domEventListeners.filter((event : Record<string, any>) => {
				if(callback){
					return event.event !== name && event.callback !== callback;
				}	else {
					return event.event !== name;
				}			
			});
		});
		return this;
	}

	trigger(event: string, data: any){
		doAll(this, (el: HTMLElement) => {
			el.dispatchEvent(new Event(event, data));
		});
		return this;
	}

	static from(elements: HTMLElement[] | HTMLCollection){
		let e = new Dom((Array.from(elements) as HTMLElement[]).shift() as HTMLElement);
		Array.from(elements).forEach(el => e.push(el as HTMLElement));
		return e;
	}

	static create(element: string, classes: string = "", attr: attr = {}) : Dom {
		return new Dom(createElement(element, classes, attr));
	}
}

export default Dom;