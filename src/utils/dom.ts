import { createElement, emptyElement, setAttributeMap, setClasses, setCss, siblings } from "./elman";


const doAll = (all : Dom, cb : Function) => {
	let response : Array<any> = [];
	all.forEach(element => {
		let r = cb(element);
		if(r) response.push(r);
	});
	response = response.filter(item => !(item instanceof Dom));
	if(response.length){
		response = response.shift()
	} else {
		response = all;
	}
	return Array.isArray(response) ? all : response;
};

class Dom extends Array {

	constructor(element: HTMLElement | string, classes : null | string = null, attributes : null | string = null){
		super();
		if(element instanceof HTMLElement){
			this.push(element);
		} else {
			let el = document.querySelectorAll(element);
			this.push(...el);
		}

		if(classes){
			this.addClass(classes);
		}

		if(attributes){
			this.attr(attributes);
		}
	}

	addClass(classes: string){
		return doAll(this, el => setClasses(el, classes, 'add'));
	}

	removeClass(classes: string){
		return doAll(this, el => setClasses(el, classes, 'remove'));
	}

	toggleClass(classes: string){
		return doAll(this, el => setClasses(el, classes, 'toggle'));
	}

	hasClass(classes: string){
		return this.at(0).classList.contains(classes);
	}


	attr(attr: object | string){
		doAll(this, el => setAttributeMap(el, attr as object));
		return typeof attr == "string" ? this.at(0).attributes[attr as string] : this;
	}

	html(html: string | null): string | null {
		if(html) this.at(0).innerHTML = html;
		return this.at(0).innerHTML;
	}

	text(text: string | null): string | null {
		if(text) this.at(0).innerText = text;
		return this.at(0).innerText;
	}


	append(element){
		return this.at(0).appendChild(element);
	}

	appendTo(element){
		return doAll(this, el => element.appendChild(el));
	}

	prepend(element) {
    return this.at(0).insertBefore(element, this.at(0).firstChild);
	}

	prependTo(element) {
		return doAll(this, el => element.insertBefore(el, element.firstChild));
	}


	css(values: string | object, value: string | null){
		return doAll(this, el => setCss(el, values, value));
	}

	remove(){
		return doAll(this, el => el.remove());
	}

	empty() : Dom {
		return doAll(this, el => emptyElement(el));
	}

	children(): Dom {
		return Dom.from(this.at(0).children);
	}
	
	siblings(): Dom {
		return Dom.from(siblings(this.at(0)));
	}

	parent(): Dom {
		return new Dom(this.at(0).parentNode);
	}

	closest(selector: string): Dom {
		return new Dom(this.at(0).closest(selector));
	}

	find(selector): Dom {
		return Dom.from(this.at(0).querySelectorAll(selector));
	}

	static from(elements){
		let e = new Dom(elements.shift());
		Array.from(elements).forEach(el => e.push(el));
		return e;
	}

	static create(element: string, classes: string = "", attr: object = {}) : Dom {
		return new Dom(createElement(element, classes, attr));
	}
}

export default Dom;