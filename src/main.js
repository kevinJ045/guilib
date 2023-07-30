import { Body, Button, Component, Link, Page, Tag, Toolbar, View, createApp } from "./index.js";
import { findEl } from "./utils/elman.js";

let app = createApp({
	el: Body.raw()[0],
	routes: [
		{
			path: '/',
			component: new (class H extends Component{
				_onBuild(props, { $body }){
					return new Page({
						body: $body,
						children: [
							new Button('hi', {
								style: {
									'--f7-button-text-color': 'black'
								}
							}),
							new Tag({
								title: "hello",
								type: 'outline',
								close: (a) => a.remove()
							})
						]
					})
				}
			})()
		}
	]
}, () => {
	const v = new View({
		type: 'view-main'
	});
	Body.add(v);
	return v.raw()[0]
});