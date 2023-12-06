import Controller from "../../data/Controller";
import Dom from "../../utils/dom";
import { findEl } from "../../utils/elman";
import { options } from "../../utils/options";
import Text from "../main/Text";
import Widget, { widget } from "../main/Widget";

export interface SelectableOptions {
	title: widget | string,
	value: string,
	selected?: boolean,
	disabled?: boolean
}

export class SelectController extends Controller<SelectableOption | SelectableOptions | string> {
	constructor(val: SelectableOption | SelectableOptions | string){super(val)}
};

export interface SelectOptions extends options {
	selectableOptions?: SelectableOptions[],
	controller?: SelectController,
	multiple?: boolean
}

export interface SelectOptionOptions extends SelectableOptions, options {
	title: widget | string,
	value: string
}

export class SelectableOption<T extends options = SelectOptionOptions> extends Widget<T> {
	constructor(options: SelectOptionOptions){
		super({
			element: {name: 'option'},
			class: '',
			_setters: ['value', 'title', 'selected', 'disabled'],
			...options
		});
	}

	set selected(value: boolean){
		(findEl(this.id!) as Dom).attr({ selected: value });
	}

	set disabled(value: boolean){
		(findEl(this.id!) as Dom).attr({ disabled: value });
	}

	set value(value: string){
		(findEl(this.id!) as Dom).attr({ value });
	}
	get value(){
		return this.options.value as string;
	}

	set title(title: widget | string){
		this.remove('*');
		if(title instanceof Widget){
			this.add(title);
		} else {
			title != null ? this.text(title.toString()) : null;
		}
	}
}

export default class Selectbox<T extends options = SelectOptions> extends Widget<T> {
	__controller?: SelectController;

	constructor(selectedOptions: SelectOptions){
		const options = {...({ element: {name: 'select'}, class: "selectbox-wrapper", _setters: ['selectableOptions', 'multiple']}), ...selectedOptions};
		super(options as T);

		if(options.controller){
			this.setController(options.controller);
		}

	}

	setController(controller: SelectController){
		if(this.__controller) throw new Error('Input already is married to a controller.');
		if(controller instanceof SelectController){
			const change = (v: string) => this.val() !== v ? this.val(v) : [];
			this.on('change', () => {
				controller.set(this.val(), change);
			});
			controller.onChange(change);
			this.__controller = controller;
			this.val(controller.get());
		}
	}

	set multiple(value: boolean){
		(findEl(this.id!) as Dom).attr({ multiple: value });
	}

	set selectableOptions(options: SelectableOptions[] | SelectableOption[]){
		this.remove('*');
		let widgetedOptions = options.map(item => {
			if(item instanceof SelectableOption){
				return item;
			} else {
				return new SelectableOption(item);
			}
		});
		this.addAll(...widgetedOptions);
	}

	val(value: string | SelectableOption | SelectableOptions | null = null){
		if(value && typeof value == "object") value = value.value;
		if(value) findEl(this.id!).at(0).value = value;
		return findEl(this.id!).at(0).value;
	}
}