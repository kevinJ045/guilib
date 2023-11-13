import Widget from "./Widget";

export const components: Component[] = [];

export interface navigationOptions{
	reinit?: boolean,
	refresh?: boolean,
	inherit?: boolean
}

export type buildProps = {
	route: {
		path: string,
		params: Record<string, any>
	},
	router: {
		navigate: (path: string, options?: navigationOptions) => void,
		back: () => void,
		assign: (path: string) => void,
		paths: string[]
	},
	init?: any,
	page?: Widget
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

export function buildComponent(component: any, from: Component){
	let _comp: Component = new component(from._buildProps);
	_comp._beforeInit();
	if(component.inheritState !== false) _comp._inheritState(from._buildProps);
	_comp.initState(from._buildProps);
	let widget = _comp.make(from._buildProps);
	return {
		widget,
		component: _comp
	}
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

	constructor(props: buildProps | any){
		components.push(this);
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
	initState(props: buildProps | any){}

	/**
	 * build runs after initState, it has a little different buildProps,
	 * and it can be executed again when state changes, meant to be used as a basic
	 * template and be manipulated in the afterBuild section later on
	 */
	build(props: buildProps | any){
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
	afterBuild(props: buildProps | any){}

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