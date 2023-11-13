import { Component, Text, Widget } from "../../../client";
import { buildProps } from "../../../extra";



export default class extends Component {
	build(props: buildProps){
		return new Widget({
			children: [
				new Text('No double Layouts!'),
				props.page!
			]
		})
	}
}