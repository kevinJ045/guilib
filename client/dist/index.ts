import * as extra from "../extra";
import * as html from "../html";
import * as widgets from "../index";
import * as svg from "../svg";
import Dom from "../utils/dom";
import { WidgetList } from "../widgets/_ghost/WidgetProps";

class Rayous {
	extra = extra;
	html = html;
	widgets = widgets;
	svg = svg;
	dom(element: string | HTMLElement, classes?: string | null, attributes?: string | null){
		return new Dom(element, classes, attributes);
	}
	find(selector: string, returnOne: boolean = false){
		let all = new Dom(selector);
		// @ts-ignore
		let widgets = all.elements.map(el => el.GUIWIDGET);
		return returnOne && widgets.length == 1 ? widgets[0] : WidgetList.from(widgets);
	}
}

// @ts-ignore
return new Rayous;