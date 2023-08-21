const elementList = {};
const specificTypes = 'large|transparent|outline'.split('|')
const typedElements = 'button|input'.split('|')

function registerElement(element: object, id: String){
	elementList[id as string] = element;
}

function findEl(id: string){
	return elementList[id as string];
}

function elementTypes(type1, types, id){
	if(!typedElements.includes(type1)) type1 = null;
	types.forEach(type => {
		let el = findEl(id);
		if(specificTypes.includes(type)){
			type1 = findEl(id).GUIWIDGET.options.class;
		}
		let t = (type1 ? type1+'-' : '')+type;
		el.classList.toggle(t);
	});
}

function createElement(element: string, classes: string, attr: object){
	let el = document.createElement(element);
	if(attr) setAttributeMap(el, attr);
	if(classes) setClasses(el, classes);
	return el;
}

function setAttributeMap(element: HTMLElement, attr: object){
	for(var i in attr){
		element.setAttribute(i, attr[i]);
	}
}

function setClasses(element: HTMLElement, classes: string, type : 'add'|'remove'|'toggle'|'contains' = 'add' ){
	element
		.classList
			[type]
		(classes);
}

function setCss(element, values, value: string | null = null) {
	if (typeof values === 'string') {
			if (value === null) {
					return window.getComputedStyle(element).getPropertyValue(values);
			} else {
					element.style[values] = value;
			}
	} else if (typeof values === 'object') {
			for (const prop in values) {
					element.style[prop] = values[prop];
			}
	}
}

function emptyElement(element: HTMLElement){
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function siblings(element: HTMLElement) {
	return Array.from(element.parentNode?.children || []).filter(child => child !== element);
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