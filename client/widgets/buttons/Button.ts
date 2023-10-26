import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import Text from "../main/Text.js";
import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import Link from "../main/Link.js";

const defaultButton = (more: any, link: any) => getDefaults({
	element: { name: link ? 'a' : 'button' },
	class: more ? 'button '+more : 'button',
	accepts: false,
});

class Button extends Link {

	state = new Store({text: "Button"});

	constructor(selectedOptions: string | Record<string, any>, otheroptions: Record<string, any> | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultButton(null, otheroptions?.url || (selectedOptions as Record<string, any>)?.url));
		super(options);
	}
	
}

export default Button;