import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import voca from "../../modules/voca.js";


class Swiper extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'swiper-slide'}, class: ''})), ...selectedOptions});
	}

}

class SwiperWrapper extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'swiper-container'}, class: '', _setters: ['swiperOptions']})), ...selectedOptions});

	}

	set swiperOptions(options){
		for(var i in options){
			findEl(this.id)
				.attr(voca.kebabCase(i), options[i]);
		}
	}

}

export { SwiperWrapper };
export default Swiper;