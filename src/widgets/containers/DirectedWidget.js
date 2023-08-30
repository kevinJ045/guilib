import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

class DirectedWidget extends Widget {

	constructor(selectedOptions, type){
		const options = {...(getDefaults({element: {name: 'div'}, class: 'widget-'+type})), ...selectedOptions, _setters: ['gap', 'crossAxisAlignment', 'mainAxisAlignment']};
		super(options);

		if(options.height){
			this.height(options.height);
		}

		if(options.width){
			this.width(options.width);
		}

	}

	set crossAxisAlignment(value) {
    findEl(this.id).css({ "align-items": value });
  }

  set mainAxisAlignment(value) {
    findEl(this.id).css({ "justify-content": value });
  }

	set gap(value){
		findEl(this.id).css({ "gap": value });
	}
}

export default DirectedWidget;