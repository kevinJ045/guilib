import { Component, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import { Button } from "../../../components";
import "../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			style: {
				margin: '10px'
			},
			children: [
				new Text('Buttons', { class: 'title' }),
				new Widget({
					class: 'showcase',
					children: [
						new Button('Normal'),
						new Button('Outlined', {
							variant: 'outline'
						}),
						new Button('Mini', {
							variant: 'mini'
						}),
						new Button('Not Round', {
							variant: 'nround'
						}),
						new Button('Transparent', {
							variant: 'transparent'
						}),
						new Button('Disabled', {
							variant: 'disabled'
						}),
					]
				})
			]
		});
	}
	static layouts = false;
}