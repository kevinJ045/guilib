import { Component, Link, Text, Widget } from "../../../client";
import { buildComponent, buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps, ...args: any[]) : Widget {
		console.log(args);
		return new Widget({
			children: [
				new Text('Check the console...')
			]
		});
	}
}
