import Widget from "../main/Widget";
import getDefaults from "../../utils/options";
import Text from "../main/Text";
import Store from "../../data/Store";
import { findEl } from "../../utils/elman";
import Link from "../main/Link";

const defaultButton = (more: any, link: any) => getDefaults({
	element: { name: link ? 'a' : 'button' },
	class: more ? 'button '+more : 'button',
	accepts: false,
});

class Button extends Link {

	constructor(selectedOptions: string | Record<string, any>, otheroptions: Record<string, any> | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultButton(null, otheroptions?.url || (selectedOptions as Record<string, any>)?.url));
		super(options);
	}
	
}

export default Button;