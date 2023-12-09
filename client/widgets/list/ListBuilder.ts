import Widget from "../main/Widget";
import getDefaults, { options } from "../../utils/options";
import { findEl } from "../../utils/elman";
import Store from "../../data/Store";
import Controller from "../../data/Controller";

class ListBuilder<T = any, U extends options = options> extends Widget<U> {
	private __controller__callback?: CallableFunction;
	private __controller?: Controller<any>;

	state = new Store({items: []});

	constructor(selectedOptions: Record<string, any>, _initList: CallableFunction){
		const options = {...selectedOptions};
		super(options as U);

		this.updateList(options);

		_initList(this, this.getStore());

		this.on('state:change', (e: any) => {
			_initList(this, this.getStore());
			this.emit('list:update', {});
		});
	}

	_fromTemplate(item: T, index: number){
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
					if(!this.options.multiControllers) this._stripController();
					if(!options.items.isTakenBy(this)) {
						this.setStore({[options.itemsStateName]: options.items.get()});
						options.items.take(this);
						this.__controller = options.items;
						this.__controller__callback = () => {
							this.setStore({[options.itemsStateName]: options.items.get()});
						};
						options.items.onChange(this.__controller__callback);
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

	_stripController(){
		if(this.__controller__callback && this.__controller){
			this.__controller.unTake(this);
			this.__controller.offChange(this.__controller__callback);
		}
	}

	addItem(...items: T[]){
		this.setStore({[this.options.itemsStateName]: [...items].concat(this.getStore()[(this.options as any).itemsStateName])});
		return this;
	}

	removeItems(...itemsToRemove: T[]) {
    const currentItems = this.getStore()[(this.options as any).itemsStateName];

    const remain = currentItems.filter((item: T, index: number) => {
      let shouldRemove = false;

      itemsToRemove.forEach(it => {

				if(index == currentItems.indexOf(it)) {
					shouldRemove = true;
          return;
				}
				
        const allPropertiesMatch = typeof it == "object" ? Object.keys(it as object).every(prop => (item as any)[prop as string] === (it as any)[prop]) : it == item;

        if (allPropertiesMatch) {
          shouldRemove = true;
          return;
        }
      });

      return !shouldRemove;
    });

		if(currentItems.length === remain.length) return this;

    this.setStore({ [this.options.itemsStateName]: remain });
		return this;
  }

	hasItem(item: T){
		const currentItems: T[] = this.getStore()[(this.options as any).itemsStateName];
		return currentItems.includes(item) || currentItems.find(it => typeof it == "object" ? Object.keys(item as object).every(prop => (it as any)[prop as string] === (item as any)[prop]) : it == item)
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