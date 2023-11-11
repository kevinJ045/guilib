
import Controller, { ArrayController } from "../../data/Controller";
import { options } from "../../utils/options";
import Widget from "../main/Widget";
import ListBuilder from "./ListBuilder";


type items = Controller<any[]> | any[]

export class TableController<T> extends ArrayController<T> {
  columns: ArrayController<string>;
  items: T[] = [];

  constructor({
    columns,
    items,
  }: { columns: string[]; items: T[] } = { columns: [], items: [] }) {
		super(items);
    this.columns = new ArrayController<string>(columns);
  }

	setColumns(columns: string[]){
		this.columns.set(columns);
		return this;
	}

	addColumn(columns: string){
		this.columns.push(columns);
		return this;
	}

	get(){
		return this.transformItems(super.get());
	}

  private transformItems(items: any[]): any[] {
    return items.map((item) => this.transformItem(item));
  }

  private transformItem(item: any): any[] {
    const transformedItem = this.columns.get().map((column) =>
      item[column] !== undefined ? item[column] : null
    );

    (transformedItem as any).original = item;
    return transformedItem;
  }
}

export interface TableOptions extends options {
	itemsStateName?: string,
	template?: CallableFunction,
	items?: items | Promise<items>,
	columns?: items | Promise<items>,
	tableOptions?: {},
	empty?: boolean
}

const defaultGrid = () : TableOptions => ({
	element: { name: 'table' },
	class: 'table',
	itemsStateName: '$items_table',
	template: (item: rowValue[] | any) => new TableRow({ values: item, originalItem: item.original }),
	columns: [],
	items: [],
	empty: true
});

function _initTableColumns(table: Table, columns: any[]){
	if(table.options.empty !== false) table.find('thead').remove('*');
	let tr = new Widget({ element: { name: 'tr' } });
	columns.forEach((column: string | Widget | null) => {
		let widget = new Widget({ element: {name: 'th'} });
		if(typeof column == 'string'){
			widget.text(column);
		} else if(column instanceof Widget){
			widget.add(column);
		}
		tr.add(widget);
	});
	table.find('thead').add(tr);
}

function _initTable(table: Table, state: Record<string, any>): void {
  if (state[table.options.itemsStateName] && Array.isArray(state[table.options.itemsStateName])) {
    if (table.options.empty !== false) table.find('tbody').remove('*');

    state[table.options.itemsStateName].forEach((item: any, index: number) => {
      table.appendItem(item, index);
    });
  }

  const columnsKey = table.options.itemsStateName + '_columns';
  let columns = state[columnsKey];

  function updateColumns(newColumns: any): void {
    table.setStore({ [columnsKey]: newColumns });
    _initTableColumns(table, newColumns);
  }

  if(!columns && table.options.columns){
		columns = table.options.columns;
		if (columns instanceof TableController || columns instanceof Controller) {
			const columnsToWatch = columns instanceof TableController ? columns.columns : columns;
			if (!columnsToWatch.isTakenBy(table)) {
				columnsToWatch.take(table);
				columnsToWatch.onChange(() => updateColumns(columnsToWatch.get()));
				updateColumns(columnsToWatch.get());
			}
		} else {
			updateColumns(columns);
		}
	}
}


type rowValueSimple = Widget | null | string | CallableFunction;
export type rowValue = rowValueSimple | {
	type: "th" | "td",
	value: rowValueSimple
};

export interface TableRowOptions extends options {
	values: rowValue[]
}

function _initTableRow(row: TableRow, options: TableRowOptions){
	if(options.values){
		options.values.forEach(col => {
			if(!col) return;
			if(typeof col == "function") col = col(options.originalItem, options.values);
			let widget = new Widget({ element: {name: !(col instanceof Widget) && typeof col == 'object' && col!.type ? col!.type as string : 'td'} });
			if(!(col instanceof Widget) && col !== null && typeof col == 'object' && col.value){
				col = col.value;
			}
			if(typeof col == 'string'){
				widget.text(col);
			} else if(col instanceof Widget){
				widget.add(col);
			} 
			row.add(widget);
		});
	}
}

export class TableRow extends Widget {
	constructor(options: TableRowOptions){
		super({
			element: { name: 'tr' },
			...options
		});
		_initTableRow(this, options);
	}
	_optionChange(options: TableRowOptions): void {
		_initTableRow(this, options);
	}
}

export class Table extends ListBuilder {

	constructor(selectedOptions: TableOptions){
		let children = [new Widget({ element: { name: 'thead' } }), new Widget({ element: { name: 'tbody' } })];
		if(Array.isArray(selectedOptions.children)) (selectedOptions.children as Array<Widget>).unshift(...children);
		
		const options = {...defaultGrid(), children, ...selectedOptions};
		
		super(options, _initTable);
	}
	
	appendItem(item: any, index: number){
		return this.find('tbody').add(this._fromTemplate(item, index));
	}
	
	onItems(event: string, handler: CallableFunction): this {
		return this.onItems(event, handler);
	}

}