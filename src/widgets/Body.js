import $ from "jquery";
import Widget, { AssemblyWidget } from "./Widget.js";
import getDefaults from "../utils/options.js";

function Body(options){
	Body.add(options.child);
	return Body;
}

AssemblyWidget(Body, $('body')[0]);

console.log([Body]);

export default Body;