import Style from "./components/Style";
import { findEl } from "./utils/elman";
import Text from "./widgets/main/Text";
import Widget from "./widgets/main/Widget";

let body = Widget.from(document.body);

let wid = new Widget({
	element: {
		name: 'a'
	},
	attr: {
		href: '/home/'
	}
});

wid.text('Text');
wid.style = new Style({
	color: 'red',
	fontSize: Style.px(22)
})

body.add(new Text('Hi', {
	style: {
		color: 'blue'
	}
}));

wid.to(body);