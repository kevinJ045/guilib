import DirectedWidget from "./DirectedWidget.js";

class Column extends DirectedWidget {
	constructor(selectedOptions){
		super({...selectedOptions}, 'column');
	}
}

export default Column;