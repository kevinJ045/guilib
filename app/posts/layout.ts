import { Component, Text, Widget } from "../../src";



export default class extends Component {
	build(other: { page: any }){
		return new Widget({
			children: [
				new Text('layout2'),
				other.page
			]
		});
	}
}