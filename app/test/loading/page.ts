import { Button, Component, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Text('Done!')
			]
		});
	}
	static scripts = ['https://scriff.onrender.com/app/lib/js/at.js']
}
