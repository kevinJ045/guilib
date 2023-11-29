import { findEl } from "./utils/elman";
import { mergeOptions, options } from "./utils/options";
import Widget, { widget } from "./widgets/main/Widget";

type path = string | (string | null)[] | Record<string, string | null | (string | null)[]>;
export interface SVGOptions extends options {}

export interface SVGPathOptions extends SVGOptions {
	d?: string
}

export interface SVGGroupOptions extends SVGOptions {
	path?: path
}

export interface SVGOptionsBase extends SVGOptions {
	path?: path,
	width?: number | string,
	height?: number | string
}

export class SVGPath extends Widget<SVGPathOptions> {
	constructor(options: SVGPathOptions){
		super(mergeOptions({
			element: { name: 'path' },
			class: '',
			_setters: ['d']
		}, options));
	}

	set d(path: string){
		let fill = "";
		let stroke = "";
		let strokeWidth = "";
		let d = path;
		
		if(path.match(/\#([0-91-f]{6})\|/)){
			d = path.split('|')[1]
			fill = path.split('|')[0]
		}

		this.attr({d, stroke, 'stroke-width': strokeWidth, fill });
		this.html(this.html()+'\n');
	}
}

function _setSvgPaths(svg: SVG | SVGGroup, paths: path){
	const _p = (paths: path) => {
		if(Array.isArray(paths)){
			paths.forEach((path) => {
				if(typeof path == "string"){
					svg.add(new SVGPath({ d: path }));
				}
			});
		} else if(typeof paths == "object") {
			for(let i in paths){
				let name = i;
				let group = new SVGGroup({
					path: paths[i] as path,
					name
				});
				svg.add(group);
			}
		} else if(typeof paths == "string") {
			svg.add(new SVGPath({ d: paths }));
		}
	}
	_p(paths);
}

class SVGBare<T extends SVGOptions = SVGOptions> extends Widget<T> {

	constructor(options: T){
		super(mergeOptions({
			class: '',
			_setters: ['path']
		} as T, options));
	}

	set path(path: path){
		_setSvgPaths(this, path);
	}

}

export class SVG extends SVGBare<SVGOptionsBase> {

	constructor(options: SVGOptionsBase){
		super(mergeOptions({
			element: { name: 'svg' }
		}, options));

		if(this.options.height) this.attr({ height: this.options.height });
		if(this.options.width) this.attr({ width: this.options.width });
	}

	_onMount(parent: widget): void {
		findEl(this.id!).at(0).outerHTML += ' ';
	}

	add(widget: Widget){
		super.add(widget);
		return this;
	}

	static fromXML(xml: string){
		let container = document.createElement('div');
		container.innerHTML = xml;
		let svgWidget = new SVG({});
		let svg = findEl(svgWidget.id!).at(0) as SVGElement;
		let svgTemplate = container.querySelector('svg');

		if(svgTemplate){
			Array.from(svgTemplate.attributes)
			.forEach(attr => {
				svg.attributes.setNamedItem(attr.cloneNode(true) as Attr);
			});
			svg.innerHTML = svgTemplate?.innerHTML;
		}

		return svgWidget;
	}
}

export class SVGGroup extends SVGBare<SVGGroupOptions> {
	constructor(options: SVGGroupOptions){
		super(mergeOptions({
			element: { name: 'group' },
		}, options));
	}
}