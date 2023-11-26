import { WidgetEventTarget } from "../../utils/eventtarget";
import generateRandomID from "../../utils/id";
import { WidgetList } from "../_ghost/WidgetProps";
import Widget from "./Widget";

export const components: {component: Component, [key: string]: any}[] = [];
function findComponent(component: Component){
	return components.find(c => c.component == component);
}

export interface navigationOptions {
	reinit?: boolean,
	refresh?: boolean,
	inherit?: boolean
}

export interface buildProps {
	route: {
		path: string,
		params: Record<string, any>
	},

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
		navigate: (path: string, options?: navigationOptions) => void,
		back: () => void,
		forward: () => void,
		assign: (path: string) => void,
		paths: {pathname: string, filename: string}[]
	},

	/**
	 * This value is null unless you have the /app/init.client.ts return a value.
	 * 
	 * To use the init prop you have to export a function init in your init.client.ts 
	 * file and make it return a value, that returned value will be the value of
	 * the init prop.
	 */
	init?: any,

	/**
	 * The page property is only found either in Layouts or inside of 
	 * the afterBuild buildProps.
	 * 
	 * It holds the value of a build result.
	 */
	page?: Widget,

	/**
	 * This function allows you to clone the buildProps and
	 * add custom properties into it.
	 * 
	 * 
	 * @param {any} object: The object to wrap around the buildProps
	 * @returns {buildProps}
	 */
	wrap?: (object: any) => buildProps,

	/**
	 * This function allows you to add properties to the base buildProps
	 * to pass it to the next built components.
	 * 
	 * 
	 * @param {string} key: The property name
	 * @param {any} value: The property value
	 * @returns {buildProps}
	 */
	add?: (key: string, value: any) => buildProps,

	/**
	 * This function allows you to add arguments to the base buildProps
	 * 'arg' property to pass it to the next built components.
	 * 
	 * 
	 * @param {any} args: The arguments value
	 * @returns {buildProps}
	 */
	addArgument?: (...args: any[]) => buildProps,

	/**
	 * The args to pass to the next built components 
	 * as build args instead of buildprops.
	 * 
	 */
	args?: any[],
	[key: string]: any
}

export function makeComponent(component: Component, props: buildProps | any, event: boolean = true){
	let args: any[] = Array.isArray(props.args) ? props.args : [];
	if(event) component.emit('beforeBuildStart', { component, props });
	// @ts-ignore
	const widget = component.build(props, ...args);
	if(event) component.emit('afterBuild', { component, props });
	if(!(widget instanceof Widget)) throw new TypeError('Component.build does not return a widget.');
	component._currentWidget = widget;
	component._buildProps = props;
	return widget;
}

type link = string | {
	rel: string,
	href: string
}

export enum componentEvents {
	'onInitState' = 'initState',
	'onBeforeBuildStart' = 'beforeBuildStart',
	'onAfterBuild' = 'afterBuild',
	'onAfterBuildEnd' = 'afterBuildEnd',
	'onRebuild' = 'rebuild',
}

function getEventKeyByName(value: string): string | undefined {
  for (const key in componentEvents) {
    if ((componentEvents as Record<string, string>)[key] === value) {
      return key;
    }
  }
  return undefined;
}

export function buildComponent<T>(component: any, props: T, from: Component | null = null){
	let _comp: Component = new component(props);
	_comp._beforeInit();
	if(component.inheritState !== false && from) _comp._inheritState(from);
	_comp.emit('initState', { component, props });
	_comp.initState(props as buildProps);
	_comp.emit('beforeBuildStart', { component, props });
	let widget = _comp.make(props as buildProps);
	_comp.emit('afterBuild', { component, props, widget });
	widget.component = _comp;
	_comp.afterBuild({...props, page: widget});
	_comp.emit('afterBuildEnd', { component, props, widget });
	return widget;
}

/**
 * A class decorator to define references before class initiation.
 */
export function ref(target: any, propertyKey: string | Record<string, any>){
	let key: string = "";
	if(typeof propertyKey == "object") key = propertyKey.name as string;
	else key = propertyKey;
	Object.defineProperty(target, key, {
		get: function(){
			return this._data[key]
		},
		set: function(newValue){
			this._data[key] = newValue;
			this.update();
		}
	});
}

export function typeref(type: "string" | "number" | "symbol" | "bigint" | "boolean" | "function" | "object" | "array" | "undefined" | "null"){
	return function(target: any, propertyKey: string | Record<string, any>){
		let key: string = "";
		if(typeof propertyKey == "object") key = propertyKey.name as string;
		else key = propertyKey;
		
		Object.defineProperty(target, key, {
			get: function(){
				return this._data[key]
			},
			set: function(newValue){
				const s = () => {
					this._data[key] = newValue;
					this.update();
				}
				if(type == "array" && Array.isArray(newValue)){
					s();
				} else if(typeof newValue == type){
					s();
				} else if(type == "null" && typeof newValue == "undefined"){
					s();
				} else {
					throw new TypeError(newValue+' is not of type '+type);
				}
				
			}
		});
	}
}

/**
 * An event decorator to listen to class events before class initiaition.
 */
export function onComponent(target: any, propertyKey: string | Record<string, any>){
	let key: string = "";
	if(typeof propertyKey == "object") key = propertyKey.name as string;
	else key = propertyKey;
	let eventKey = getEventKeyByName(key);
	if(eventKey && !target.events){
		let prev = target.afterConstruct;
		function afterConstruct(){
			// @ts-ignore
			let that = this;
			that.on(key, target[key]);
			if(typeof prev == "function") prev.call(that);
		};
		target.afterConstruct = afterConstruct;
	}
}

