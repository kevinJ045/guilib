import { Component, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import { Button, Card, Alert } from "../../../components";
import "../../../styles/main.tail.css";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			style: {
				margin: '10px'
			},
			children: [
				new Text('Buttons', { class: 'font-bold' }),
				new Widget({
					class: 'p-4',
					children: [
						new Button('Normal'),
						new Button('Neutral', {
							variant: 'neutral'
						}),
						new Button('Primary', {
							variant: 'primary'
						}),
						new Button('Secondary', {
							variant: 'secondary'
						}),
						new Button('Ghost', {
							variant: 'ghost'
						}),
						new Button('Link', {
							variant: 'link'
						}),
					]
				}),
				new Text('Card', { class: 'font-bold' }),
				new Widget({
					class: 'p-4 w-full',
					children: [
						new Card({
							class: 'bg-base-200',
							title: 'Hello',
							image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
							actionsClass: 'justify-end',
							content: [
								new Text('Heyy!')
							],
							actions: [
								new Button('Next', {
									variant: 'secondary'
								})
							]
						})
					]
				}),
				new Text('Alert', { class: 'font-bold' }),
				new Widget({
					class: 'p-4 w-full',
					children: [
						new Alert({
							title: "ssjjss"
						})
					]
				})
			]
		});
	}
	static layouts = false;
}