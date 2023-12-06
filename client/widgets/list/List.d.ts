import Widget from "../main/Widget";
import { options } from "../../utils/options";
import ListBuilder from "./ListBuilder";
import Controller from "../../data/Controller";
export interface ListItemOptions extends options {
    title?: Widget | string;
    link?: boolean;
}
type items<T = any> = Controller<T[]> | T[];
export interface ListOptions<T = any> extends options {
    itemsStateName?: string;
    items?: items<T> | Promise<items<T | any>>;
    template?: CallableFunction & ((item: T, index: number, array: items<T>) => Widget);
    empty?: boolean;
}
declare class ListItem extends Widget<ListItemOptions> {
    constructor(selectedOptions: ListItemOptions);
    set url(link: string);
}
declare class List<T = any> extends ListBuilder<T, ListOptions> {
    constructor(selectedOptions: ListOptions<T>);
    appendItem(item: any, index: number): this;
    onItems(event: string, handler: CallableFunction): this;
    empty(): this;
}
export { ListItem };
export default List;
