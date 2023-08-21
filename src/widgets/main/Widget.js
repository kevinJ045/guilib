import Dom from "../../utils/dom.ts";
import { createElement, findEl } from "../../utils/elman.ts";
import { _init } from "../../utils/init.ts";
import { optionMap } from "../../utils/options.ts";
// import WidgetClass from "./index.js";


class Widget {

	constructor(options){
		options = optionMap(options);
		_init(this, options);
	}

	render(){
		let el = findEl(this.id);
		if(!el){
			el = Dom.create(this.options.element, this.options.class, this.options.attr);
		}
		_render(el, this);
	}

}








export default Widget;
