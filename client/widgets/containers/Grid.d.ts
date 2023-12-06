import { options } from "../../utils/options";
import ListBuilder from "../list/ListBuilder";
import Controller from "../../data/Controller";
type items = Controller<any[]> | any[];
interface gridOptions {
    trueOrder?: boolean;
    waitForImages?: boolean;
    useOwnImageLoader?: boolean;
    mobileFirst?: boolean;
    columns?: number;
    margin?: {
        y?: number | string;
        x?: number | string;
    };
    padding?: {
        y?: number | string;
        x?: number | string;
    };
    breakAt?: Record<number, number | gridOptions>;
}
interface GridOptions extends options {
    itemsStateName?: string;
    template?: CallableFunction;
    items?: items | Promise<items>;
    gridClass?: string;
    grid?: gridOptions | false;
}
declare class Grid<T = any, U = GridOptions> extends ListBuilder<T, U> {
    constructor(selectedOptions: GridOptions);
    gridClass(gridClass: string, gridReplacer: string): any;
    _onUpdate(options: GridOptions): void;
    appendItem(item: any, index: number): this;
    onItems(event: string, handler: CallableFunction): this;
    empty(): this;
}
export default Grid;
