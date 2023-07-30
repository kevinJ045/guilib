import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";

class ListBuilder extends Widget {

	state = {items: []};

	constructor(selectedOptions, _initList){
		const options = {...selectedOptions};
		super(options);

		this.updateList(options);

		_initList(this, this.state);

		this.on('state:change', (e, {new: state}) => {
			_initList(this, state);
		});
	}

	updateList(newOptions){
		if(Array.isArray(newOptions)){
			newOptions = {items: newOptions};
		}
		const options = {...this.options, ...newOptions};
		if(options.items){
			this.setState({[options.itemsStateName]: options.items});
		}
		if(options.loader){
			super.add(options.loader);
		}
		if(options.loading){
			options.loader?.show();
		} else {
			options.loader?.hide();
		}
		return this;
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

	onItems(event, handler, subchild){
		this.children(subchild).forEach((child, index) => {
			child.on(event, (e) => {
				handler(e, { child, index });
			});
		});
		return this;
	}

	empty(){
		findEl(this.id).empty();
		return this;
	}
}

export default ListBuilder;