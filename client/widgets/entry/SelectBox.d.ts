import Controller from "../../data/Controller";
import { options } from "../../utils/options";
import Widget, { widget } from "../main/Widget";
export interface SelectableOptions {
    title: widget | string;
    value: string;
    selected?: boolean;
    disabled?: boolean;
}
export declare class SelectController extends Controller<SelectableOption | SelectableOptions | string> {
    constructor(val: SelectableOption | SelectableOptions | string);
}
export interface SelectOptions extends options {
    selectableOptions?: SelectableOptions[];
    controller?: SelectController;
    multiple?: boolean;
}
export interface SelectOptionOptions extends SelectableOptions, options {
    title: widget | string;
    value: string;
}
export declare class SelectableOption<T extends options = SelectOptionOptions> extends Widget<T> {
    constructor(options: SelectOptionOptions);
    set selected(value: boolean);
    set disabled(value: boolean);
    set value(value: string);
    get value(): string;
    set title(title: widget | string);
}
export default class Selectbox<T extends options = SelectOptions> extends Widget<T> {
    __controller?: SelectController;
    constructor(selectedOptions: SelectOptions);
    setController(controller: SelectController): void;
    set multiple(value: boolean);
    set selectableOptions(options: SelectableOptions[] | SelectableOption[]);
    val(value?: string | SelectableOption | SelectableOptions | null): any;
}
