import Widget from "../main/Widget";
import getDefaults, { options } from "../../utils/options";

class Container extends Widget {

	constructor(selectedOptions: options){
		super({...(getDefaults({element: {name: 'div'}, class: 'block'})), ...selectedOptions});
	}

}

export default Container;