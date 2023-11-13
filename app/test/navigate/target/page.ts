import { Component, Text, Widget } from "../../../../client";
import { Ref, buildProps } from "../../../../client/extra";

export default class extends Component {
	letter = new Ref('Initial State!');
	sharableVariable = '';

	build(props: buildProps) {
		return new Widget({
			children: [
				new Text('Navigated!!'),
				new Text(this.letter),
				new Text(this.sharableVariable),
			]
		});
	}


	/**
	 * The inherit state property allows for navigation state management,
	 * for example how you can make one page's state
	 * shared to others.
	 * 
	 * If this is false, previous page states will not
	 * be inherited to this page
	 */
	static inheritState = true;
}