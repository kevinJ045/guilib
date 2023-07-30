import DirectedWidget from "./DirectedWidget.js";

class Center extends DirectedWidget {
	constructor(selectedOptions){
		super({...selectedOptions}, 'column');
	}
}

export default Center;