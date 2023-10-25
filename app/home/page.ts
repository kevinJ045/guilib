import { Component, Text, Widget } from "../../src";


export default class extends Component {
	build(props: {}, { route: {} }){
		return new Widget({ children: [ new Text('Hi') ] })
	}
}