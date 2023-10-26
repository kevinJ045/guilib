import { findEl } from "../../utils/elman.js";
import getDefaults from "../../utils/options.js";
import Widget from "../main/Widget.js";


class Preloader extends Widget{
	constructor(selectedOptions){
		const options = {
			...(getDefaults({
				element: {
					name: "div"
				},
				class: "preloader"
			})),
			...selectedOptions
		};
		super(options);

		if(options.color){
			this.color = options.color;
		}
	}

	set color(color){
		findEl(this.id)
			.addClass('color-'+color);
	}
}

export default Preloader;