import Controller from "../../data/Controller";
import { options } from "../../utils/options";
import Widget from "../main/Widget";
export declare class EntryController extends Controller<string> {
    constructor(val: string);
}
export interface EntryOptions extends options {
    controller?: EntryController;
    title?: string;
    onTextInput?: CallableFunction;
    required?: boolean;
    inputType?: 'file' | 'text' | 'email' | 'password' | 'number' | 'textarea' | 'range' | 'progress';
}
declare class InputWrapper<T extends options = EntryOptions> extends Widget<T> {
    __controller?: EntryController;
    constructor(selectedOptions: EntryOptions);
    setController(controller: EntryController): void;
    val(value?: string | null): any;
    set inputType(type: string | Controller<string>);
    set title(text: string | Controller<string>);
    static textArea(selectedOptions: EntryOptions): InputWrapper<EntryOptions>;
}
export default InputWrapper;
