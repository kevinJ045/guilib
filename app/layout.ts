import { Component, Text, Widget } from "../src";



export default class extends Component {
	build(props: any, other: { page: any }){
		return new Widget({
			children: [
				new Text('layout'),
				other.page
			]
		});
	}
}