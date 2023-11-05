import { Component, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Text('Page not found')
			]
		});
	}
}
