import { Body, Button, ButtonSegment, Component, DataTable, IconButton, IconLink, Icons, Link, LinkButton, Page, Sidebar, Swiper, SwiperWrapper, Tab, TabBar, TabsWrapper, Tag, Text, Toolbar, View, Widget, createApp, toast } from "./index.js";
import { findEl } from "./utils/elman.js";

const r = new Widget({class: ''});
Body.add(r);

const d = new Sidebar({
	type: 'panel-init panel-main',
	children: [
		new Text('hii'),
	]
});
r.add(d);
let app = createApp({
	el: r.raw()[0],
	routes: [
		{
			path: '/',
			component: new (class H extends Component{
				
				_onBuild(props, { $body }){
					toast('h', true);
					return new Page({
						body: $body,
						children: [
							new TabBar({
								children: [
									new IconLink(Icons.home, {
										url: 'ui.tab:#nooga',
										type: 'tab-link-active'
									}),
									new Link('Others', {
										url: 'ui.tab:#booga',
										icon: Icons.add
									})
								],
								// type: ['tabbar', 'toolbar-top']
							}),
							new TabsWrapper({
								children: [
									new Tab({
										id: 'nooga',
										active: true,
										children: [
											new ButtonSegment({
												children: [
													new Button('hi', {
														style: {
															'--f7-button-text-color': 'black'
														}
													}),
													new LinkButton('Settings', {
														icon: Icons.settings,
														url: 'settings'
													}),
													new IconButton(Icons.settings, {
														url: 'settings'
													}),
												]
											}),
											new Tag({
												title: "hello",
												color: 'blue',
												type: 'outline',
												close: (a) => a.remove()
											}),
											new DataTable({
												header: {
													actions: [
														Icons.add
													],
													selected: [
														Icons.close
													]
												},
												checkboxes: true,
												statelessData: [
													{ Dessert: "Frozen yogurt", Calories: 159, "Fat (g)": 6.0, Carbs: 24, "Protein (g)": 4.0, Comment: "Super tasty" },
												],
												type: 'card'
											}),
											new SwiperWrapper({
												children: [
													new Swiper({
														children: [ new Text('hi') ]
													}),
													new Swiper({
														children: [ new Text('hello') ]
													})
												]
											})
										]
									}),
									new Tab({
										id: 'booga',
										children: [
											new Text('Hello')
										]
									})
								]
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
	r.add(v);
	return v.raw()[0]
});