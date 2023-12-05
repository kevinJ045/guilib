import { Button, Component, Image, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../extra";
import { React } from "../../../react";

import "../../../styles/main.scss";

export default class extends Component {

	build({ route }: buildProps) {

		return new Widget({
			children: [
				<div>Hello</div>,
				<Text>
					This is jsx!
					<br />
					<div>
						<Button onClick={() => alert('Yeah!')}>Cool!</Button>
					</div>
				</Text>
			]
		});
	}
}
