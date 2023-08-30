import { findEl } from "./utils/elman";
import Widget from "./widgets/main/Widget.ts";

let body = Widget.from(document.body);

let wid = new Widget({
	element: {
		name: 'a'
	},
	attr: {
		href: '/home/'
	}
});

wid.text('text');
wid.style = {
	color: 'red'
}

wid.to(body);