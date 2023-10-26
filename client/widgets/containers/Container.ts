import Widget from "../main/Widget.js";
import getDefaults, { options } from "../../utils/options.js";

class Container extends Widget {

	constructor(selectedOptions: options){
		super({...(getDefaults({element: {name: 'div'}, class: 'block'})), ...selectedOptions});
	}

}

export default Container;