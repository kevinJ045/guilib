import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import Text from "../main/Text.js";
import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import Link, { IconLink } from "../main/Link.js";

const defaultButton = (more, link) => getDefaults({
	element: { name: link ? 'a' : 'button' },
	class: more ? 'button '+more : 'button',
	accepts: false,
});

const defaultButtonsegment = () => getDefaults({
	element: { name: 'div' },
	class: 'button-segment'
});

class Button extends Text {

	state = new Store({text: "Button"});

	constructor(selectedOptions, otheroptions){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultButton());
		super(options);
		if(options.icon) this.icon = options.icon;
	}

	set icon(icon){
		if(icon instanceof Icon) findEl(this.id)
			.prepend(icon.toString());
	}
	
}

class ButtonSegment extends Widget {

	constructor(selectedOptions){
		super({...defaultButtonsegment(), ...selectedOptions});
	}

}

class IconButton extends IconLink {
	constructor(icon, selectedOptions = {}){
		const options = {...defaultButton('icon-only', selectedOptions.url), ...{children: [icon]}, ...selectedOptions};
		super(icon, options);
	}
}

class LinkButton extends Link {
	constructor(text, selectedOptions){
		const options = {...defaultButton('link-button', true), ...selectedOptions};
		super(text, options);
	}
}

export { ButtonSegment, IconButton, LinkButton };
export default Button;