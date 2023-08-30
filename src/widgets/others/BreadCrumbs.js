import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

const defaultBreadcrumb = () => getDefaults({
	element: { name: 'div' },
	class: 'breadcrumbs'
});

class BreadCrumbs extends Widget {

	constructor(selectedOptions){
		const options = {...defaultBreadcrumb(), ...selectedOptions};
		super(options);
	}

	add(child){
		if(findEl(this.id).find('.breadcrumbs-item').length) findEl(this.id).append(`<div class="breadcrumbs-separator"></div>`);
		super.addWrappedElement(child, `breadcrumbs-item`);
	}

}

export default BreadCrumbs;