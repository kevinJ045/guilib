import Widget from "../widgets/main/Widget";
import { options } from "./options";
/**
    {
        "selector": "div.card",
        "children": [
            {
                "selector": "div.card-body",
                "children": [
                    "h2.card-title",
                    { "selector": "div.card-content" },
                    { "selector": "div.card-actions" }
                ]
            }
        ],
        "options": {
            "actions": {
                "type": "array",
                "forEach": {
                    "div.card-actions": {
                        "append": "$item"
                    }
                }
            },
            "content": {
                "type": "array",
                "forEach": {
                    "div.card-content": {
                        "append": "$item"
                    }
                }
            },
            "title": {
                "string": {
                    "h2.card-title": {
                        "text": "$title"
                    }
                },
                "widget": {
                    "h2.card-title": {
                        "empty": true,
                        "append": "$title"
                    }
                }
            },
            "image": {
                "any": {
                    "div.card-body": {
                        "prepend": {
                            "selector": "figure.card-image-container"
                        }
                    }
                },
                "string": {
                    "figure.card-image-container": {
                        "append": {
                            "selector": "img.card-image",
                            "atributes": {
                                "src": "$image"
                            }
                        }
                    }
                },
                "widget": {
                    "figure.card-image-container": {
                        "append": "$image"
                    }
                }
            }
        }
    }
*/
export type widgetModelActionCases = {
    [key: string]: {
        [key: string]: any;
        text?: string | ((widget: any, context: any) => string);
        addClass?: string | ((widget: any, context: any) => string);
        removeClass?: string | ((widget: any, context: any) => string);
        toggleClass?: string | ((widget: any, context: any) => string);
        append?: string | widgetModel | ((widget: any, context: any) => string | widgetModel);
        empty?: boolean | ((widget: any, context: any) => boolean);
        prepend?: string | widgetModel | ((widget: any, context: any) => string | widgetModel);
    };
};
export type widgetModelTypeCases = {
    any?: widgetModelActionCases;
    number?: widgetModelActionCases;
    boolean?: widgetModelActionCases;
    string?: widgetModelActionCases;
    function?: widgetModelActionCases;
    object?: widgetModelActionCases;
    null?: widgetModelActionCases;
    undefined?: widgetModelActionCases;
    widget?: widgetModelActionCases;
    else?: widgetModelActionCases;
    type?: string;
    forEach?: widgetModelTypeCases;
    [key: string]: any;
};
export type widgetModel<T = Record<string, any>> = {
    selector: string;
    children?: (widgetModel | string)[];
    child?: widgetModel | string;
    options?: Record<string, widgetModelTypeCases>;
    attributes?: Record<string, any>;
    text?: string;
    html?: string;
    widgetOptions?: T;
    [key: string]: any;
};
export declare function createWidgetModel<T extends options = options, U = Record<string, any>>(model: widgetModel<U>, _options: any, widget?: new (...args: any[]) => Widget): {
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
        store: import("../data/Store").default;
        __events__: import("../widgets/_ghost/WidgetProps").event[];
        style: import("../components/Style").styleProps | import("../components/Style").default<Record<string, any>>;
        padding: string;
        margin: string;
        name: string;
        _optionChange(options: any): void;
        addHTMLElement(child: HTMLElement | import("../widgets/_ghost/WidgetProps").HTMLGUIWidget, subchild: string): any;
        addWidget(child: import("../widgets/_ghost/WidgetProps").child, subchild: string): any;
        add(child: import("../widgets/_ghost/WidgetProps").child, subchild?: string): any;
        addBefore(child: import("../widgets/_ghost/WidgetProps").child, subchild?: string): any;
        addAll(...children: (string | import("../widgets/_ghost/WidgetProps").child)[]): any;
        addWrappedElement(elt: import("../widgets/_ghost/WidgetProps").widget | import("../widgets/_ghost/WidgetProps").HTMLGUIWidget, elementText: string, where: string, subchild?: string): any;
        remove(child?: string | import("../widgets/_ghost/WidgetProps").child, subchild?: string): any;
        is(state: string, is?: any): any;
        children(subchild?: string): import("../widgets/_ghost/WidgetProps").WidgetList;
        find(q: string, subchild?: string): Widget<options>;
        findAll(q: string, subchild?: string): Widget<options>[];
        closest(q: string): any;
        parent(container?: boolean): any;
        container(): Widget<{
            element: {
                raw: HTMLElement | import("../widgets/_ghost/WidgetProps").HTMLGUIWidget;
            };
        }>;
        attr(props: string | import("./elman").attr): any;
        prop(props: string | import("./elman").attr): any;
        css(props: import("./elman").attr): any;
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
        toHTMLElement(parent: HTMLElement | import("../widgets/_ghost/WidgetProps").HTMLGUIWidget, direction?: string): any;
        toWidget(parent: import("../widgets/_ghost/WidgetProps").widget, direction?: string): any;
        to(parent: import("../widgets/_ghost/WidgetProps").child, direction?: string): any;
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
        animation: import("../components/Animate").animation;
        setAnimation(animation: import("../components/Animate").animation): void;
        animate(children: string, animation: import("../components/Animate").animation): any;
        getStore(store?: string): {
            [x: string]: any;
        };
        setStore(props: Record<string, any>, store?: string): void;
        _onMount(parent: import("../widgets/_ghost/WidgetProps").widget): void;
        clone(selectedOptions?: {
            cloneChildren?: boolean | "options";
            cloneEvents?: boolean;
        }): Widget<options>;
        registerProxy(object: any, callback: Function, set?: boolean): any;
        proxyCloner(object: any, object1: any): any;
        $id: string;
    };
};
