import $ from "jquery";
import Widget, { AssemblyWidget } from "../main/Widget.js";
import getDefaults from "../../utils/options.js";

function Body(options){
	Body.add(options.child);
	return Body;
}

AssemblyWidget(Body, $('body')[0]);

export default Body;