import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../utils/options.js";
import Text from "./Text.js";

const defaultLink = () => getDefaults({
	element: { name: 'a' },
	class: 'link',
	accepts: false
});

class Link extends Text {

	state = {text: "Link"};

	constructor(selectedOptions, otheroptions){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultLink());
		super(options);
	}
	
}

export default Link;