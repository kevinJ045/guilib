import Widget from "./Widget.js";
import getDefaults, { options } from "../../utils/options.js";

class Span extends Widget {

	constructor(selectedOptions: options){
		super({...(getDefaults({element: {name: 'span'}, class: ''})), ...selectedOptions});
	}

}

export default Span;