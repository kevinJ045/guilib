import * as rayous from "../client";
import { options } from "../extra";

export interface ButtonOptions extends options{
	variant?: 'outline' | 'full' | 'disabled' | 'mini' | 'nround' | 'transparent'
}

export class Button extends rayous.Button {
	constructor(text: string | ButtonOptions, options: ButtonOptions | null = null){
		super(text, {
			class: 'widget widget-button',
			...options
		});

		let o: ButtonOptions = this.options;

		if(o.variant) this.addClass(o.variant);
	}
}