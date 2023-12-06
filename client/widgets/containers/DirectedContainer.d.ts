import Widget from "../main/Widget";
import { options } from "../../utils/options";
export interface DirectedWidgetOptions extends options {
    gap?: string | number;
    height?: string | number;
    width?: string | number;
    crossAxisAlignment?: string;
    mainAxisAlignment?: string;
    wrap?: boolean | string;
}
declare class DirectedWidget<T extends options = DirectedWidgetOptions> extends Widget<T> {
    constructor(selectedOptions: DirectedWidgetOptions, type: string);
    set crossAxisAlignment(value: string);
    set mainAxisAlignment(value: string);
    set gap(value: string);
    set wrap(value: boolean | string);
}
export declare class Column<T extends options = DirectedWidgetOptions> extends DirectedWidget<T> {
    constructor(selectedOptions: DirectedWidgetOptions);
}
export declare class Row<T extends options = DirectedWidgetOptions> extends DirectedWidget<T> {
    constructor(selectedOptions: DirectedWidgetOptions);
}
export declare class Center<T extends options = DirectedWidgetOptions> extends DirectedWidget<T> {
    constructor(selectedOptions: DirectedWidgetOptions);
}
export {};
