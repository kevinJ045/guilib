import { Component, Link, List, ListItem, Space, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import { ArrayController } from "../../../client/extra";
import "../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps) {
		const c = new ArrayController<string>([]);

		const list = new List<string>({
			items: c,
			template(item){
				return new ListItem({
					title: item
				})
			}
		});

		// list._stripController();

		setTimeout(() => {
			c.push('ss', 'sss');
		}, 1000);

		list.on('list:update', () => {
			list
			.removeItems('ss')
			if(!list.hasItem('ssb')){
				list.addItem('ssb');
			}
		});

		return new Widget({ children: [new Space({ height: '10px' }), list] });
	}
	static title = "Promise Example!";
}
