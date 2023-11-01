import * as rayous from "../client";
import { options } from "../extra";
import { mergeOptions } from "./utils";

export const classes = {
	class: 'btn-info btn-secondary'
}

export interface ButtonOptions extends options{
	variant?: 'info' | 'warning' | 'success' | 'error' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link',
	outline?: boolean
}

export class Button extends rayous.Button {
	constructor(text: string | ButtonOptions, options: ButtonOptions | null = null){
		super(text, mergeOptions({
			class: 'btn'
		}, options || {}));

		let o: ButtonOptions = this.options;

		if(o.variant) this.addClass('btn-'+o.variant);
		if(o.outline) this.addClass('btn-outline');
	}
}