import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../utils/options.js";

const defaultBody = getDefaults({
	element: { name: 'main' },
	class: 'body'
});

class Body extends Widget {

	constructor(selectedOptions){
		super({...selectedOptions, ...defaultBody});
		this.add(selectedOptions.child);
	}

}

export default Body;