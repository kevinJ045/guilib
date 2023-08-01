import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";

const defaultToolbar = () => getDefaults({
	element: { name: 'div', html: `<div class="toolbar-inner" />` },
	class: 'toolbar'
});

class Toolbar extends Widget {

	constructor(selectedOptions){
		const options = {...defaultToolbar(), ...selectedOptions};
		super(options);
	}

	add(child){
		return super.add(child, '.toolbar-inner');
	}

}


export default Toolbar;