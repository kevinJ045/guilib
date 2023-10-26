;
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";

const defaultView = () => getDefaults({
	element: { name: 'div' },
	class: 'view'
});

class View extends Widget {

	constructor(selectedOptions){
		const options = {...defaultView(), ...selectedOptions};
		super(options);
	}

}

export default View;