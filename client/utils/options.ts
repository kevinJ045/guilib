import Style from "../components/Style";
import { widget } from "../widgets/_ghost/WidgetProps";
import { attr, attrNullable, attrOptions } from "./elman";

class options {
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
};

export { options };
export default function getDefaults(opts: options){
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