import Store from "../../data/Store";
import { options } from "../../utils/options";
import Widget from "./Widget";



export default class StateWidget extends Widget {
	store = new Store({});

	constructor(selectedOptions: options = {}){
		const options = {...selectedOptions};
		super(options);
		this.store.addEventListener('change', () => {
			this.emit('state:change', this.store);
		});
	}

	getStore(store = 'state'){
		return this.store.getStore(store);
	}

	setStore(props: Record<string, any>, store = 'state'){
		this.store.setStore(props, store);
	}

}