import Widget from "../widgets/main/Widget";
export type ElementOptions = Record<string, any>;
export declare class WebkitWidget extends Widget {
    constructor(options?: {});
}
export declare class Video extends WebkitWidget {
    constructor(options?: Record<string, any>);
    play(): this;
    pause(): this;
    paused(): this;
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set controls(value: any);
    set src(value: any);
}
export declare class Ul extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
}
export declare class Track extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set kind(value: any);
    set src(value: any);
    set srclang(value: any);
    set label(value: any);
    set default(value: any);
}
export declare class Title extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Time extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set datetime(value: any);
}
export declare class Textarea extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set rows(value: any);
    set cols(value: any);
    set readonly(value: any);
}
export declare class Template extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set content(value: any);
}
export declare class Tablesection extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set align(value: any);
}
export declare class Tablerow extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set align(value: any);
    set valign(value: any);
}
export declare class Table extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set border(value: any);
    set cellpadding(value: any);
    set cellspacing(value: any);
}
export declare class Tablecol extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set span(value: any);
}
export declare class Tablecell extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set align(value: any);
    set valign(value: any);
}
export declare class Tablecaption extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set align(value: any);
}
export declare class Style extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
    set media(value: any);
}
export declare class Span extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Source extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
    set src(value: any);
    set media(value: any);
}
export declare class Slot extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Select extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set size(value: any);
    set multiple(value: any);
}
export declare class Script extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
    set src(value: any);
}
export declare class Quote extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Progress extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set max(value: any);
    set value(value: any);
}
export declare class Pre extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Picture extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Param extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set type(value: any);
    set contenteditable(value: any);
    set value(value: any);
}
export declare class Paragraph extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Output extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Option extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set value(value: any);
    set label(value: any);
    set selected(value: any);
}
export declare class Optgroup extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set label(value: any);
}
export declare class ObjectElement extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
    set data(value: any);
}
export declare class Ol extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Mod extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Meter extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set value(value: any);
    set min(value: any);
    set max(value: any);
    set low(value: any);
    set high(value: any);
    set optimum(value: any);
}
export declare class Meta extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set type(value: any);
    set contenteditable(value: any);
    set content(value: any);
}
export declare class Menu extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
    set label(value: any);
}
export declare class Media extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set src(value: any);
}
export declare class Marquee extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set behavior(value: any);
    set direction(value: any);
    set scrollamount(value: any);
    set loop(value: any);
}
export declare class Map extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Link extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set rel(value: any);
    set href(value: any);
}
export declare class Legend extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set align(value: any);
}
export declare class Label extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set for(value: any);
}
export declare class Li extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Input extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set contenteditable(value: any);
    set value(value: any);
    set readonly(value: any);
}
export declare class Image extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Iframe extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set src(value: any);
    set frameborder(value: any);
}
export declare class Heading extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Head extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Hr extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set color(value: any);
}
export declare class Frameset extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Frame extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set src(value: any);
}
export declare class Form extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set action(value: any);
    set method(value: any);
    set enctype(value: any);
    set target(value: any);
}
export declare class Font extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Fieldset extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set disabled(value: any);
}
export declare class Embed extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Div extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set align(value: any);
}
export declare class Directory extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set compact(value: any);
}
export declare class Dialog extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set open(value: any);
}
export declare class Details extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set open(value: any);
}
export declare class Datalist extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Data extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Dlist extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set compact(value: any);
}
export declare class Canvas extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Button extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set contenteditable(value: any);
    set value(value: any);
}
export declare class Base extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set href(value: any);
}
export declare class Br extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
}
export declare class Audio extends WebkitWidget {
    constructor(options?: Record<string, any>);
    play(): this;
    pause(): this;
    paused(): this;
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set controls(value: any);
    set src(value: any);
}
export declare class Area extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set shape(value: any);
    set coords(value: any);
    set href(value: any);
    set alt(value: any);
}
export declare class Anchor extends WebkitWidget {
    constructor(options?: Record<string, any>);
    set name(value: any);
    set type(value: any);
    set contenteditable(value: any);
    set target(value: any);
    set href(value: any);
    set title(value: any);
}
