import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../utils/options.js";
import { findEl } from "../utils/elman.js";

const defaultCard = () => getDefaults({
	element: { name: 'div', html: `<div class="card-content card-content-padding" />` },
	class: 'card'
});

class Card extends Widget {

	constructor(selectedOptions){
		const options = {...defaultCard(), ...selectedOptions};
		super(options);

		if(options.header){
			this.header(options.header);
		}

		if(options.footer){
			this.footer(options.footer);
		}

	}

	add(child){
		super.add(child, '.card-content');
	}

	header(head){
		super.addWrappedElement(head, `card-header`, 'before');
	}
	
	footer(foot){
		super.addWrappedElement(foot, `card-footer`);
	}

}


export default Card;

/* <div class="card card-outline card-dividers">
      <div class="card-header">Card header</div>
      <div class="card-content card-content-padding">Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom actions.</div>
      <div class="card-footer">Card Footer</div>
    </div> */