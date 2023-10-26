import getDefaults from "../../utils/options.js";
import { findEl, registerElement } from "../../utils/elman.js";
import Icon from "../icons/Icon.js";
import Macy from "../../components/Macy.js";
import ListBuilder from "./ListBuilder.js";
import Widget from "../main/Widget.js";

const defaultGrid = () => getDefaults({
	element: { name: 'div', html: `<div class="grid-wrapper"></div>` },
	class: 'macy',
	itemsStateName: '$items_grid',
	template: () => new Widget(),
	items: [],
	empty: true,
	grid: {
		trueOrder: false,
		waitForImages: false,
		useOwnImageLoader: false,
		mobileFirst: true,
		columns: 2,
		margin: {
			y: 16,
			x: '1%',
		},
  }
});

function _initGrid(list, state){
	if(state[list.options.itemsStateName] && Array.isArray(state[list.options.itemsStateName])){
		if(list.options.empty !== false) list.empty();
		state[list.options.itemsStateName].forEach((item, index) => {
			list.appendItem(item, index);
		});
	}
}

class Grid extends ListBuilder {

	constructor(selectedOptions){
		const options = {...defaultGrid(), ...selectedOptions};
		super(options, _initGrid);

		registerElement(Macy({
			container: findEl(this.id).find('.grid-wrapper')[0],
			...options.grid
		}), this.id+'-grid');
	}

	add(child){
		return super.add(child, '.grid-wrapper');
	}

	_onUpdate(options){
		if(options.grid && findEl(this.id+'-grid')){
			// findEl(this.id+'-grid').options = { ...this.options.grid, ...options.grid };
			findEl(this.id+'-grid').reInit();
		}
	}

	appendItem(item, index){
		return this.add(this._fromTemplate(item, index));
	}

	onItems(event, handler){
		return this.onItems(event, handler, '.grid-wrapper');
	}

	empty(){
		findEl(this.id).find('.grid-wrapper').empty();
		return this;
	}
}

export default Grid;