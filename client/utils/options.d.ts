import { animation } from "../components/Animate";
import Style, { styleProps } from "../components/Style";
import Store from "../data/Store";
import { widget } from "../widgets/_ghost/WidgetProps";
import { attr } from "./elman";
export interface elementOptions {
    name?: string;
    raw?: any;
    html?: string;
    selector?: string;
    [key: string]: any;
}
export interface sizeOptions {
    width?: number | string;
    height?: number | string;
    [key: string]: any;
}
export interface positionOption {
    type?: 'relative' | 'sticky' | 'static' | 'absolute' | 'unset' | 'fixed' | 'inherit' | 'none';
    centered?: boolean;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    [key: string]: any;
}
/**
 * Represents a configuration object for the Widget class.
 * @class
 */
declare class options {
    /**
   * The ID of the widget.
   * @type {string | undefined}
   */
    id?: string;
    /**
   * The animation settings for the widget.
   * @type {animation | undefined}
   */
    animation?: animation;
    /**
   * Configuration options for the HTML element of the widget.
   * @type {elementOptions | null}
   */
    element?: elementOptions | null;
    /**
   * The CSS class name for the widget.
   * @type {string | null}
   */
    class?: string | null;
    /**
     * Inline styles for the widget.
     *
     * @type {Style | Record<string, any> | null}
     */
    style?: Style | styleProps | null;
    /**
     * Position settings for the widget.
     *
     * @type {attrNullable | null}
     */
    position?: positionOption | null;
    size?: sizeOptions | null;
    attr?: attr | null;
    props?: attr | null;
    children?: (widget | null | Element | HTMLElement | Node | string)[] | [] | null;
    private?: boolean | null;
    reset?: boolean | null;
    value?: string | number | null;
    icon?: string | null;
    accepts?: boolean | null;
    store?: Store | null;
    name?: string | null;
    inheritStore?: boolean;
    events?: Record<string, Function> | null;
    _setters?: string[] | null;
    holdDuration?: number;
    build?: Function;
    onClick?: Function;
    onHold?: Function;
    onContextmenu?: Function;
    onMouseEnter?: Function;
    onMouseMove?: Function;
    onMouseDown?: Function;
    onKeyDown?: Function;
    onKeyUp?: Function;
    onKey?: Function;
    onChange?: Function;
    onMount?: Function;
    [key: string]: any;
}
export { options };
export default function getDefaults<T = options>(opts: options | T): T;
export declare function mergeOptions<T extends options = options>(defaults: T, options: T): T;
