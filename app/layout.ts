import { Component, Link, List, ListItem, Text, Widget } from "../client";
import { buildProps } from "../extra";



export default class extends Component {
	build(props: buildProps){
		return new Widget({
			children: [
				new List({
					class: 'navbar',
					style: {
						listStyle: 'none',
						display: 'flex',
						margin: 0,
						padding: 0,
						gap: 20,
						overflow: 'auto',
						fontSize: '14px',
					},
					items: props.router.paths.map(item => item.pathname),
					template(path: string){
						return new ListItem({
							title: new Link({
								text: path,
								url: path.replace(/\:(\w+)/g, "$1")
							})
						});
					}
				}),
				props.page!
			]
		});
	}
}