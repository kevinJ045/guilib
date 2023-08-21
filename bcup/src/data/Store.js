class Store {

	state = {};

	constructor(state){
		this.setStore(state);
	}

	set(key, value, store = 'state'){
		if(!this[store]) this[store] = {};
		this[store][key] = value;
	}

	get(key, store = 'state'){
		return this[store][key];
	}

	getStore(store = 'state', id){
		let ideed = id ? this[id] || {} : {};
		let s = {...this[store]};
		return s;
	}
	
	setStore(state, store = 'state'){
		if(state) for(var i in state){
			this.set(i, state[i], store);
		}
	}

}

export default Store;