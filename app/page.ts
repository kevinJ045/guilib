import { Component, Text, Widget } from "../src";
import "../styles/main.scss";


export default class extends Component {
	build({ route: {} }){
		return new Widget({ children: [ new Text('/ folder') ] })
	}
}