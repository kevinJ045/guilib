import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import Store from "../../data/Store.js";

class ListBuilder extends Widget {

	state = new Store({items: []});

	constructor(selectedOptions, _initList){
		const options = {...selectedOptions};
		super(options);

		this.updateList(options);

		_initList(this, this.getState());

		this.on('state:change', (e, {new: state}) => {
			_initList(this, state);
		});
	}

	_fromTemplate(item, index){
		if(!index) index = this.state.getStore()[this.options.itemsStateName].length || 0;
		let widget = this.options.template.call(this, item, index);
		if(!widget instanceof Widget) throw new Error("ListBuilder requires for a widget as a template");
		return widget;
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

		if(typeof this._onUpdate == "function"){
			this._onUpdate(options);
		}
		return this;
	}

	addItem(...items){
		this.setState({items: [...items].concat(this.getState()[this.options.itemsStateName])});
		return this;
	}

	removeItems(...itemsToRemove) {
    const currentItems = this.getState()[this.options.itemsStateName];

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