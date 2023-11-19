import Widget from "../main/Widget.js";
import getDefaults, { options } from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import ListBuilder from "./ListBuilder.js";
import Text from "../main/Text.js";
import Controller from "../../data/Controller";

export interface ListItemOptions extends options {
	title?: Widget | string;
	link?: boolean
}

type items<T = any> = Controller<T[]> | T[];
export interface ListOptions<T = any> extends options {
	itemsStateName?: string,
	items?: items<T> | Promise<items<T | any>>,
	template?: (item: T, index: number, array: items<T>) => Widget,
	empty?: boolean
}

const defaultList = () => getDefaults<ListOptions>({
	element: { name: 'ul' },
	items: [],
	itemsStateName: '$items_list',
	empty: true,
	template: (item: any) => new ListItem(item),
});

const defaultListItem = () => getDefaults<ListItemOptions>({
	element: { name: 'li' },
	title: new Text(''),
	link: false,
	_setters: ['url']
});

function _initList(list: List, state: Record<string, any>){
	if(state[(list.options as any).itemsStateName] && Array.isArray(state[(list.options as any).itemsStateName])){
		if(list.options.empty !== false) list.empty();
		state[(list.options as any).itemsStateName].forEach((item: any, index: number) => {
			list.appendItem(item, index);
		});
	}
}

class ListItem extends Widget {

	constructor(selectedOptions: ListItemOptions){
		const options = {...defaultListItem(), ...selectedOptions};

		const { title, link } = options;

		if(link === true) options.element!.name = 'a';

		super(options);

		if(title instanceof Widget) this.add(title);
		else if(title != null) this.add(new Text(title));
		
	}

	set url(link: string){
		findEl(this.id!).attr('href', link);
	}


}

class List<T = any> extends ListBuilder<T> {

	constructor(selectedOptions: ListOptions<T>){
		const options = {...defaultList(), ...selectedOptions};
		super(options, _initList);
	}

	appendItem(item: any, index: number){
		return this.add(this._fromTemplate(item, index));
	}
	
	onItems(event: string, handler: CallableFunction): this {
		return this.onItems(event, handler);
	}

	empty(){
		findEl(this.id!).empty();
		return this;
	}
}

export { ListItem };
export default List;