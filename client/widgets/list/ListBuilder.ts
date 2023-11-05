import Widget from "../main/Widget";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Store from "../../data/Store.js";
import Controller from "../../data/Controller";

class ListBuilder extends Widget {

	state = new Store({items: []});

	constructor(selectedOptions: Record<string, any>, _initList: CallableFunction){
		const options = {...selectedOptions};
		super(options);

		this.updateList(options);

		_initList(this, this.getStore());

		this.on('state:change', (e: any) => {
			_initList(this, this.getStore());
		});
	}

	_fromTemplate(item: any, index: number){
		if(!index) index = this.getStore()[(this.options as any).itemsStateName].length || 0;
		let widget: Widget = (this.options as any).template.call(this, item, index);
		if(!(widget  instanceof Widget)) throw new Error("ListBuilder requires for a widget as a template");
		return widget;
	}

	updateList(newOptions: Record<string, any>){
		if(Array.isArray(newOptions)){
			newOptions = {items: newOptions};
		}
		const options: Record<string, any> = {...this.options, ...newOptions};
		if(options.items){
			const doItems = () => {
				if(options.items instanceof Controller){
					if(!options.items.isTakenBy(this)) {
						this.setStore({[options.itemsStateName]: options.items.get()});
						options.items.take(this);
						options.items.onChange(() => {
							this.setStore({[options.itemsStateName]: options.items.get()});
						});
					}
				} else {
					this.setStore({[options.itemsStateName]: options.items});
				}
			}
			if(options.items instanceof Promise){
				options.items.then((items: any[]) => {
					options.items = items;
					doItems();
				})
			} else {
				doItems();
			}
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

	_onUpdate(any: any){}

	addItem(...items: any[]){
		this.setStore({items: [...items].concat(this.getStore()[(this.options as any).itemsStateName])});
		return this;
	}

	removeItems(...itemsToRemove: any[]) {
    const currentItems = this.getStore()[(this.options as any).itemsStateName];

    const remain = currentItems.filter((item: any, index: number) => {
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

    this.setStore({ items: remain });
		return this;
  }

	onItems(event: string, handler: CallableFunction, subchild: any){
		this.children(subchild).forEach((child, index) => {
			child.on(event, (e: any) => {
				handler(e, { child, index });
			});
		});
		return this;
	}

	empty(){
		findEl(this.id!).empty();
		return this;
	}
}

export default ListBuilder;