import Widget from "../widgets/main/Widget";

function isPosition(pos: string){
	return pos == "absolute" 
		|| pos == "relative" 
		|| pos == "static"
		|| pos == "fixed"
		|| pos == "inherit"
		|| pos == "sticky";
}

function isWidget(thing: any){
	return thing instanceof Widget;
}

function isHTMLElement(thing: any){
	return thing instanceof HTMLElement;
}

export {
	isPosition,
	isWidget,
	isHTMLElement
}