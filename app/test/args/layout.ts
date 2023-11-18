import { Component, Link, Text, Widget } from "../../../client";
import { buildComponent, buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {

	build(props: buildProps) : Widget {
		return new Widget({
			children: [
				props.page!
			]
		});
	}

	static beforeBuildStart(props: buildProps){
		props
		.addArgument!('arg1', {arg: 'arg2'});
	}
}
