import Widget from "./Widget";

export const components: Component[] = [];

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
		paths: string[]
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
	[key: string]: any
}

export function makeComponent(component: Component, props: buildProps | any){
	const widget = component.build(props);
	if(!(widget instanceof Widget)) throw new TypeError('Component.build does not return a widget.');
	component._currentWidget = widget;
	component._buildProps = props;
	return widget;
}

type link = string | {
	rel: string,
	href: string
}

export function buildComponent<T>(component: any, props: T, from: Component | null = null){
	let _comp: Component = new component(props);
	_comp._beforeInit();
	if(component.inheritState !== false && from) _comp._inheritState(from);
	_comp.initState(props as buildProps);
	let widget = _comp.make(props as buildProps);
	widget.component = _comp;
	return widget;
}

export default class Component {
	/**
	 * The _currentWidget stores the current widget to manipulate later, it 
	 * binds the component with it's built widget after the build
	 * is done.
	 */
	_currentWidget?: Widget;

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
	 * DO NOT OVERRIDE!!
	 * 
	 * This function is not overridable, or in other words, 
	 * this function is a core function to make the Component
	 * logic work, please don't touch it
	 */
	constructor(props: buildProps | any){
		components.push(this);
		this._buildProps = props;
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
	 * Makes reference setters and getters for a data value 
	 * that can be used to make a Stateful component.
	 * 
	 * When a ref is changed, the entire Component is re-rendered 
	 * with the new value.
	 * 
	 * @param {string} property : property name
	 * @param {any} value : property initial value
	 * @returns {Component}
	 */
	ref(property: string, value: any | null = null){
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
			let parent = this._currentWidget.parent(true);
			this._currentWidget.remove();
			let newWidget = makeComponent(this, this._buildProps);
			if(parent) newWidget.to(parent);
		} 
	}

	/**
	 * DO NOT OVERRIDE!!
	 * 
	 * The update function is used to re-render the component when a ref
	 * is changed, you can use this to re-render anytime but you shouldn't
	 * override it.
	 * 
	 * This function is to build Components inside other Components.
	 */
	static buildFor<T = buildProps>(parent: Component | null, props: T){
		return buildComponent<T>(this, props, parent);
	}
}

/**
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