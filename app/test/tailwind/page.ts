import { Component, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import { Button } from "../../../components";
import "../../../styles/main.scss";
import "../../../styles/main.tail.css";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Text('Text!', { class: 'text-3xl font-bold underline' })
			]
		});
	}
}
