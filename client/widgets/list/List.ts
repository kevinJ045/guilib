import Widget from "../main/Widget.js";
import getDefaults, { options } from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import ListBuilder from "./ListBuilder.js";
import Text from "../main/Text.js";
import Controller from "../../data/Controller";

interface ListItemOptions extends options {
	title?: Widget | string;
	link?: boolean
}

type items = Controller<any[]> | any[]
interface ListOptions extends options {
	itemsStateName?: string,
	template?: CallableFunction,
	items?: items | Promise<items>
}

const defaultList = () => getDefaults<ListOptions>({
	element: { name: 'ul' },
	items: [],
	itemsStateName: '$items_list',
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
		list.empty();
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

class List extends ListBuilder {

	constructor(selectedOptions: ListOptions){
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