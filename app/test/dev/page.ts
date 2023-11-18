import { Component, Link, Text, Widget } from "../../../client";
import { buildComponent, buildProps } from "../../../client/extra";
import { console } from "../../../dev";
import "../../../styles/main.scss";

export default class extends Component {

	build(props: buildProps) : Widget {
		console.log('sjsj');
		return new Widget({
			children: [
				new Text('From this component')
			]
		});
	}

}
