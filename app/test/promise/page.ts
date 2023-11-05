import { Component, Link, List, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps) {
		const text = new Text({text: new Promise((resolve) => setTimeout(() => resolve('Text Appeared!'), 1000))});

		const list = new List({
			items: new Promise((resolve) => setTimeout(() => resolve([{title: 'item1'},{title: 'item2'}]), 2000))
		});

		return new Widget({ children: [text, list] });
	}
	static title = "Promise Example!";
}
