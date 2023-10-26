import { Button, Component, Link, List, Text, Widget } from "../../client";
import "../../styles/main.scss";


export default class extends Component {
	build({ route: {} }){
		return new Widget({ 
			children: [
				new Button('Hi', {
					onClick(){
						console.log('hi')
					}
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