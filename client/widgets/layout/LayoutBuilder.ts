;
import Widget from "../main/Widget.js";
import getDefaults, { options } from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

function checkQuery(w: any, h: any, pw: any, ph: any, vw: any, vh: any, query: any) {
  const cases = [];
	if(query.match(/\|\||&&/)){
		cases.push(...(query.split(/\|\||&&/).map((c: any) => ({case: c, true: false}))));
	} else {
		cases.push({case: query, true: false});
	}

	let overallResult = true;
	cases.forEach(c => {
		let query = c.case.trim();
		let match = query.match(/(w|h|pw|ph|vw|vh)(\s+|)(==|!=|>|<|>=|<=)(\s+|)([0-9]+)/);
		if(match){
			overallResult = overallResult && eval(query);
		} else {
			throw new Error(`Invalid LayoutBuilder query: ${query}`);
		}
	});

	return overallResult;
}

const handleResize = (widget: any, options: any) => {
	if(widget.handlingResize) return;
	widget.handlingResize = true;
	const parentWidth = widget.parent().width();
	const parentHeight = widget.parent().height();

	widget.emit('resize', { width: widget.width(), height: widget.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });

	if (options.queries) {
		const prevChildren = widget.children().map((child: any) => findEl(child.id));
		widget.remove('*');
		const matchedQuery = Object.entries(options.queries).find(([query, builderFn]) => {
			return checkQuery(widget.width(), widget.height(), parentWidth, parentHeight, window.innerWidth, window.innerHeight, query);
		});

		if (matchedQuery) {
			const [query, builderFn] = matchedQuery;
			const newChildren = typeof builderFn == "function" ? builderFn(prevChildren.map((child: any) => child.GUIWIDGET)) : builderFn;
			if (newChildren instanceof Widget) {
				(newChildren as any).forEach((child: any) => widget.add(child));
			} else if (Array.isArray(newChildren)) {
				newChildren.forEach((child) => widget.add(child));
			}
		}
	}

	widget.emit('layout:rebuild', { width: widget.width(), height: widget.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
	delete widget.handlingResize;
};

class LayoutBuilder extends Widget {
	constructor(selectedOptions: options) {
		const options = {
			...(getDefaults({ element: { name: 'div' }, class: 'layout-builder' })),
			...selectedOptions,
		};
		super(options);
	}

	_onMount(parent: Widget){
		super._onMount(parent);
		
		$(window).on('resize', () => handleResize(this, this.options));
		handleResize(this, this.options);
	}
}

export default LayoutBuilder;