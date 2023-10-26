import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options";
import Store from "../../data/Store.js";
import Controller from "../../data/Controller";

type text = string | Controller<any> | ((widget: Widget) => string);
class textOptions extends options {
	text?: text | null = "";
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

		this.render();
	}

	_optionChange(options: any){
		this.render();
	}

	render(){
		const options: textOptions = this.options;
		let text: text = options.text || "";
		if(typeof text == "function"){
			text = (options.text as Function)(this) as string;
		} 
		if(text instanceof Controller){
			text.onChange((change: string) => {
				(this.options as textOptions).text = change.toString();
			});
			text = text.get().toString() as string;
		}
		this.text(text);
	}

	static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object){
		if(typeof selectedOptions == 'string' || selectedOptions instanceof Controller){
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