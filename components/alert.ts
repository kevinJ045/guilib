import * as rayous from "../client";
import { options } from "../extra";
import { mergeOptions } from "./utils";

export interface AlertOptions extends options {
	title?: string,
	icon?: any
}

export class Alert extends rayous.Widget {
	constructor(options: AlertOptions | null = null){
		super(mergeOptions({
			class: 'alert',
			children: [
				new rayous.Widget({element: { name: 'span' },  class: 'alert-text-content'}),
			],
			_setters: ['title']
		}, options || {}));
	}

	set title(title: string){
		this.find('.alert-text-content')?.text(title);
	}
}