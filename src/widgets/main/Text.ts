import $ from "jquery";
import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options";
import Store from "../../data/Store.js";

class textOptions extends options {
	text?: string | null = "";
}

const defaultText = () => getDefaults({
	element: { name: 'div' },
	class: 'text-wrapper',
	accepts: false,
} as textOptions);

class Text extends Widget {

	constructor(selectedOptions: string | Record<string, any>, otheroptions: Record<string, any> | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultText()) as textOptions;
		super(options);

		if(options.text) this.text(options.text);
	}


	static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object){
		if(typeof selectedOptions == 'string'){
			selectedOptions = { text: selectedOptions };
		}
		if(otheroptions){
			selectedOptions = {...otheroptions, ...selectedOptions};
		}
		return {...defaults, ...selectedOptions};
	}
}

export default Text;