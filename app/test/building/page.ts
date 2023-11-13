import { Component, Link, Text, Widget } from "../../../client";
import { buildComponent, buildProps } from "../../../client/extra";
import "../../../styles/main.scss";
import AnotherPage from "./another_page";

export default class extends Component {

	build(props: buildProps) : Widget {
		return new Widget({
			children: [
				new Text('From this component'),
				AnotherPage.buildFor(this, props.wrap!({ embedded: true }))
			]
		});
	}

}
