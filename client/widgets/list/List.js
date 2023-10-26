import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import StateMan from "../../utils/stateman.js";
import ListBuilder from "./ListBuilder.js";

const defaultList = () => getDefaults({
	element: { name: 'ul' },
	itemsStateName: '$items_list',
	template: (item) => new ListItem(item),
});

const defaultListItem = () => getDefaults({
	element: { name: 'li' },
	title: "",
	subtitle: "",
	icon: null,
	onClick: () => {},
	onHold: () => {},
	link: false,
	_setters: ['url']
});


function _initList(list, state){
	if(state[list.options.itemsStateName] && Array.isArray(state[list.options.itemsStateName])){
		list.empty();
		state[list.options.itemsStateName].forEach((item, index) => {
			list.appendItem(item, index);
		});
	}
}

class ListItem extends Widget {

	constructor(selectedOptions){
		const options = {...defaultListItem(), ...selectedOptions};

		const { title,
			subtitle,
			icon,
			link,
			onClick,
			onHold
		} = options;

		if(link === true) options.element.name = 'a';

		super(options);

		if(title) this.text(title);
		
	}

	set url(link){
		findEl(this.id).attr('href', link);
	}


}

class List extends ListBuilder {

	constructor(selectedOptions){
		const options = {...defaultList(), ...selectedOptions};
		super(options, _initList);
	}

	appendItem(item, index){
		return this.add(this._fromTemplate(item, index));
	}
	
	onItems(event, handler){
		return this.onItems(event, handler, 'li');
	}

	empty(){
		findEl(this.id).empty();
		return this;
	}
}

export { ListItem };
export default List;