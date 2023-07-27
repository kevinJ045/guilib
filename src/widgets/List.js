import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../utils/options.js";
import { findEl } from "../utils/elman.js";
import Icon from "./Icon.js";

const defaultList = () => getDefaults({
	element: { name: 'div' },
	class: 'list'
});

const defaultListItem = () => getDefaults({
	element: { name: 'li' },
	class: 'item-content',
	title: "",
	subtitle: "",
	icon: null,
	onClick: () => {},
	onHold: () => {},
	link: false
});


function _initList(list, state){
	if(state.items && Array.isArray(state.items)){
		state.items.forEach(item => {
			list.appendItem(item);
		});
	}
}

class ListItem extends Widget {

	constructor(selectedOptions){
		const options = {...defaultListItem(), ...selectedOptions};

		console.log(options);

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

class List extends Widget {

	state = {items: []};

	constructor(selectedOptions){
		const options = {...defaultList(), ...selectedOptions};
		super(options);

		findEl(this.id).append('<ul></ul>');

		if(options.items){
			this.setState({items: options.items});
		}

		_initList(this, this.state);

		this.on('state:change', (e, {new: state}) => {
			_initList(this, state);
		});
	}

	add(child){
		return super.add(child, 'ul');
	}

	appendItem(item){
		return this.add(new ListItem(item));
	}

	addItem(...items){
		this.setState({items: [...items].concat(this.state.items)});
		return this;
	}

	removeItems(...itemsToRemove) {
    const currentItems = this.state.items;

    const remain = currentItems.filter((item, index) => {
      let shouldRemove = false;

      itemsToRemove.forEach(it => {

				if(index == it.index) {
					shouldRemove = true;
          return;
				}
				
        const allPropertiesMatch = Object.keys(it).every(prop => item[prop] === it[prop]);

        if (allPropertiesMatch) {
          shouldRemove = true;
          return;
        }
      });

      return !shouldRemove;
    });

    this.setState({ items: remain });
		return this;
  }

	onItems(event, handler){
		this.children('ul').forEach((child, index) => {
			child.on(event, (e) => {
				handler(e, { child, index });
			});
		});
		return this;
	}
}

export { ListItem };
export default List;