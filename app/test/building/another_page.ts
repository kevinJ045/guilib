import { Component, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class AnotherPage extends Component {
	build({ route, embedded }: buildProps) {
		console.log(embedded);
		return new Widget({ children: [new Text({text: 'A text from another component'})] });
	}
}
