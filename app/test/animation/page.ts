import { Component, Text, Widget } from "../../../client";
import { Style, buildProps } from "../../../client/extra";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Widget({
					style: new Style('square', {
						width: '10px',
						height: '10px',
						background: 'red'
					}),
					animation: {
						translateX: 250,
						scale: 2,
						rotate: '1turn',
						duration: 2000
					}
				}),
				new Widget({
					style: new Style('square'),
					animation: {
						width: 200
					}
				}),
				new Widget({
					style: new Style('square'),
					class: 'sss'
				}),
				new Widget({
					style: new Style('square'),
					class: 'sss'
				}),
			]
		});
	}

	afterBuild(props: buildProps): void {
		Widget.animateWidgets({
			width: 40,
			height: 40,
			delay: 'stagger(200, {"direction": "reverse"})'
		}, ...props.page!.findAll('.sss'));
	}
}
