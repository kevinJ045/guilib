import styles from "./style/main.scss";

import $ from "jquery";

import Widget from "./widgets/Widget.js";
import Body from "./widgets/Body.js";
import Button from "./widgets/Button.js";

const f = new Body({
	child: new Button({
		onClick(){
			console.log('hi')
		},
		onHold(){
			console.log('held')
		}
	})
});

f.toHTMLElement($("body")[0]);


console.log(f.children());


