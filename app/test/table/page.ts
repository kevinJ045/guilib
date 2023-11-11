import { Button, Component, InputWrapper, Row, Selectbox, Table, Text, Widget } from "../../../client";
import { ArrayController, TableRowValue } from "../../../client/extra";
import { TableController } from "../../../client/widgets/list/Table";

interface person {
	id: any,
	name: Widget | string,
	rank: any,
	address?: string,
	inVisible?: string
}

export default class extends Component {
	build(props: any): Widget {
		let items = new TableController<person>({
			columns: ['id', 'name', 'rank'],
			items: [
				{
					id: "1234",
					name: "dude",
					rank: '1'
				}
			]
		});

		setTimeout(() => {
			items.addColumn('address');
			items.push({
				id: { type: 'th', value: "1" },
				name: new Button('ss'),
				rank: (original: any, mapped: any) => {
					console.log(original, mapped);
					return "s";
				},
				address: "Somewhere",
				inVisible: "invisible"
			});
		}, 1000);
		return new Widget({
			children: [
				new Table({
					items,
					columns: items
				})
			]
		});
	}
}