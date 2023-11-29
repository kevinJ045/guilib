import { Component, Image, Link, Text, Widget } from "../../../client";
import { buildProps, mergeOptions, options } from "../../../client/extra";
import "../../../styles/main.scss";
// @ts-ignore
import image from "../../../assets/logo.png";

export default class extends Component {
	build({ route }: buildProps) {
		return new Widget({
			children: [
				new Image(image)
			]
		});
	}
}
