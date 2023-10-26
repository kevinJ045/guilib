import DirectedWidget from "./DirectedWidget.js";

class Center extends DirectedWidget {
	constructor(selectedOptions){
		super({...selectedOptions, crossAxisAlignment: 'center', mainAxisAlignment: 'center'}, 'center');
		if(this.options.child){
			this.add(this.options.child);	
		}
	}
}

export default Center;