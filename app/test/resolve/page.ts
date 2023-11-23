import { Button, Component, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import { getRootPath, resolve } from "../../../server/client";
import "../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Text('Done!')
			]
		});
	}
}
