import $ from "jquery";
import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

function cq(w, h, pw, ph, query){
	const operators = ['>', '<', '>=', '<=', '!=', '=='];
  const tokens = query.split(/(\s+|\|\||&&)/);

  let currentOperator = '&&';
  let currentCondition = true;
  let overallResult = true;

  for (const token of tokens) {
    if (token.trim() === '||' || token.trim() === '&&') {
      currentOperator = token.trim();
      continue;
    }

    const [lhs, op, rhs] = token.trim().split(' ');

    let value;
    switch (lhs) {
      case 'w':
        value = w;
        break;
      case 'h':
        value = h;
        break;
      case 'pw':
        value = pw;
        break;
      case 'ph':
        value = ph;
        break;
      default:
        value = NaN;
        break;
    }

    const numRhs = Number(rhs);
    if (isNaN(value) || isNaN(numRhs) || !operators.includes(op)) {
      throw new Error(`Invalid query: ${query}`);
    }

    switch (op) {
      case '>':
        currentCondition = value > numRhs;
        break;
      case '<':
        currentCondition = value < numRhs;
        break;
      case '>=':
        currentCondition = value >= numRhs;
        break;
      case '<=':
        currentCondition = value <= numRhs;
        break;
      case '!=':
        currentCondition = value !== numRhs;
        break;
      case '==':
        currentCondition = value === numRhs;
        break;
      default:
        currentCondition = false;
        break;
    }

    if (currentOperator === '&&') {
      overallResult = overallResult && currentCondition;
    } else if (currentOperator === '||') {
      overallResult = overallResult || currentCondition;
    }
  }

  return overallResult;
}

function checkQuery(w, h, pw, ph, vw, vh, query) {
  const cases = [];
	if(query.match(/\|\||&&/)){
		cases.push(...(query.split(/\|\||&&/).map(c => ({case: c, true: false}))));
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

const handleResize = (widget, options) => {
	if(widget.handlingResize) return;
	widget.handlingResize = true;
	const parentWidth = widget.parent().width();
	const parentHeight = widget.parent().height();

	widget.emit('resize', { width: widget.width(), height: widget.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });

	if (options.queries) {
		const prevChildren = widget.children().map(child => findEl(child.id));
		widget.remove('*');
		const matchedQuery = Object.entries(options.queries).find(([query, builderFn]) => {
			return checkQuery(widget.width(), widget.height(), parentWidth, parentHeight, window.innerWidth, window.innerHeight, query);
		});

		if (matchedQuery) {
			const [query, builderFn] = matchedQuery;
			const newChildren = typeof builderFn == "function" ? builderFn(prevChildren.map(child => child.GUIWIDGET)) : builderFn;
			if (newChildren instanceof Widget) {
				newChildren.forEach(child => widget.add(child));
			} else if (Array.isArray(newChildren)) {
				newChildren.forEach((child) => widget.add(child));
			}
		}
	}

	widget.emit('layout:rebuild', { width: widget.width(), height: widget.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
	delete widget.handlingResize;
};

class LayoutBuilder extends Widget {
	constructor(selectedOptions) {
		const options = {
			...(getDefaults({ element: { name: 'div' }, class: 'layout-builder' })),
			...selectedOptions,
		};
		super(options);
	}

	_onMount(parent, app){
		super._onMount(parent, app);
		
		$(window).on('resize', () => handleResize(this, this.options));
		handleResize(this, this.options);
	}
}

export default LayoutBuilder;