import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

const defaultRange = () => getDefaults({
	element: { name: 'div', html: `<input type="range" min="0" max="100" step="1" value="0" />` },
	class: 'range-slider range-slider-init',
	_setters: ['min', 'max', 'step', 'value', 'label', 'vertical']
});

class RangeSlider extends Widget {

	constructor(selectedOptions){
		const options = {...defaultRange(), ...selectedOptions};
		super(options);
	}
	
	set label(v){
		findEl(this.id).attr('data-label', v);
	}
	
	set vertical(v){
		findEl(this.id).attr('data-vertical', v);
	}
	
	set min(v){
		findEl(this.id).find('input').attr('min', v);
	}

	set max(v){
		findEl(this.id).find('input').attr('max', v);
	}

	set step(v){
		findEl(this.id).find('input').attr('step', v);
	}

	set value(v){
		findEl(this.id).find('input').attr('value', v);
	}

}


export default RangeSlider;