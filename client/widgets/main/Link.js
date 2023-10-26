import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../../utils/options.js";
import Text from "./Text.js";
import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";

const defaultLink = (more) => getDefaults({
	element: { name: 'a' },
	class: more ? 'link '+more : 'link',
	accepts: false,
	_setters: ['url', 'icon']
});

function link(el, url){
	if(url.match(/^ui\.([a-zA-Z]+):/)){
		let [, name, ui] = url.match(/ui\.([a-zA-Z]+):(.+)/);
		el
			.addClass(name+'-link')
			.attr({['data-'+name]: ui});
	} else {
		el
			.attr({'href': url});
	}
}

class Link extends Text {

	constructor(selectedOptions, otheroptions){
		const options = Text.resolveOptions(selectedOptions, otheroptions, {...defaultLink()});
		super(options);
		if(options.icon) this.icon = options.icon;
		if(options.close) findEl(this.id).append($(`<span class="material-icons close-tab">close</span>`).on('click', () => {
			this.emit('closed');
		}));
	}

	set icon(icon){
		if(icon instanceof Icon) findEl(this.id)
			.prepend(icon.toString());
	}

	set url(url){
		link(findEl(this.id), url);
	}
	
}

export default Link;