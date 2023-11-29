import * as extra from "../extra";
import * as html from "../html";
import * as widgets from "../index";
import * as svg from "../svg";
import Dom from "../utils/dom";

class Rayous {
	extra = extra;
	html = html;
	widgets = widgets;
	svg = svg;
	dom(element: string | HTMLElement, classes?: string | null, attributes?: string | null){
		return new Dom(element, classes, attributes);
	}
}

return new Rayous;