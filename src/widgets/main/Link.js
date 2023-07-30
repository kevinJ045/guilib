import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../../utils/options.js";
import Text from "./Text.js";
import Store from "../../data/Store.js";

const defaultLink = () => getDefaults({
	element: { name: 'a' },
	class: 'link',
	accepts: false
});

class Link extends Text {

	state = new Store({text: "Link"});

	constructor(selectedOptions, otheroptions){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultLink());
		super(options);
	}
	
}

class IconLink extends Widget {
	constructor(icon, selectedOptions = {}){
		const options = {...defaultLink(), ...{children: [icon]}, ...selectedOptions};
		super(options);
	}
}

export { IconLink };
export default Link;