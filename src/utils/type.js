import Widget from "../widgets/Widget.js";

function isPosition(pos){
	return pos == "absolute" 
		|| pos == "relative" 
		|| pos == "static"
		|| pos == "fixed"
		|| pos == "inherit"
		|| pos == "sticky";
}

function isWidget(thing){
	return thing instanceof Widget;
}

function isHTMLElement(thing){
	return thing instanceof HTMLElement;
}

export {
	isPosition,
	isWidget,
	isHTMLElement
}