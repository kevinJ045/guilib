import { Component, LayoutBuilder, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {
	build({ route }: buildProps) {
		return new Widget({
			children: [
				new LayoutBuilder({
					queries: {
						'pw > 700': () => {
							return new Text('more');
						}
					}
				})
			]
		});
	}
}
