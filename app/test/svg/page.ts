import { Component, Image, Link, Text, Widget } from "../../../client";
import { buildProps, mergeOptions, options } from "../../../client/extra";
import { SVG } from "../../../client/svg";
import "../../../styles/main.scss";

export default class extends Component {
	build({ route }: buildProps) {
		let svg = SVG.fromXML(`<svg height="210" width="400"><path fill="#09D0D0" d="M150 0 L75 200 L225 200 Z" /></svg>`);
		
		return new Widget({
			children: [
				new SVG({
					width: 400,
					height: 210,
					path: '#09D0D0|M150 0 L75 200 L225 200 Z'
				}),
				svg
			]
		});
	}
}
