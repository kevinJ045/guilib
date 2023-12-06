import { WidgetEventTarget } from "../utils/eventtarget";

function _inheritStore(store: Store, parentStore: Store){
	let stores = parentStore.getStores();
	for(let i in stores){
		store.setStore(stores[i], i);
	}
}

class Store extends WidgetEventTarget<any, any> {

	stores: Record<string, Record<string, any>> = {
		state: {}
	};

	constructor(state: Record<string, any> = {}){
		super();
		this.setStore(state);
	}

	set(key: string, value: any, store = 'state'){
		if(!this.stores[store]) this.stores[store] = {};
		this.stores[store][key] = value;
		this.emit('change');
	}

	get(key: string, store: string = 'state'){
		return this.stores[store][key];
	}

	getStore(store: string = 'state', id: string | null = null){
		let ideed = id ? this.stores[id] || {} : {};
		let s = {...this.stores[store]};
		return s;
	}
	
	setStore(state: Record<string, any>, store = 'state'){
		if(state) for(var i in state){
			this.set(i, state[i], store);
		}
	}

	getStores(){
		return this.stores;
	}

	inherit(store: Store){
		store.on('change', () => {
			_inheritStore(this, store);
		});
		_inheritStore(this, store);
	}

}

export default Store;