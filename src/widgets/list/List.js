import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import StateMan from "../../utils/stateman.js";
import ListBuilder from "./ListBuilder.js";

const defaultList = () => getDefaults({
	element: { name: 'div', html: `<ul></ul>` },
	class: 'list',
	itemsStateName: '$items_list',
	template: (item) => new ListItem(item),
});

const defaultListItem = () => getDefaults({
	element: { name: 'li' },
	class: 'item-content',
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

		this.mainParentClass = '.item-inner';
		this.textWrapper = '.item-title';
		this.elementsPlace = this.id;

		if(!options.customLI){
			findEl(this.id).append(`<div class="item-inner">
	        <div class="item-title">
	            ${title}
	        </div>
	    </div>`).addClass(link ? 'item-link' : '');

			if(typeof onClick == "function"){
				this.on('click', onClick);
			}
			if(typeof onHold == "function"){
				this.on('hold', onHold);
			}

			if(subtitle){
				this.subtitle(subtitle);
			}	
		}

		if(icon instanceof Icon){
			this.media(icon);
		}
		
	}

	set url(link){
		findEl(this.id).attr('href', link);
	}

	media(icon){
		if(icon === 'rm' || icon == null) {findEl(this.el).find('.item-media').remove();return this};
		if(!icon instanceof Icon) throw new Error("Only icons allowed");
		if(findEl(this.id).find('.item-media')){
			findEl(this.id).find('.item-media').remove();
		}
		let ic = $(`<div class="item-media"></div>`);
		ic.append(findEl(icon.id));
		if(!ic.children().length){
			ic.append(icon.toString());
		}
		findEl(this.id).prepend(ic);
		return this;
	}
	subtitle(text){
		if(text == null) {
			findEl(this.id).find(this.mainParentClass).find('.item-after').remove();
			return this;
		}
		if(findEl(this.elementsPlace).find('.item-after')){
			findEl(this.elementsPlace).find('.item-after').remove();
		}
		findEl(this.el).find(this.mainParentClass).append(`<div class="item-after">
            ${text}
        </div>`);
    return this;
	}

}

class List extends ListBuilder {

	constructor(selectedOptions){
		const options = {...defaultList(), ...selectedOptions};
		super(options, _initList);
	}

	add(child){
		return super.add(child, 'ul');
	}

	appendItem(item, index){
		return this.add(this._fromTemplate(item, index));
	}
	
	onItems(event, handler){
		return this.onItems(event, handler, 'ul');
	}

	empty(){
		findEl(this.id).find('ul').empty();
		return this;
	}
}

export { ListItem };
export default List;