import { Button, Checkbox, Component, InputWrapper, Link, List, Text, Widget } from "../../client";
import { CheckboxController, EntryController } from "../../client/extra";
import "../../styles/main.scss";


export default class extends Component {
	c?: EntryController;
	cc?: CheckboxController;

	build({ route: {} }){
		const c = this.c = new EntryController('sss');
		const cc = this.cc = new CheckboxController(true);
		return new Widget({ 
			children: [
				new Checkbox({
					controller: cc
				}),
				new Button('Hi', {
					onClick(){
						c.set('Hello');
						console.log('hi');
					}
				}),
				new InputWrapper({
					title: 'Hello',
					controller: this.c,
					onTextInput(){
						console.log(c.get());
					}
				}),
				new Link('fff', { url: '/' }),
				new List({
					id: 'list',
					items: [
						{
							title: 'ss'
						}
					]
				})
			] 
		})
	}

	afterBuild({ page } : { page: Widget }){
		setTimeout(() => (page.find('#list') as List).updateList({ items: [ { title: this.c! }, { title: this.cc! } ] }), 1000);
	}
}