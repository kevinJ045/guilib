import { findEl } from "../../utils/elman";
import Widget from "../main/Widget.js";
import { EntryController } from "./Form.js";


class InputWrapper extends Widget{
	constructor(selectedOptions){
		const options = {...({ element: {name: 'input'}, class: "input-wrapper", _setters: ['inputType', 'title']}), ...selectedOptions};
		super(options);

		if(options.controller){
			this.setController(options.controller);
		}
	}

	setController(controller){
		if(this.__controller) throw new Error('Input already is married to a controller.');
		if(controller instanceof EntryController){
			this.on('input', () => {
				controller.set(this.val(), true);
			});
			controller.onChange((v) => this.val() !== v ? this.val(v) : []);
			this.__controller = controller;
		}
	}

	set inputType(type){
		findEl(this.id).attr('type', type);
	}
	
	set title(text){
		findEl(this.id).attr('placeholder', text.toString());
	}
}

export default InputWrapper;