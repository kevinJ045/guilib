import Widget from "../main/Widget";
import { options } from "../../utils/options";
interface AudioOptions extends options {
    src?: string;
    controls?: boolean;
    autoplay?: boolean;
}
declare class Audio<T extends options = AudioOptions> extends Widget<T> {
    constructor(selectedOptions: string | AudioOptions, otheroptions?: AudioOptions | null);
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
export default Audio;
