import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

class Tab extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'div'}, class: 'tab', active: false})), ...selectedOptions});
		if(this.options.active) findEl(this.id).addClass('tab-active');
	}

}

class TabsWrapper extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'div'}, class: 'tabs'})), ...selectedOptions});
	}

}

class TabBar extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'div'}, class: 'tabs-bar'})), ...selectedOptions});
	}

}

export { TabsWrapper, TabBar };
export default Tab;