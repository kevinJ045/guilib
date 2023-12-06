import Widget from "./Widget";
import { options } from "../../utils/options";
interface ImageOptions extends options {
    src?: string | Blob;
    height?: string | number;
    width?: string | number;
}
declare class Image<T extends options = ImageOptions> extends Widget<T> {
    constructor(selectedOptions: Blob | string | ImageOptions, otheroptions?: ImageOptions | null);
    static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object): ImageOptions;
    set src(src: string | Blob);
}
export default Image;
