import { findEl } from "../../utils/elman.js";
import Widget from "../main/Widget.js";
import IconData from "../../data/IconData.js";
import Icons from "../../data/Icons.js";

class Icon extends Widget {
	constructor(icon = "icon-empty"){
		super({
			element: { name: 'i' },
			class: 'icon'
		});

		if(typeof icon == "string") findEl(this.id).addClass(icon);
		else if(icon instanceof IconData){
			if(icon.iconClass) findEl(this.id).addClass(icon.iconClass);
			if(icon.iconContent) findEl(this.id).html(`<svg>${icon.iconContent.map(d => '<path d="'+d+'" />').join('\n')}</svg>`);
			if(icon.name) this.name = icon.name;
		}
	}
}

for(let i in Icons.data){
	Icons.__defineGetter__(i, () => {
		return new Icon(Icons.data[i]);
	});
}

export { Icons };
export default Icon;