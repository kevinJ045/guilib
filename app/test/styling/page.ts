import { Component, Image, Link, Text, Widget } from "../../../client";
import { Style, buildProps, mergeOptions, options } from "../../../client/extra";
import { ComponentStyles } from "../../../client/widgets/main/Component";
import "../../../styles/main.scss";

export default class extends Component {

	styles = new ComponentStyles({
		title: {
			background: 'black'
		}
	});

	static bodyClass = "body-class";

	build({ route }: buildProps) {

		setTimeout(() => this.styles.change('title', { background: 'white', color: 'black' }), 1000);
		
		return new Widget({
			children: [
				new Text('Hello', {
					style: this.getStyle('title')!.extends({
						fontSize: '24px'
					}),
					onMount(){
						console.log(this.style);
					}
				})
			]
		});
	}
}
