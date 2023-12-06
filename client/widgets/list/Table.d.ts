import Controller, { ArrayController } from "../../data/Controller";
import { options } from "../../utils/options";
import Widget from "../main/Widget";
import ListBuilder from "./ListBuilder";
type items = Controller<any[]> | any[];
export declare class TableController<T> extends ArrayController<T> {
    columns: ArrayController<string>;
    items: T[];
    constructor({ columns, items, }?: {
        columns: string[];
        items: T[];
    });
    setColumns(columns: string[]): this;
    addColumn(columns: string): this;
    get(): any[];
    private transformItems;
    private transformItem;
}
export interface TableOptions extends options {
    itemsStateName?: string;
    template?: CallableFunction;
    items?: items | Promise<items>;
    columns?: items | Promise<items>;
    tableOptions?: {};
    empty?: boolean;
    controller?: TableController<any>;
}
type rowValueSimple = Widget | null | string | CallableFunction;
export type rowValue = rowValueSimple | {
    type: "th" | "td";
    value: rowValueSimple;
};
export interface TableRowOptions extends options {
    values: rowValue[];
}
export declare class TableRow extends Widget {
    constructor(options: TableRowOptions);
    _optionChange(options: TableRowOptions): void;
}
export declare class Table<T = any, U = TableOptions> extends ListBuilder<T, U> {
    controller?: TableController<T>;
    constructor(selectedOptions: TableOptions);
    appendItem(item: T, index: number): Widget<options>;
    onItems(event: string, handler: CallableFunction): this;
}
export {};
