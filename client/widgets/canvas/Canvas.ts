import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

class Canvas extends Widget {

	constructor(selectedOptions: Record<string, any>){
		super({...(getDefaults({element: {name: 'canvas'}, class: 'canas'})), ...selectedOptions});
	}

	getContext(dimensions: string){
		return findEl(this.id!)[0].getContext(dimensions);
	}

}

export default Canvas;