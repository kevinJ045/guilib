import { Component, Link, Text, Widget } from "../../../client";
import { buildComponent, buildProps, ref } from "../../../client/extra";
import { onComponent } from "../../../client/widgets/main/Component";
import "../../../styles/main.scss";

export default class extends Component {
	@ref
	content = "Hello";

	@onComponent
	rebuild({ oldWidget } : { oldWidget: Widget }){
		oldWidget.add(new Text('Rebuilt Component'));
	}

	@onComponent
	afterBuildEnd({ widget } : { widget: Widget }){
		widget.add(new Text('Component Build Complete'));
	}

	build(props: buildProps) : Widget {
		this.rendererWidget('.container');

		let text = new Text(this.content);

		if(this.content == "Hello") setTimeout(() => this.content = "HII", 2000);

		return new Widget({
			children: [
				new Widget({
					class: 'container',
					children: [
						text
					]
				})
			]
		});
	}

}
