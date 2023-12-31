import WidgetProps, { HTMLGUIWidget } from "../widgets/_ghost/WidgetProps";
import Dom from "./dom";

const elementList: Record<string, any> = {};
const specificTypes = 'large|transparent|outline'.split('|')
const typedElements = 'button|input'.split('|')

type attr = Record<string, number | string | boolean>;
type attrNullable = Record<string, number | string | boolean | null>;
type attrOptions = Record<string, WidgetProps | HTMLGUIWidget | number | string | boolean | null>;

function registerElement(element: any, id: String){
	elementList[id as string] = element;
}

function findEl(id: string): Dom | any {
	return elementList[id as string];
}

function createElement(element: string, classes: string, attr: attr){
	let el = document.createElement(element);
	if(attr) setAttributeMap(el, attr);
	if(classes) setClasses(el, classes);
	return el;
}

function setAttributeMap(element: HTMLElement, attr: attr){
	for(var i in attr){
		if(attr[i]) element.setAttribute(i, attr[i].toString());
		else if(attr[i] == false) element.removeAttribute(i);
	}
}

function setObjectProps(element: HTMLElement, attr: attr){
	for(var i in attr){
		(element as any)[i] = attr[i];
	}
}

function setClasses(element: HTMLElement, classes: string, type : 'add'|'remove'|'toggle'|'contains' = 'add' ){
	if(!classes.trim()) return;
	const classNames = classes.trim().match(' ') ? classes.trim().split(' ') : [classes.trim()];
	classNames.forEach(className => element
		.classList
			[type]
		(className));	
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
			if(!prop.startsWith('--') && typeof value == 'number') value = value + 'px';
			if(prop in element.style) (element.style as any)[prop] = value;
			else element.style.setProperty(prop, value);
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
	elementList as GUIDOMTREE,
	createElement,
	setAttributeMap,
	setObjectProps,
	setClasses,
	setCss,
	emptyElement,
	siblings
}

export type { attr, attrNullable, attrOptions }