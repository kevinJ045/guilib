import { options } from "./utils/options";
import Widget, { widget } from "./widgets/main/Widget";
type path = string | (string | null)[] | Record<string, string | null | (string | null)[]>;
export interface SVGOptions extends options {
}
export interface SVGPathOptions extends SVGOptions {
    d?: string;
}
export interface SVGGroupOptions extends SVGOptions {
    path?: path;
}
export interface SVGOptionsBase extends SVGOptions {
    path?: path;
    width?: number | string;
    height?: number | string;
}
export declare class SVGPath extends Widget<SVGPathOptions> {
    constructor(options: SVGPathOptions);
    set d(path: string);
}
declare class SVGBare<T extends SVGOptions = SVGOptions> extends Widget<T> {
    constructor(options: T);
    set path(path: path);
}
export declare class SVG extends SVGBare<SVGOptionsBase> {
    constructor(options: SVGOptionsBase);
    _onMount(parent: widget): void;
    add(widget: Widget): this;
    static fromXML(xml: string): SVG;
}
export declare class SVGGroup extends SVGBare<SVGGroupOptions> {
    constructor(options: SVGGroupOptions);
}
export interface SVGCircleOptions extends SVGOptions {
    cx?: string;
    cy?: string;
    r?: string;
}
export declare class SVGCircle extends Widget<SVGCircleOptions> {
    constructor(options: SVGCircleOptions);
    set cx(cx: number);
    set cy(cy: number);
    set r(r: number);
}
export interface SVGRectOptions extends SVGOptions {
    x?: string;
    y?: string;
    w?: string;
    h?: string;
}
export declare class SVGRect extends Widget<SVGRectOptions> {
    constructor(options: SVGRectOptions);
    set x(x: number);
    set y(y: number);
    set w(width: number);
    set h(height: number);
}
export {};
