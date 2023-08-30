import { findEl } from "../../utils/elman.js";
import { isHTMLElement } from "../../utils/type.js";
import Widget from "../main/Widget.js";


let $1$app = {};

function createPopover(options = {}){
	if(!options.target) return;
	if(!options.child) options.child = new Widget();

	let p = $1$app.popover.create({
		content: `<div class="popover my-popover"><div class="popover-inner"></div></div>`,
		on: {
			open($popover){
				options.child.to($popover.$el.find('.popover-inner')[0]);
			},
			close(){
				options.child.emit('popover:close', options);
			}
		}
	});

	p.open(isHTMLElement(options.target) ? options.target : findEl(options.target.id)[0])
}

function $inject$1app(app){
	$1$app = app;
}

export { 
	createPopover,
	$inject$1app
}