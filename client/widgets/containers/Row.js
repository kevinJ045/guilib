import DirectedWidget from "./DirectedWidget.js";

class Row extends DirectedWidget {
	constructor(selectedOptions){
		super({...selectedOptions}, 'row');
	}
}

export default Row;