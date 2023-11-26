import { Component, Link, Text, Widget } from "../../../client";
import { asyncComponent, buildComponent, buildProps } from "../../../client/extra";
import "../../../styles/main.scss";

function someTask() : Promise<Widget> {
	return new Promise((r) => {
		setTimeout(() => {
			r(new Text('Loaded async data'));
		}, 500);
	});
}

@asyncComponent({
	loading: () => new Text('loading')
})
export default class Page extends Component {

	async build(props: buildProps) {
		let something = await someTask();
		return new Widget({
			children: [
				something
			]
		});
	}

}