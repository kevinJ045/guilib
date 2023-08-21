import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Text from "../main/Text.js";

const defaultHeader = () => getDefaults({
	element: { name: 'div', html: `<div class="navbar-inner" />` },
	class: 'navbar'
});

class Header extends Widget {

	constructor(selectedOptions){
		const options = {...defaultHeader(), ...selectedOptions};
		super(options);

		if(options.left){
			this.left(...options.left);
		}

		if(options.title){
			this.title(options.title);
		}
		
		if(options.right){
			this.right(...options.right);
		}

	}

	title(title){
		if(typeof title == "string") {
			title = new Text(title);
		}
		super.addWrappedElement(title, `title`, null, '.navbar-inner');
	}

	left(...children){
		if(!children.length){
			findEl(this.id).find('.left').remove();
			return this;
		} else {
			if(!findEl(this.id).find('.left').length) findEl(this.id)
				.find('.navbar-inner').append('<div class=left />');
		}
		this
			.addAll(...children, '.left');
	}

	right(...children){
		if(!children.length){
			findEl(this.id).find('.right').remove();
			return this;
		} else {
			if(!findEl(this.id).find('.right').length) findEl(this.id)
			.find('.navbar-inner').append('<div class=right />');
		}
		this
			.addAll(...children, '.right');
	}

}


export default Header;