import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";

class Container extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'div'}, class: 'block'})), ...selectedOptions});
	}

}

export default Container;