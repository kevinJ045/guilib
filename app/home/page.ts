import { Button, Component, EntryController, InputWrapper, Link, List, Text, Widget } from "../../client";
import "../../styles/main.scss";


export default class extends Component {
	build({ route: {} }){
		let c = new EntryController('sss');
		return new Widget({ 
			children: [
				new Button('Hi', {
					onClick(){
						console.log('hi')
					}
				}),
				new InputWrapper({
					title: 'Hello',
					controller: c
				}),
				new Link('fff', { url: '/' }),
				new List({
					id: 'list',
					items: [
						{
							title: 'hi'
						}
					]
				})
			] 
		})
	}

	afterBuild({ page } : { page: Widget }){
		setTimeout(() => (page.find('#list') as List).updateList({ items: [ { title: 'Hello' } ] }), 1000);
	}
}