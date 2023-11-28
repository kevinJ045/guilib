import { Component, Link, Text, Widget } from "../../../client";
import { buildProps, mergeOptions, options } from "../../../client/extra";
import "../../../styles/main.scss";


export default class extends Component {
	build({ route }: buildProps) {
		return new Widget({ children: [] });
	}
}
