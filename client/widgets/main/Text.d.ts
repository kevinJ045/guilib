import Widget from "./Widget";
import { options } from "../../utils/options";
import Controller from "../../data/Controller";
type text = string | Controller<any> | ((widget: Widget) => string);
type textPromise = text | Promise<text>;
interface textOptions extends options {
    text?: textPromise | null;
}
/**
 * Text representation for the Widget class
 * @class Text
 * @extends Widget
 */
declare class Text<T extends options = textOptions> extends Widget<T> {
    constructor(selectedOptions: string | textOptions, otheroptions?: textOptions | null);
    _optionChange(options: any): void;
    render(): void;
    static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object): {};
}
export type { textOptions, text };
export default Text;
