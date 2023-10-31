import { Component, InputWrapper, Row, Selectbox, Text, Widget } from "../../../client";
import { SelectController } from "../../../client/extra";



export default class extends Component {
	build(props: any): Widget {
		let c = new SelectController({ title: 'bbb', value: 'bsbsbs' });
		return new Widget({
			children: [
				new Selectbox({
					controller: c,
					selectableOptions: [
						{
							title: 'ksk',
							value: 'sksks'
						},{
							title: 'bbb',
							value: 'bsbsbs'
						}
					]
				})
			]
		});
	}
}