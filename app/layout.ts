import { Component, Text, Widget } from "../client";



export default class extends Component {
	build(other: { page: any }){
		return new Widget({
			children: [
				new Text('layout'),
				other.page
			]
		});
	}
}