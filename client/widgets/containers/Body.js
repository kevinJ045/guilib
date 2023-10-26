;
import Widget, { AssemblyWidget } from "../main/Widget.js";
import getDefaults from "../../utils/options.js";

function Body(options){
	if(options.child) Body.add(options.child);
	if(options.children) options.children.forEach(f => Body.add(f));
	return Body;
}

AssemblyWidget(Body, $('body')[0]);

export default Body;