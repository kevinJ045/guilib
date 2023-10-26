import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options.js";
import Text from "./Text.js";
import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import Dom from "../../utils/dom";

const defaultLink = (more: string | null = null) => getDefaults({
	element: { name: 'a' },
	class: more ? 'link '+more : 'link',
	accepts: false,
	_setters: ['url'],
	icon: null
});

function link(el: Dom, url: string){
	if(url.match(/^ui\.([a-zA-Z]+):/)){
		let [, name, ui] = url.match(/ui\.([a-zA-Z]+):(.+)/) as RegExpMatchArray;
		el
			.addClass(name+'-link')
			.attr({['data-'+name]: ui});
	} else {
		el
			.attr({'href': url});
	}
}

class Link extends Text {

	constructor(selectedOptions: string | Record<string, any>, otheroptions: Record<string, any> | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, {...defaultLink()}) as options;
		super(options);
		// if(options.close) findEl(this.id).append($(`<span class="material-icons close-tab">close</span>`).on('click', () => {
		// 	this.emit('closed');
		// }));
	}


	set url(url: string){
		link(findEl(this.id!), url);
	}
	
}

export default Link;