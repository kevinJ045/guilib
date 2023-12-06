import { styleProps } from "../../components/Style";
import { Style } from "../../extra";
import { WidgetEventTarget } from "../../utils/eventtarget";
import Widget from "./Widget";
export declare const components: {
    component: Component;
    [key: string]: any;
}[];
export interface navigationOptions {
    reinit?: boolean;
    refresh?: boolean;
    inherit?: boolean;
}
export interface buildProps {
    route: {
        path: string;
        params: Record<string, any>;
    };
    /**
     * The router prop is used to do routing management.
     *
     * Can be used to navigate, back and forth and change the
     * current route paths.
     *
     */
    router: {
        /**
         * Used to navigate to a path
         *
         * @param {string} path The path to be navigated
         * @param {navigationOptions} options Navgation Options
         * @returns
         */
        navigate: (path: string, options?: navigationOptions) => void;
        back: () => void;
        forward: () => void;
        assign: (path: string) => void;
        paths: {
            pathname: string;
            filename: string;
        }[];
    };
    /**
     * This value is null unless you have the /app/init.client.ts return a value.
     *
     * To use the init prop you have to export a function init in your init.client.ts
     * file and make it return a value, that returned value will be the value of
     * the init prop.
     */
    init?: any;
    /**
     * The page property is only found either in Layouts or inside of
     * the afterBuild buildProps.
     *
     * It holds the value of a build result.
     */
    page?: Widget;
    /**
     * This function allows you to clone the buildProps and
     * add custom properties into it.
     *
     *
     * @param {any} object: The object to wrap around the buildProps
     * @returns {buildProps}
     */
    wrap?: (object: any) => buildProps;
    /**
     * This function allows you to add properties to the base buildProps
     * to pass it to the next built components.
     *
     *
     * @param {string} key: The property name
     * @param {any} value: The property value
     * @returns {buildProps}
     */
    add?: (key: string, value: any) => buildProps;
    /**
     * This function allows you to add arguments to the base buildProps
     * 'arg' property to pass it to the next built components.
     *
     *
     * @param {any} args: The arguments value
     * @returns {buildProps}
     */
    addArgument?: (...args: any[]) => buildProps;
    /**
     * The args to pass to the next built components
     * as build args instead of buildprops.
     *
     */
    args?: any[];
    [key: string]: any;
}
export declare function makeComponent(component: Component, props: buildProps | any, event?: boolean): Widget<import("../../utils/options").options>;
type link = string | {
    rel: string;
    href: string;
};
export declare enum componentEvents {
    'onBeforeInit' = "beforeInit",
    'onInitState' = "initState",
    'onBuildStart' = "buildStart",
    'onBuildEnd' = "buildEnd",
    'onRebuild' = "rebuild"
}
export declare function buildComponent<T>(component: any, props: T, from?: Component | null): Widget<import("../../utils/options").options>;
/**
 * A class decorator to define references before class initiation.
 */
export declare function ref(target: any, propertyKey: string | Record<string, any>): void;
export declare function typeref(type: "string" | "number" | "symbol" | "bigint" | "boolean" | "function" | "object" | "array" | "undefined" | "null"): (target: any, propertyKey: string | Record<string, any>) => void;
/**
 * An event decorator to listen to class events before class initiaition.
 */
