import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options.js";
import Text from "./Text.js";
import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import Dom from "../../utils/dom";
import { Controller } from "../../extra";

const defaultLink = (more: string | null = null) => getDefaults({
	element: { name: 'a' },
	class: more ? 'link '+more : 'link',
	accepts: false,
	_setters: ['url'],
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
	url?: string | urlOptions
}

class Link<T = LinkOptions> extends Text<T> {

	constructor(selectedOptions: string | LinkOptions, otheroptions: LinkOptions | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, {...defaultLink()}) as options;
		super(options);
		// if(options.close) findEl(this.id).append($(`<span class="material-icons close-tab">close</span>`).on('click', () => {
		// 	this.emit('closed');
		// }));
	}


	set url(url: string | Controller<string>){
		if(url instanceof Controller) url.onChange((change: string) => {
			this.url = change;
		});
		link(findEl(this.id!), url instanceof Controller ? url.get() : url);
	}
	
}

export default Link;