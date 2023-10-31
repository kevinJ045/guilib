import { findEl } from "../../utils/elman";
import Widget from "../main/Widget";
import getDefaults, { options } from "../../utils/options";

export interface DirectedWidgetOptions extends options {
	gap?: string | number,
	height?: string | number,
	width?: string | number,
	crossAxisAlignment?: string,
	mainAxisAlignment?: string,
	wrap?: boolean | string
}

class DirectedWidget extends Widget {
	
	constructor(selectedOptions: DirectedWidgetOptions, type: string){
		const options = {...(getDefaults({
			element: {name: 'div'},
			style: {
				display: 'flex',
				flexWrap: 'nowrap',
				flexDirection: type
			},
		})), ...selectedOptions, _setters: ['gap', 'crossAxisAlignment', 'mainAxisAlignment', 'wrap']};
		super(options);

		if(options.height){
			this.height(options.height);
		}

		if(options.width){
			this.width(options.width);
		}

	}

	set crossAxisAlignment(value: string) {
    findEl(this.id!).css({ "align-items": value });
  }

  set mainAxisAlignment(value: string) {
    findEl(this.id!).css({ "justify-content": value });
  }

	set gap(value: string){
		findEl(this.id!).css({ "gap": value });
	}

	set wrap(value: boolean | string){
		findEl(this.id!).css({ "flex-wrap": value === true ? 'wrap' : value });
	}
}


export class Column extends DirectedWidget {
	constructor(selectedOptions: DirectedWidgetOptions){
		super(selectedOptions, 'column');
	}
}

export class Row extends DirectedWidget {
	constructor(selectedOptions: DirectedWidgetOptions){
		super(selectedOptions, 'row');
	}
}

export class Center extends DirectedWidget {
	constructor(selectedOptions: DirectedWidgetOptions){
		super({
			crossAxisAlignment: 'center',
			mainAxisAlignment: 'center',
			...selectedOptions
		}, 'center');
	}
}