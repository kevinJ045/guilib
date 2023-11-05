import Widget from "./Widget";

export const components: Component[] = [];


export type buildProps = {
	route: {
		path: string,
		params: Record<string, any>
	},
	router: {
		navigate: (path: string) => void,
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

export default class Component {
	_currentWidget?: Widget;
	_buildProps: buildProps | any;
	_data: Record<string, any> = {};

	constructor(props: buildProps | any){
		components.push(this);
	}

	get _beforeInit() : () => any {
		return () => {
			for(let i in this){
				if(this[i] instanceof Ref){
					this.ref(i, (this[i] as any).value);
				}
			}
		};
	}
	set _beforeInit(value: any){}
	
	initState(props: buildProps | any){}

	build(props: buildProps | any){
		return new Widget({});
	}

	afterBuild(props: buildProps | any){}

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

	get make() : (props: buildProps | any) => Widget {
		return (props: buildProps | any = null) => makeComponent(this, props);
	}
	set make(value: any){}

	update(){
		if(this._currentWidget) {
			let parent = this._currentWidget.parent(true);
			this._currentWidget.remove();
			let newWidget = makeComponent(this, this._buildProps);
			if(parent) newWidget.to(parent);
		} 
	}
}

export class Ref<T> {
	value?: T;
	constructor(value: T | null = null){
		if(value) this.value = value;
	}
}