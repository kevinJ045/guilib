import Widget from "../main/Widget";
import { options } from "../../utils/options";
import Controller from "../../data/Controller";
export interface CheckboxOptions extends options {
    controller?: CheckboxController;
    checked?: boolean;
    onChange?(): any;
}
export declare class CheckboxController extends Controller<boolean> {
    constructor(val: boolean);
}
declare class Checkbox<T extends options = CheckboxOptions> extends Widget<T> {
    __controller?: CheckboxController;
    constructor(selectedOptions: CheckboxOptions);
    isChecked(): any;
    setChecked(checked: boolean): this;
    setController(controller: CheckboxController): void;
}
export default Checkbox;
