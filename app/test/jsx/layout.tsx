import { Component, Widget } from "../../../client";
import { React } from "../../../react";



export default class extends Component {

	build(props: any) {

		return new Widget({
			children: [
				<div>Text From Layout tsx</div>,
				props.page
			]
		});
	}
}