export interface ComponentEventData {
	component: Component,
	props: buildProps,
	widget?: Widget
}
export interface ComponentEvent<T = ComponentEventData> extends CustomEvent<T> {}

export default class Component extends WidgetEventTarget<ComponentEvent> {

	/**
	 * DO NOT OVERRIDE
	 * The eventEmitMethod tells the event emitter to emit the events as
	 * raw data instead of an event data.
	 */
	_eventEmitMethod = "raw";

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
	_data: Record<string, any> = {};

	/**
	 * An option to disable layouts in this component.
	 */
	static layouts = true;

	/**
	 * An option to set the title for this component.
	 */
	static title: string | null = null;

	/**
	 * An option to disable state inheritance in this component.
	 */
	static inheritState = true;

	/**
	 * An option to load css files into this component
	 * 
	 * for example google fonts, cdns...
	 */
	static links: link[] = [];

	/**
	 * An option to load js files into this component
	 * 
	 * for example cdns, vanilla libraries...
	 */
	static scripts: string[] = [];

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
	constructor(props: buildProps | any){
		super();
		components.push({ component: this });
		this._buildProps = props;
		this.id = generateRandomID(12);
	}

	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	get _beforeInit() : () => any {
		return () => {
			for(let i in this){
				if(this[i] instanceof Ref){
					this.ref(i, (this[i] as any).value);
				}
				if(typeof i == "function" && i in componentEvents){
					this.on((componentEvents as Record<string, any>)[i as string], this[i] as () => void);
				}
			}
		};
	}
	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	set _beforeInit(value: any){}

	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	get _inheritState() : (component: Record<string, any>) => any {
		return (component: Record<string, any>) => {
			for(let i in component){
				if(!(i in Component.prototype)){
					(this as any)[i] = component[i];
				}
			}
			for(let i in component._data){
				if(i in this._data) {
					this._data[i] = component._data[i]; 
				} else {
					this.ref(i, (component._data[i] as any));
				}
			}
		};
	}
	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	set _inheritState(value: any){}

	/**
	 * initState runs right after a component is constructed
	 * and right before it's built.
	 * the job is done right after inheritance and before the build
	 * is done, it is also not expected to return anything useful
	 */
	initState(props: buildProps | any) : void {}

	/**
	 * build runs after initState, it has a little different buildProps,
	 * and it can be executed again when state changes, meant to be used as a basic
	 * template and be manipulated in the afterBuild section later on
	 */
	build(props: buildProps | any) : Widget {
		return new Widget({});
	}

	/**
	 * afterBuild, as the name suggests, runs after build, it's props has
	 * the previously built widget as a parameter, so you can use that
	 * to manipulate the previously built component from here.
	 * 
	 * You can also use afterBuild for async requests using Controllers and 
	 * such for stateful change.
	 */
	afterBuild(props: buildProps | any) : void {}

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
	ref(property: string, value: any | null = null) : this {
		let that: Record<string, any> = this;
		if(property in Component.prototype) return this;
		if(property in this){
			if(!value) value = that[property];
			delete that[property];
		}
		Object.defineProperty(this, property, {
      get: () => this._data[property],
      set: (newValue) => {
        this._data[property] = newValue;
        this.update();
      },
    });
		this._data[property] = value;
		return this;
	}

	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	get make() : (props: buildProps | any) => Widget {
		return (props: buildProps | any = null) => makeComponent(this, props);
	}
	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	set make(value: any){}

	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * The update function is used to re-render the component when a ref
	 * is changed, you can use this to re-render anytime but you shouldn't
	 * override it.
	 */
	update(){
		if(this._currentWidget) {
			let comp = findComponent(this);
			let rendererElement: Widget | string | false = false;
			if(comp){
				if(comp.preventNextUpdate) { comp.preventNextUpdate = false; return this; }
				else if(comp.preventAllUpdates) { return this; }

				if(comp.rendererElement && typeof comp.rendererElement == "string" || comp.rendererElement instanceof Widget) rendererElement = comp.rendererElement;
			}
			let el = rendererElement == false ? this._currentWidget : (rendererElement instanceof Widget ? rendererElement : this._currentWidget.find(rendererElement as string) || this._currentWidget);
			let parent = rendererElement ? el : el.parent(true);
			if(rendererElement) {
				el.remove('*');
			}
			else this._currentWidget.remove();
			let oldWidget = this._currentWidget;
			let newWidget = makeComponent(this, this._buildProps.wrap({page: oldWidget}), false);
			let lastWidget: Widget | WidgetList = newWidget;

			if(typeof rendererElement == "string" && newWidget.find(rendererElement))
			lastWidget = newWidget.find(rendererElement).children();
			else if(rendererElement) newWidget.children();

			if(parent) {
				lastWidget.to(parent);
			}
			
			this.emit('rebuild', { widget: lastWidget, oldWidget, component: this, props: this._buildProps });
		} 
	}

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
	preventNextUpdate(){
		findComponent(this)!.
		preventNextUpdate = true;
	}

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
	preventAllUpdates(prevent: boolean){
		findComponent(this)!.
		preventAllUpdates = prevent;
	}

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
	rendererWidget(widget: string | Widget){
		findComponent(this)!.
		rendererElement = widget;
	}

	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is to build Components inside other Components.
	 */
	static buildFor<T = buildProps>(parent: Component | null, props: T){
		return buildComponent<T>(this, props, parent);
	}
}

/**
 * @deprecated Use the {@link ref} class decorator instead
 * @see {ref}
 * 
 * The Ref class can only be used in Components and 
 * it's use it to make a referencable stateful variable for a
 * component to make it re-render when the value is changed.
 */
export class Ref<T> {
	value?: T;
	constructor(value: T | null = null){
		if(value) this.value = value;
	}
}