import { Component, Link, Text, Widget } from "../client";
import { buildProps } from "../client/extra";
import { resolve } from "../server/client";
import "../styles/main.scss";
import "../styles/some.css";

export default class extends Component {
	build({ route, router }: buildProps) {
		const text = new Text({text: ''});

		setTimeout(() => (text.options as any).text = 'route:' + route.path, 1000);

		const link = new Link('Hi');

		setTimeout(() => link.url = resolve("/home"), 1000);

		return new Widget({ children: [text, link] });
	}
}
