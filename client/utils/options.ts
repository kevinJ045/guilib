import Style from "../components/Style";
import Store from "../data/Store";
import { widget } from "../widgets/_ghost/WidgetProps";
import { attr, attrNullable, attrOptions } from "./elman";

class options {
	id?: string;
	element?: attrOptions | null = {};
	class?: string | null = "";
	style?: Style | Record<string, any> | null = {};
	position?: attrNullable | null = {};
	size?: attrNullable | null = {};
	attr?: attr | null = {};
	props?: attr | null = {};
	children?: widget[] | [] | null = [];
	private?: boolean | null = false;
	reset?: boolean | null = false;
	value?: string | null = "";
	icon?: string | null = "";
	accepts?: boolean | null = true;
	store?: Store | null = null;
	name?: string | null = null;
	inheritStore?: boolean = false;
	events?: Record<string, Function> | null = {};
	type?: string[] | null = [];
	_setters?: string[] | null = [];
	holdDuration?: number = 1000;
	build?: Function = () => {};
	onClick?: Function = () => {};
	onHold?: Function = () => {};
	onContextmenu?: Function = () => {};
	onMouseEnter?: Function = () => {};
	onMouseMove?: Function = () => {};
	onMouseDown?: Function = () => {};
	onKeyDown?: Function = () => {};
	onKeyUp?: Function = () => {};
	onKey?: Function = () => {};
	onChange?: Function = () => {};
};

export { options };
export default function getDefaults<T>(opts: options | T){
	let defaults = {
		element: {
			name: "div",
			html: null,
			raw: null,
			selector: null
		},
		class: "widget",
		style: {},
		position: {
			type: 'default',
			centered: false,
			top: null,
			left: null,
			bottom: null,
			right: null
		},
		size: {
			width: null,
			height: null
		},
		private: false,
		reset: false,
		value: null,
		icon: null,
		children: [],
		accepts: true,
		events: {},
		type: []
	};
	return {
    ...defaults,
    ...opts,
  } as options;
}

const mergableOptions = 'class|type|_setters|children'.split('|');
const mergeSeparator: Record<string, string> = {
	class: ' '
};


export function mergeOptions(defaults: Record<string, any>, options: Record<string, any>){
	let o = {...defaults};
	for(let i in options){
		if(o[i]){
			if(typeof o[i] == typeof options[i]){
				if(typeof o[i] == 'object'){
					if(Array.isArray(o[i])){
						if(mergableOptions.includes(i)) o[i].push(...options[i]);
						else o[i] = options[i];
					} else {
						mergeOptions(o[i], options[i]);
					}
				} else if(mergableOptions.includes(i)){
					o[i] += (mergeSeparator[i] || "")+options[i];
				} else {
					o[i] = options[i];
				}
			} else {
				o[i] = options[i];
			}
		} else {
			o[i] = options[i];
		}
	}
	return o;
}