import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../utils/options.js";

const defaultButton = getDefaults({
	element: { name: 'button' },
	class: 'button',
	accepts: false
});

class Button extends Widget {

	state = {text: "Button"};

	constructor(selectedOptions){
		const options = {...defaultButton, ...selectedOptions};
		super(options);

		this.text(this.state.text);
	}

}

export default Button;