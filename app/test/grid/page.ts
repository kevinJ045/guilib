import { Component, Grid, LayoutBuilder, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {
	build({ route }: buildProps) {
		return new Widget({
			children: [
				new Grid({
					items: ['a', 'b', 'c', 'd', 'e', 'f'],
					grid: {
						columns: 4,
						margin: {
							x: 20,
							y: 20
						},
						breakAt: {
							700: 3,
							400: {
								columns: 2,
								margin: {
									x: 10,
									y: 10
								}
							}
						}
					},
					template(item: string){
						return new Text(item);
					}
				})
			]
		});
	}
}
