import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options";
import Text from "./Text";
import Store from "../../data/Store";
import { findEl } from "../../utils/elman";
import Dom from "../../utils/dom";
import { Controller } from "../../extra";

const defaultLink = (more: string | null = null) => getDefaults({
	element: { name: 'a' },
	class: more ? 'link '+more : 'link',
	accepts: false,
	_setters: ['url', 'target'],
	icon: null
});

export interface urlOptions {
	url: string,
	click: (url: string) => void
}

function link(el: Dom, url: string | urlOptions){
	if(typeof url == "string"){
		el
			.attr({'href': url});
	} else {
		if(url.url){
			el
			.attr({'href': url.url})
			.on('click', (e: MouseEvent) => {
				e.preventDefault();
				url.click(url.url);
			});
		}
	}
}

export interface LinkOptions extends options {
	url?: string | urlOptions,
	target?: string
}

class Link<T extends LinkOptions = LinkOptions> extends Text<T> {

	constructor(selectedOptions: string | T, otheroptions: T | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, {...defaultLink()}) as options;
		super(options);
	}


	set url(url: string | Controller<string>){
		if(url instanceof Controller) url.onChange((change: string) => {
			this.url = change;
		});
		link(findEl(this.id!), url instanceof Controller ? url.get() : url);
	}

	set target(target: string){
		findEl(this.id!).at(0).target = target;
	}
	
}

export default Link;