import Widget, { initiateSetters } from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import Header from "./Header.js";
import FloatingActionButton from "../buttons/FAB.js";
import { findEl } from "../../utils/elman.js";

class Page extends Widget {

	constructor(selectedOptions){
		const options = {...(getDefaults({element: {name: 'div'}, class: 'page-content'})), ...selectedOptions, shareState: true};
		super(options);

		if(!options.body) throw new Error('component must be specified as "body: $el"!');

		this.body = options.body instanceof Widget ? options.body : Widget.from(options.body);

		initiateSetters(this, ['header', 'toolbar', 'fab'], options);
	}

	set header(header){
		if(!header instanceof Header) throw new Error('the given header is not of type Header');
		this.body.addBefore(header);
	}

	set fab(fab){
		if(!toolbar instanceof FloatingActionButton) throw new Error('the given fab is not of type FAB');
		console.log(this.body);
		this.body.add(fab);
	}

	set toolbar(toolbar){
		if(!toolbar instanceof Header) throw new Error('the given header is not of type Header');
		this.body.add(toolbar);
	}

}

export default Page;