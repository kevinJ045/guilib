import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";

const defaultTag = () => getDefaults({
	element: { name: 'div', html: `<div class="chip-media">#</div><div class="chip-label">Chip</div>` },
	class: 'chip',
	accepts: false,
	_setters: ['icon', 'title', 'close']
});

const defaultTags = () => getDefaults({
	element: { name: 'div' },
	class: 'tag'
});

class Tag extends Widget {

	constructor(selectedOptions){
		const options = {...defaultTag(), ...selectedOptions};
		super(options);
		if(options.color){
			this.color = options.color;
		}
	}

	set color(color){
		findEl(this.id)
			.addClass('color-'+color);
	}
	set title(text){
		findEl(this.id).find('.chip-label').text(text);
	}

	set icon(icon){
		const el = findEl(this.id).find('.chip-media')
			.empty();
		if(icon instanceof Icon) icon.to(el[0]);
		else el.text(icon);
	}

	set close(func){
		const a = $(`<a class="chip-delete" />`);
		a.on('click', () => func(this));
		findEl(this.id).append(a);
	}
	
}

export default Tag;