import Controller from "../../data/Controller";
import { findEl } from "../../utils/elman";
import { options } from "../../utils/options";
import Widget from "../main/Widget.js";

export class EntryController extends Controller<string> {
	constructor(val: string){super(val)}
};

export interface EntryOptions extends options {
	controller?: EntryController,
	title?: string,
	onTextInput?: CallableFunction
}

class InputWrapper extends Widget{
	__controller?: EntryController;

	constructor(selectedOptions: EntryOptions){
		const options = {...({ element: {name: 'input'}, attr: { type: 'text' }, class: "input-wrapper", _setters: ['inputType', 'title']}), ...selectedOptions};
		super(options);

		if(options.controller){
			this.setController(options.controller);
		}
	}

	setController(controller: EntryController){
		if(this.__controller) throw new Error('Input already is married to a controller.');
		if(controller instanceof EntryController){
			const change = (v: string) => this.val() !== v ? this.val(v) : [];
			this.on('textinput', () => {
				controller.set(this.val(), change);
			});
			controller.onChange(change);
			this.__controller = controller;
			this.val(controller.get());
		}
	}

	val(value: string | null = null){
		if(value) findEl(this.id!).at(0).value = value;
		return findEl(this.id!).at(0).value;
	}

	set inputType(type: string | Controller<string>){
		if(type instanceof Controller) type.onChange((change: string) => {
			this.inputType = change;
		});
		findEl(this.id!).attr({'type': type instanceof Controller ? type.get() : type.toString()});
	}
	
	set title(text: string | Controller<string>){
		if(text instanceof Controller) text.onChange((change: string) => {
			this.title = change;
		});
		findEl(this.id!).attr({'placeholder': text instanceof Controller ? text.get() : text.toString()});
	}
}

export default InputWrapper;