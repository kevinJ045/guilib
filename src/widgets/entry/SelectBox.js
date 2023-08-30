import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import getDefaults from "../../utils/options.js";
import { ListItem } from "../list/List.js";

function _initSelect(item, options){
	if(!options) return;
	const wrapper = findEl(item.id).find('.selectbox-wrapper');
	wrapper.empty();
	options.forEach(option => {
		if(typeof option == "string"){
			option = {name: option, value: option};
		}
		wrapper.append(`<option value="${option.value}">${option.name}</option>`);
	});
}

class SelectBox extends ListItem {

	state = new Store({});

	constructor(selectedOptions){
		const options = {
			...({
				options: [],
				stateName: "$selectbox_options",
				multiple: false,
				onOpen: () => {},
				onClose: () => {}
			}),
			...selectedOptions
		};
		super(options);

		findEl(this.id).removeClass('item-content');

		findEl(this.id).html(`<a class="smart-select item-link smart-select-init" data-open-in="popup" data-searchbar="true"
		data-searchbar-placeholder="Search car"><div class="item-content">${findEl(this.id).html()}</div></a>`);

		findEl(this.id).find('a').prepend(`<select class="selectbox-wrapper" name="${options.name || ""}" ${options.multiple ? 'multiple' : ""} />`);

		if(options.options){
			this.setState({[options.stateName]: options.options});
			_initSelect(this, options.options);
		}

		this.on('state:change', ({new: state}) => {
			_initSelect(this, (state || this.getState())?.[options.stateName]);
		});


		findEl(this.id).find('select').on('change', () => this.emit('change', findEl(this.id).find('select').val()));
	}

	_onMount(parent, app){
		super._onMount(parent, app);
		app.smartSelect.create({
			app,
			el: findEl(this.id).find('a')[0],
			openIn: this.options.openIn || "popover",
			on: {
				open: this.options.onOpen,
				close: this.options.onClose
			}
		});
	}
}

export default SelectBox;