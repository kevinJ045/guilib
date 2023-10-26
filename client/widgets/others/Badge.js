import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Store from "../../data/Store.js";

const defaultBadge = () => getDefaults({
	element: { name: 'div' },
	class: 'badge'
});

class Badge extends Text {

	state = new Store({text: "Badge"});

	constructor(selectedOptions, otheroptions){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultBadge());
		super(options);

		if(options.color){
			this.color = options.color;
		}
	}

	set color(color){
		findEl(this.id)
			.attr('class', 'badge')
			.addClass('color-'+color);
	}
	
}

export default Badge;