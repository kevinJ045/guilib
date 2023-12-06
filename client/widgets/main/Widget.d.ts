import { options } from "../../utils/options";
import WidgetProps, { WidgetList, child, widget } from "../_ghost/WidgetProps";
import Store from "../../data/Store";
import { widgetModel } from "../../utils/widgetmodel";
import { animation } from "../../components/Animate";
/**
 * Widget class represents a graphical user interface (GUI) element.
 *
 * @class Widget
 * @extends {WidgetProps}
 */
declare class Widget<O extends options = options> extends WidgetProps {
    component?: any;
    /**
     * Creates an instance of the Widget.
     *
     * @param {options} [options={}] - Configuration options for the Widget.
     */
    options: O | options;
    constructor(options?: O | options);
    setOptions(options: O | options): void;
    static from(child: HTMLElement | string): Widget<{
        element: {
            raw: HTMLElement | import("../_ghost/WidgetProps").HTMLGUIWidget;
        };
    }>;
    /**
     * Creates a Widget class from config.
     *
     * @param {widgetModel} [model] - Configuration model for the Widget.
     * @param {any} [options] - Configuration options for the Widget.
     */
    static model<T extends options = options, U = any>(model: widgetModel<U>, options?: Record<string, any>): {
        new (options?: T): {
            options: T;
            component?: any;
            setOptions(options: options): void;
            tree: any[];
            _id?: string;
            id: string;
            accepts: boolean;
            private: boolean;
            sealed: boolean;
            __generated: boolean;
            _onBuild?: Function;
            store: Store;
            __events__: import("../_ghost/WidgetProps").event[];
            style: import("../../components/Style").styleProps | import("../../components/Style").default<Record<string, any>>;
            padding: string;
            margin: string;
            name: string;
            _optionChange(options: any): void;
            addHTMLElement(child: HTMLElement | import("../_ghost/WidgetProps").HTMLGUIWidget, subchild: string): any;
            addWidget(child: child, subchild: string): any;
            add(child: child, subchild?: string): any;
            addBefore(child: child, subchild?: string): any;
            addAll(...children: (string | child)[]): any;
            addWrappedElement(elt: widget | import("../_ghost/WidgetProps").HTMLGUIWidget, elementText: string, where: string, subchild?: string): any;
            remove(child?: string | child, subchild?: string): any;
            is(state: string, is?: any): any;
            children(subchild?: string): WidgetList;
            find(q: string, subchild?: string): Widget<options>;
            findAll(q: string, subchild?: string): Widget<options>[];
            closest(q: string): any;
            parent(container?: boolean): any;
            container(): Widget<{
                element: {
                    raw: HTMLElement | import("../_ghost/WidgetProps").HTMLGUIWidget;
                };
            }>;
            attr(props: string | import("../../utils/elman").attr): any;
            prop(props: string | import("../../utils/elman").attr): any;
            css(props: import("../../utils/elman").attr): any;
            styleProp(prop: string): any;
            text(text: string): any;
            height(h?: string | number): any;
            width(w?: string | number): any;
            html(text?: string): any;
            addClass(classes: string): any;
            hasClass(classes: string): any;
            removeClass(classes: string): any;
            toggleClass(classes: string): any;
            rect(): any;
            focus(): any;
            click(): any;
            toHTMLElement(parent: HTMLElement | import("../_ghost/WidgetProps").HTMLGUIWidget, direction?: string): any;
            toWidget(parent: widget, direction?: string): any;
            to(parent: child, direction?: string): any;
            on(event: string | string[], callback: Function): any;
            off(event: string | string[], callback?: Function): any;
            emit(event: string, data: any): any;
            hide(time: number): any;
            show(time: number): any;
            toggle(time: number): any;
            disable(): any;
            enable(): any;
            raw(): any;
            toString(): any;
            stripElement(): boolean;
            toArray(): any[];
            animation: animation;
            setAnimation(animation: animation): void;
            animate(children: string, animation: animation): any;
            getStore(store?: string): {
                [x: string]: any;
            };
            setStore(props: Record<string, any>, store?: string): void;
            _onMount(parent: widget): void;
            clone(selectedOptions?: {
                cloneChildren?: boolean | "options";
                cloneEvents?: boolean;
            }): Widget<options>;
            registerProxy(object: any, callback: Function, set?: boolean): any;
            proxyCloner(object: any, object1: any): any;
            $id: string;
        };
    };
    static animateWidgets(animation: animation, ...widgets: Widget[]): WidgetList;
    static new<T extends options = options>(options: T): Widget<Record<string, any>>;
}
export declare function uiwidget<T = options>(defaults: T): (target: any, extended?: any) => any;
export type { widget };
export default Widget;
