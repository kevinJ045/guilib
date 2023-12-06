import { options } from "../../utils/options";
import Text from "./Text";
import { Controller } from "../../extra";
export interface urlOptions {
    url: string;
    click: (url: string) => void;
}
export interface LinkOptions extends options {
    url?: string | urlOptions;
    target?: string;
}
declare class Link<T extends LinkOptions = LinkOptions> extends Text<T> {
    constructor(selectedOptions: string | LinkOptions, otheroptions?: LinkOptions | null);
    set url(url: string | Controller<string>);
    set target(target: string);
}
export default Link;
