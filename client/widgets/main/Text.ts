import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options";
import Store from "../../data/Store.js";
import Controller from "../../data/Controller";
import { child } from "../_ghost/WidgetProps";

type text = string | Controller<any> | ((widget: Widget) => string);
type textPromise = text | Promise<text>;
class textOptions extends options {
	text?: textPromise | null = "";
}

const defaultText = () => getDefaults({
	element: { name: 'div' },
	class: 'text-wrapper',
	accepts: false,
} as textOptions);

class Text extends Widget {

	constructor(selectedOptions: string | textOptions, otheroptions: textOptions | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultText()) as textOptions;
		super(options);

		this.render();
	}

	_optionChange(options: any){
		this.render();
	}

	render(){
		const options: textOptions = this.options;
		let text: textPromise = options.text || "";
		const doText = (text: text) => {
			if(typeof text == "function"){
				text = (options.text as Function)(this) as string;
			} else if(text instanceof Controller){
				text.onChange((change: string) => {
					(this.options as textOptions).text = change.toString();
				});
				text = text.get().toString() as string;
			}
			this.text(text);
			if(options.children) this.addAll(...(options.children as child[]));
		}
		if(text instanceof Promise){
			text.then(doText);
		} else {
			doText(text);
		}
	}

	static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object){
		if(typeof selectedOptions == 'string' || selectedOptions instanceof Controller || selectedOptions instanceof Promise){
			selectedOptions = { text: selectedOptions };
		}
		if(otheroptions){
			selectedOptions = {...otheroptions, ...selectedOptions};
		}
		return {...defaults, ...selectedOptions};
	}
}

export type {textOptions, text};
export default Text;