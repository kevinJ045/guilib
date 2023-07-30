import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import Text from "../main/Text.js";
import Store from "../../data/Store.js";

const defaultButton = () => getDefaults({
	element: { name: 'button' },
	class: 'button',
	accepts: false
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
	}
	
}

class ButtonSegment extends Widget {

	constructor(selectedOptions){
		super({...defaultButtonsegment(), ...selectedOptions});
	}

}

export { ButtonSegment };
export default Button;