export declare function onComponent(target: any, propertyKey: string | Record<string, any>): void;
export interface AsyncBuildOptions {
    loading?: () => Widget;
}
export declare function asyncComponent(options?: AsyncBuildOptions): (constructor: any, extended?: any) => void;
export interface ComponentEventData {
    component: Component;
    props: buildProps;
    widget?: Widget;
}
export interface ComponentEvent<T = ComponentEventData> extends CustomEvent<T> {
}
export declare class ComponentStyles {
    private styles;
    id: string;
    constructor(styles: Record<string, styleProps>);
    set(name: string, styles: styleProps): this;
    get(name: string): Style<Record<string, any>>;
    remove(name: string): this;
    change(name: string, styles: styleProps): this;
}
export default class Component extends WidgetEventTarget<ComponentEvent> {
    /**
     * DO NOT OVERRIDE
     * The eventEmitMethod tells the event emitter to emit the events as
     * raw data instead of an event data.
     */
    _eventEmitMethod: string;
    /**
     * The _currentWidget stores the current widget to manipulate later, it
     * binds the component with it's built widget after the build
     * is done.
     */
    _currentWidget?: Widget;
    /**
     * The id property is to identify the component among other initiated components.
     */
    id?: string;
    /**
     * The _buildProps are the properties for the build, stored to
     * rebuild later incase of state change.
     */
    _buildProps: buildProps | any;
    /**
     * The data from Ref and Component::ref is stored here in the component.
     */
    _data: Record<string, any>;
    /**
     * An option to disable layouts in this component.
     */
    static layouts: boolean;
    /**
     * An option to set the title for this component.
     */
    static title: string | null;
    /**
     * An option to set the body class for this component.
     */
    static bodyClass: string | null;
    /**
     * An option to disable state inheritance in this component.
     */
    static inheritState: boolean;
    /**
     * An option to load css files into this component
     *
     * for example google fonts, cdns...
     */
    static links: link[];
    /**
     * An option to load js files into this component
     *
     * for example cdns, vanilla libraries...
     */
    static scripts: string[];
    /**
     * Update mode refers to how the page updates when you
     * made changes to your files.
     *
     * If the updateMode is reinit, it will re-import the js and re init
     * everything without reloading.
     *
     * If the updateMode is refresh, it will refresh the page on file
     * update to sync the changes.
     */
    static updateMode: "reinit" | "refresh";
    styles?: ComponentStyles;
    /**
     * A function to run before any component build starts.
     *
     * Can be used to register arguments to a component chain,
     * or to register properties to child components.
     */
    static beforeBuildStart?: (props: buildProps) => void;
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    constructor(props: buildProps | any);
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    get _beforeInit(): () => any;
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    set _beforeInit(value: any);
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    get _inheritState(): (component: Record<string, any>) => any;
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    set _inheritState(value: any);
    /**
     * initState runs right after a component is constructed
     * and right before it's built.
     * the job is done right after inheritance and before the build
     * is done, it is also not expected to return anything useful
     */
    initState(props: buildProps | any): void;
    /**
     * build runs after initState, it has a little different buildProps,
     * and it can be executed again when state changes, meant to be used as a basic
     * template and be manipulated in the afterBuild section later on
     */
    build(props: buildProps | any): Widget | Promise<Widget>;
    /**
     * afterBuild, as the name suggests, runs after build, it's props has
     * the previously built widget as a parameter, so you can use that
     * to manipulate the previously built component from here.
     *
     * You can also use afterBuild for async requests using Controllers and
     * such for stateful change.
     */
    afterBuild(props: buildProps | any): void;
    /**
     *
     * Makes reference setters and getters for a data value
     * that can be used to make a Stateful component.
     *
     * When a ref is changed, the entire Component is re-rendered
     * with the new value.
     *
     * @param {string} property : property name
     * @param {any} value : property initial value
     * @returns {Component}
     *
     */
    ref(property: string, value?: any | null): this;
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    get make(): (props: buildProps | any) => Widget;
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    set make(value: any);
    /**
     * DO NOT OVERRIDE!!
     *
     * The update function is used to re-render the component when a ref
     * is changed, you can use this to re-render anytime but you shouldn't
     * override it.
     */
    update(): this;
    /**
     * DO NOT OVERRIDE
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     *
     * A method to prevent the next component update/rebuild,
     *
     * Can be used to stop a build loop.
     *
     * @deprecated
     */
    preventNextUpdate(): void;
    /**
     * DO NOT OVERRIDE
     *
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     *
     * This function can be used to disable
     * the rebuildability of the entire component.
     *
     * @deprecated
     */
    preventAllUpdates(prevent: boolean): void;
    /**
     *
     * DO NOT OVERRIDE
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     *
     * This class can be used to set a base renderer widget inside of your widget so it does not remove
     * everything everytime you update.
     *
     * @param {string | Widget} widget The widget selector for the renderer widget or the renderer widget itself.
     */
    rendererWidget(widget: string | Widget): void;
    /**
     * Get a style from the styles in a component
     * @param {string} name the style name inside the component style
     */
    getStyle<U = any>(name: string): Style<U> | null;
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is to build Components inside other Components.
     */
    static buildFor<T = buildProps>(parent: Component | null, props: T): Widget<import("../../utils/options").options>;
}
/**
 * @deprecated Use the {@link ref} class decorator instead
 * @see {ref}
 *
 * The Ref class can only be used in Components and
 * it's use is to make a referencable stateful variable for a
 * component to make it re-render when the value is changed.
 */
export declare class Ref<T> {
    value?: T;
    constructor(value?: T | null);
}
export {};
