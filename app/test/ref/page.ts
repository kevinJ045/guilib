import { Button, Component, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import { Ref, ref, typeref } from "../../../client/widgets/main/Component";
import "../../../styles/main.scss";

export default class extends Component {
	text: string = "Hello";
	textWithValue: string = "";
	textRef: string | Ref<string> = new Ref('Hi');

	@ref refDecorator: string = "Hiii!";

	@typeref('string') typerefDecorator: string = "Yo!";

	initState(props: buildProps){
		this.ref('text');
		this.ref('textWithValue', 'Sup');
	}
	build(props: buildProps) {
		return new Widget({
			children: [
				new Text(this.text),
				new Text(this.textRef),
				new Text(this.textWithValue),
				new Text(this.refDecorator),
				new Text(this.typerefDecorator),
				new Button('Stop the hello', {
					onClick: () => {
						this.text = 'not hello';
						this.textWithValue = 'stopped';
						this.textRef = 'Fine!';
						this.refDecorator = 'Suure!';
						this.typerefDecorator = 'Done!';
					}
				})
			]
		});
	}
}
