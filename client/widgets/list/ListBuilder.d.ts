import Widget from "../main/Widget";
import { options } from "../../utils/options";
import Store from "../../data/Store";
declare class ListBuilder<T = any, U extends options = options> extends Widget<U> {
    state: Store;
    constructor(selectedOptions: Record<string, any>, _initList: CallableFunction);
    _fromTemplate(item: T, index: number): Widget<options>;
    updateList(newOptions: Record<string, any>): this;
    _onUpdate(any: any): void;
    addItem(...items: any[]): this;
    removeItems(...itemsToRemove: any[]): this;
    onItems(event: string, handler: CallableFunction, subchild: any): this;
    empty(): this;
}
export default ListBuilder;
