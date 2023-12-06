import Widget from "./Widget";
import getDefaults, { options } from "../../utils/options";

class Span extends Widget {

	constructor(selectedOptions: options){
		super({...(getDefaults({element: {name: 'span'}, class: ''})), ...selectedOptions});
	}

}

export default Span;