import Widget from "../main/Widget";
import { options } from "../../utils/options";
interface VideoOptions extends options {
    src?: string;
    controls?: boolean;
    autoplay?: boolean;
    height?: string | number;
    width?: string | number;
}
declare class Video<T extends options = VideoOptions> extends Widget<T> {
    constructor(selectedOptions: string | VideoOptions, otheroptions?: VideoOptions | null);
    static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object): {};
    set src(src: string);
    set controls(controls: boolean);
    set autoplay(autoplay: boolean);
    play(): this;
    pause(): this;
    get paused(): any;
    get duration(): number;
    get currentTime(): number;
}
export default Video;
