;
import { findEl } from "../../utils/elman";
import getDefaults from "../../utils/options";
import Widget, { initiateSetters } from "../main/Widget";

class FloatingActionButton extends Widget {
  constructor(selectedOptions) {
		const options = {
			...(getDefaults({element: {name: 'div'}, class: 'fab', position: 'right-bottom'})), 
			...selectedOptions,
			_setters: ['position']
		};
    super(options);
		findEl(this.id).append('<a />');
		if(options.icon){
			this.add(options.icon);
		}
		if(options.iconClose){
			this.add(options.iconClose);
		}
		initiateSetters(this, ['text'], options);
  }

	add(child){
		return super.add(child, 'a');
	}

	set position(position){
		findEl(this.id).addClass(`fab-${position}`);
	}

	set text(text){
		if(!text){
			findEl(this.id).removeClass('fab-extended');
			findEl(this.id).find('a').find('.fab-text').remove();
		} else {
			findEl(this.id).addClass('fab-extended');
			findEl(this.id).find('a').append('<div class="fab-text">'+text+'</div>');
		}
	}
}

export default FloatingActionButton;
