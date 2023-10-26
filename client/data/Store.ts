class Store extends EventTarget {

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
		this.dispatchEvent(new Event('change'));
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

}

export default Store;