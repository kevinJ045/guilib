import { findEl } from "../../utils/elman.js";
import Widget from "../main/Widget.js";


class Icon extends Widget {
	constructor(icon = "icon-empty"){
		super({
			element: { name: 'i' },
			class: 'icon'
		});


		findEl(this.id).addClass(icon);
	}
}

export default Icon;