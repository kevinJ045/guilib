import { options } from "../../extra";
import { findEl } from "../../utils/elman";
import Widget from "../main/Widget";

/**
 * Fake react environment to create widgets and 
 * normal html elements inside rayous.
 * 
 * You can use the other method:
 * @example
 * // Example of using the fake React environment
 * /** \@jsx createWidgetElement *\/
 */
export const React = {
	createElement: createWidgetElement
};

/** @jsx createWidgetElement */

export function createWidgetElement(tag: string | (new (options: options) => Widget), props: null | Record<string, any> = {}, ...children: any[]) {
	let element;
	if(typeof tag == "string"){
		element = document.createElement(tag);
		if(props && props.className) (element.className = props.className) && (delete props.className);
		if(props) for (const [key, value] of Object.entries(props)) {
			element.setAttribute(key, value as string);
		}
		for (const child of children) {
			if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else if (child instanceof Widget) {
				child.to(element);
			} else {
				element.appendChild(child);
				if(tag == 'svg'){
					element.outerHTML += ' ';
				}
			}
		}
	} else {
		if(!props) props = {};
		if(children.length == 1 && typeof children[0] == "string"){
			props.text = children.pop();
		}
		element = new tag({
			...props,
			children
		});
	}
	return element!;
}
