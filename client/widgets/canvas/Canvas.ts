import Widget from "../main/Widget";
import getDefaults from "../../utils/options";
import { findEl } from "../../utils/elman";

class Canvas extends Widget {

	constructor(selectedOptions: Record<string, any>){
		super({...(getDefaults({element: {name: 'canvas'}, class: 'canas'})), ...selectedOptions});
	}

	getContext(dimensions: string){
		return findEl(this.id!)[0].getContext(dimensions);
	}

}

export default Canvas;