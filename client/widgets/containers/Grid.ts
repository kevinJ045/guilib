import Widget from "../main/Widget";
import getDefaults, { options } from "../../utils/options";
import { findEl, registerElement } from "../../utils/elman";
import ListBuilder from "../list/ListBuilder";
import Controller from "../../data/Controller";
import Macy from "../../components/Macy";

type items = Controller<any[]> | any[]

interface gridOptions {
	trueOrder?: boolean,
	waitForImages?: boolean,
	useOwnImageLoader?: boolean,
	mobileFirst?: boolean,
	columns?: number,
	margin?: {
		y?: number | string,
		x?: number | string,
	},
	padding?: {
		y?: number | string,
		x?: number | string,
	},
	breakAt?: Record<number, number | gridOptions>
}

interface GridOptions extends options {
	itemsStateName?: string,
	template?: CallableFunction,
	items?: items | Promise<items>,
	gridClass?: string,
	grid?: gridOptions | false;
}

const defaultGrid = () => getDefaults<GridOptions>({
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


function _initGrid(list: Grid, state: Record<string, any>){
	if(state[(list.options as any).itemsStateName] && Array.isArray(state[(list.options as any).itemsStateName])){
		if(list.options.empty !== false) list.empty();
		state[(list.options as any).itemsStateName].forEach((item: any, index: number) => {
			list.appendItem(item, index);
		});
		findEl(list.id+'-grid')?.reInit();
	}
}

class Grid<T = any, U = GridOptions> extends ListBuilder<T, U> {

	constructor(selectedOptions: GridOptions){
		const options = {...defaultGrid(), ...selectedOptions};
		super(options, _initGrid);

		if(options.grid) {
			let macy = Macy({
				container: findEl(this.id!).at(0),
				...options.grid
			});
			registerElement(macy, this.id+'-grid');
		}

		if(options.gridClass) findEl(this.id!).addClass(options.gridClass);
	}

	gridClass(gridClass: string, gridReplacer: string){
		let r = (gridReplacer?gridReplacer+'-':'')+'grid-cols-([0-9]+)';
		if(gridClass) {
			findEl(this.id!).attr({
				class: findEl(this.id!)
				.attr('class')
				.replace(new RegExp(r, 'g'), '')+' '+gridClass
			});
		}
		return !gridClass ? findEl(this.id!).attr('class').match(new RegExp(r))?.[1] : this;
	}

	_onUpdate(options: GridOptions){
		if(options.grid && findEl(this.id+'-grid')){
			findEl(this.id+'-grid').reInit();
		}
	}

	appendItem(item: any, index: number){
		return this.add(this._fromTemplate(item, index));
	}
	
	onItems(event: string, handler: CallableFunction): this {
		return this.onItems(event, handler);
	}

	empty(){
		findEl(this.id!).empty();
		return this;
	}
}

export default Grid;