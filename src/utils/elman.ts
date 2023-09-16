import WidgetProps, { HTMLGUIWidget } from "../widgets/_ghost/WidgetProps";

const elementList: Record<string, any> = {};
const specificTypes = 'large|transparent|outline'.split('|')
const typedElements = 'button|input'.split('|')

type attr = Record<string, number | string | boolean>;
type attrNullable = Record<string, number | string | boolean | null>;
type attrOptions = Record<string, WidgetProps | HTMLGUIWidget | number | string | boolean | null>;

function registerElement(element: object, id: String){
	elementList[id as string] = element;
}

function findEl(id: string){
	return elementList[id as string];
}

function elementTypes(type1: string | null, types: Array<string>, id: string){
	if(!typedElements.includes(type1 as string)) type1 = null;
	types.forEach((type: string) => {
		let el = findEl(id);
		if(specificTypes.includes(type)){
			type1 = findEl(id).GUIWIDGET.options.class;
		}
		let t = (type1 ? type1+'-' : '')+type;
		el.classList.toggle(t);
	});
}

function createElement(element: string, classes: string, attr: attr){
	let el = document.createElement(element);
	if(attr) setAttributeMap(el, attr);
	if(classes) setClasses(el, classes);
	return el;
}

function setAttributeMap(element: HTMLElement, attr: attr){
	for(var i in attr){
		element.setAttribute(i, attr[i].toString());
	}
}

function setClasses(element: HTMLElement, classes: string, type : 'add'|'remove'|'toggle'|'contains' = 'add' ){
	element
		.classList
			[type]
		(classes);
}

function setCss(element: HTMLElement, values: string | Record<string, any>, value: string | number | null = null) {
	if (typeof values === 'string') {
		if (value === null) {
			return window.getComputedStyle(element).getPropertyValue(values);
		} else {
			if(typeof value == 'number') value = value + 'px';
			(element.style as Record<string, any>)[values as string] = value;
		}
	} else if (typeof values === 'object') {
		for (const prop in values) {
			let value = values[prop];
			if(typeof value == 'number') value = value + 'px';
			(element.style as Record<string, any>) [prop.toString()] = value;
		}
	}
}

function emptyElement(element: HTMLElement){
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function siblings(element: HTMLElement) {
	return Array.from(element.parentNode?.children || []).filter(child => child !== element).map(el => el as HTMLElement);
}

export {
	registerElement,
	findEl,
	elementTypes,
	elementList as GUIDOMTREE,
	createElement,
	setAttributeMap,
	setClasses,
	setCss,
	emptyElement,
	siblings
}

export type { attr, attrNullable, attrOptions }