import { Body, Button, Style, ButtonSegment, Component, DataTable, IconButton, IconLink, Icons, LayoutBuilder, Link, Page, Sidebar, Swiper, SwiperWrapper, Tab, TabBar, TabsWrapper, Tag, Text, Toolbar, View, Widget, createApp, toast, BreadCrumbs, List, ListItem, MessageBar, createPopover, createPopup, RangeSlider } from "./index.js";
import { findEl } from "./utils/elman.js";

const r = new Widget({class: ''});
Body.add(r);

const d = new Sidebar({
	type: 'panel-init panel-main',
	children: [
		new List({
			type: 'menu-list inset',
			children: [
				new ListItem({
					title: 'ha',
					link: true,
					icon: Icons.home,
					type: 'item-selected'
				}),
				new ListItem({
					title: 'hello',
					link: true,
					icon: Icons.add
				})
			]
		})
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
						ptr: true,
						// ptrMousewheel: true,
						toolbar: new MessageBar({
							button: new Link('Gee'),
							prefix: new Link('Dee'),
						}),
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
											new BreadCrumbs({
												children: [
													new Link('Home'),
													new Link('Phones', {
														onClick(){
															createPopover({
																target: this,
																child: new List({
																	items: [{
																		title: 'Android',
																		link: true
																	},{
																		title: 'IOS',
																		link: true
																	}]
																})
															});
														}
													}),
												]
											}),
											new Widget({
												id: 'n',
												style: new Style('a')
													.setWidth('100px')
													.setHeight('100px')
													.setBackground('red')
											}),
											new Widget({
												class: 'ball',
												style: new Style('b')
													.setWidth('20px')
													.setHeight('20px')
													.setBackground('red')
													.setBorderRadius('20px')
											}),
											new Widget({
												class: 'ball',
												style: new Style('b')
											}),
											new ButtonSegment({
												children: [
													new Button('hi', {
														style: {
															'--f7-button-text-color': 'black'
														},
														icon: Icons.add,
														onClick(){
															createPopup({
																swiper: true,
																push: true,
																build($body){
																	return new Page({
																		body: $body,
																		children: [
																			new Text('hi')
																		]
																	});
																}
															})
														}
													}),
													new IconButton(Icons.settings, {
														url: 'settings'
													}),
												]
											}),
											new RangeSlider(),
											new RangeSlider({
												label: true,
												vertical: true,
												size: {height: 160}
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

				_after(props, { $widget }){
					setTimeout(() => {
						$widget.find('#n').animation = {
							translateX: "100px", 
							rotate: "180deg", 
							scale: 1.5,
							opacity: 0.5, 
							easing: "easeInOutCirc"
						}
						$widget.animate('.ball', {
							translateX: 270,
							delay: `stagger(100)`
						});
					}, 100);
				}
			})()
		},
		{
			path: '/settings',
			component: new (class H extends Component{
				
				_onBuild(props, { $body, size }){
					return new Page({
						body: $body,
						children: [	
							new LayoutBuilder({
								queries: {
									'vw > 400': [
										new Text('wide')
									],
									'vw < 400': [
										new Text('not wide')
									]
								}
							})
						]
					});
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