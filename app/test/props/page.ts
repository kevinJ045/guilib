import { Button, Component, Image, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.tail.css";

export default class extends Component {
	build(props: buildProps) {
		console.log(props);
		return new Widget({
			class: 'flex flex-col items-center w-screen py-10',
			children: [
				new Text("Props", { class: "w-full text-center text-3xl font-bold" }),
				new Text("Check your Console", { class: "w-full text-center" })
			]
		});
	}
	static layouts = false;
}