import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";

class Span extends Widget {

	constructor(selectedOptions){
		super({...(getDefaults({element: {name: 'span'}, class: ''})), ...selectedOptions});
	}

}

export default Span;