import { Component, Button, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.scss";
import "../../../styles/main.tail.css";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			class: 'space-y-2 p-[20px]',
			children: [
				new Text('Text!', { class: 'text-3xl font-bold underline' }),
				new Button('Click Me!', {
					class: "font-bold text-[black] transition-[.5s] rounded-md py-[8px] px-[16px] bg-[#09D0D0] hover:bg-[#cc44aa]"
				})
			]
		});
	}
}
