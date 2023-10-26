;
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import List, { ListItem } from "../list/List.js";
import Controller from "../../data/Controller.js";
import Store from "../../data/Store.js";

class EntryController extends Controller {
	constructor(val){super(val)}
};

class Entry extends ListItem {

	state = new Store({$text_value: ""});

	constructor(options){
		super({...{
			class: "item-content item-input",
			entryType: "text",
			stateWrapperName: '$text_value'
		}, ...options, link: false, customLI: true});

		const {
			title,
			subtitle,
			entryType,
			onInput,
			onChange,
			controller,
			value
		} = this.options;

		findEl(this.id).append(`<div class="item-inner">
		<div class="item-title item-label">${title}</div>
			<div class="item-input-wrap">
				<input type="${entryType}" placeholder="${subtitle}" class="input-wrapper" />
				<span class="input-clear-button"></span>
			</div>
		</div>`);

		if(typeof onInput == "function"){
			this.on('input', onInput);
		} 
		if(typeof onChange == "function"){
			this.on('change', onChange);
		}

		if(controller){
			this.setController(controller);
		}

		this.on('state:change', (e, {new: state}) => {
			if(state[options.stateWrapperName] != null){
				this.val(state[options.stateWrapperName]);
			}
		});

		if(value){
			this.setState({[options.stateWrapperName]: value})
		}
	}

	setController(controller){
		if(this.__controller) throw new Error('Input already is married to a controller.');
		if(controller instanceof EntryController){
			this.on('input', () => {
				controller.set(this.val(), true);
			});
			controller.onChange((v) => this.val() !== v ? this.val(v) : []);
			this.__controller = controller;
		}
	}

	label(text){
		findEl(this.id).find('.item-label').text(text);
		return this;
	}

	subtitle(text){
		findEl(this.id).find('.input-wrapper').attr('placeholder', text);
		return this;
	}

	entryType(type){
		findEl(this.id).find('.input-wrapper').attr('type', type);
		return this;
	}

	val(text){
		if(this.sealed === true) return this;
		if(text) findEl(this.id).find('.input-wrapper').val(text);
		return findEl(this.id).find('.input-wrapper').val() || this;
	}
}

class Form extends List {
	constructor(options){
		super(options);
	}

	appendItem(item){
		return this.add(new Entry(item));
	}
}

export {
	EntryController,
	Entry
}
export default Form;