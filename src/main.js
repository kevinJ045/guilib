import "./style/main.scss";

import $ from "jquery";

import Widget from "./widgets/main/Widget.js";
import Body from "./widgets/containers/Body.js";
import Button, { ButtonSegment } from "./widgets/buttons/Button.js";

import Framework7 from "framework7/bundle";
import { setThemeMap } from "./theme/base.js";
import View from "./widgets/containers/View.js";
import List, { ListItem } from "./widgets/list/List.js";
import Container from "./widgets/containers/Container.js";
import Card from "./widgets/containers/Card.js";
import Text from "./widgets/main/Text.js";
import Header from "./widgets/containers/Header.js";
import Link, { IconLink } from "./widgets/main/Link.js";
import Form, { Entry, EntryController } from "./widgets/entry/Form.js";
import Icon, { Icons } from "./widgets/icons/Icon.js";
import Toggle from "./widgets/buttons/Toggle.js";
import Checkbox from "./widgets/buttons/Checkbox.js";
import Radio from "./widgets/buttons/Radio.js";
import Column from "./widgets/containers/Column.js";
import Row from "./widgets/containers/Row.js";
import Component from "./widgets/others/Component.js";
import Page from "./widgets/containers/Page.js";
import FloatingActionButton from "./widgets/buttons/FAB.js";
import SearchBar from "./widgets/entry/Searchbar.js";
import Grid from "./widgets/list/GridBuilder.js";
import SelectBox from "./widgets/entry/SelectBox.js";
import Badge from "./widgets/others/Badge.js";
import Preloader from "./widgets/loading/Preloader.js";
import Center from "./widgets/containers/Center.js";
import Sidebar from "./widgets/menus/Sidebar.js";
import Dialog from "./widgets/popup/dialog.js";
import Image from "./widgets/main/Image.js";
import { findEl } from "./utils/elman.js";

const view = new View({
	type: 'view-main'
});

view.attr('data-url', '/profile');

const sidebar = new Sidebar({
	id: 'sidemenu',
	type: 'panel-main panel-in-breakpoint',
	sidebar: {
		swipe: true
	},
	open: true,
	children: [
		new List({
			children: [
				...('Home|Terminal|Profile'.split('|').map(title => new ListItem({title, link:true, url: '/profile/'})))
			]
		}),
	]
});

const f = new Widget({
	children: [view, sidebar]
});

const list = new List();

f.toHTMLElement($("body")[0]);

console.log(f.children());

const oldHome = (props, { $h, $update, $el, $on }) => {
	let value = 10;
	const items = ['s', 'c', 'e'];

	const addValue = (number) => {
		value += number;
		$update();
	}
	const onClick = () => {
		console.log('click');
	}

	$on('pageInit', () => {
		const ee = $el.value.find('.page-content')[0];

		list.to(ee);

		const list2 = new List();

		list2.to(ee);


		list.addItem({
			title: "helow",
			link: true,
			icon: new Icon()
		}, {
			title: "hel2ow",
			link: true,
			icon: Icons.home,
			after: new Badge("haha")
		})
		.onItems('hold', (e, { index }) => {
			console.log(index);
		});

		list2.shareState(list);

		list2.hide();

		new ButtonSegment({
			children: [
				new Button('hello', {
					type: ['outline']
				}),
				new Button('hello', {
					onClick(){
						app.setColorTheme('#09d0d0');
					}
				})
			]
		})
		.to(ee);

		new Container({
			children: [
				new Card({
					header: new Header({
						title: "Hii",
						left: [
							new Link('s'),
							new Link('s'),
							new Link('s')
						],
						right: [
							new Link('s')
						]
					}),
					children: [
						new Text("how are you?"),
						new Column({
							gap: 10,
							children: [
								new Text("Hi"),
								new Text("Hello"),
							]
						}),
						new Row({
							gap: '10px',
							children: [
								new Text("Hi"),
								new Text("Hello"),
							]
						})
					],
					footer: new Text("bye")
				})
			]
		})
		.to(ee);

		new Form({
			items: [
				{
					title: "Ha",
					subtitle: "Hu",
					icon: new Icon()
				}
			],
			type: ['inset'],
			children: [
				new Radio()
			]
		})
		.to(ee);

		console.log(list);
	})

	return () => (
		<div className="page">
			<div className="page-content">
				<p>The value is {value}</p>
				<p>
					<button className="button" onClick={() => addValue(10)}>Add Value</button>
				</p>
				<ul>
					{items.map((item) => (
						<li> <label className="checkbox"><input type="checkbox" /><i className="icon-checkbox"></i></label> {item}</li>
					))}
				</ul>
				<label className="checkbox checkbox-active">
					<input type="checkbox" />
					<span className="icon-checkbox"></span>
				</label>
			</div>
		</div>
	);
};


class HomePage extends Component {

	constructor(){
		super({
			me: "sss",
			items: [{
				title: '${me}',
				link: true,
				icon: new Icon('person')
			}, {
				title: "s",
				link: true,
				icon: new Icon(),
				
				onClick: () => {
					console.log(t);
					this.me.update('lmaoooo');
				}
			}]
		});
		const t = this;
	};

	_onBuild(props, { $useState, $body, $f7 }){
		const lmso = $useState('s');

		this.c = new EntryController();

		console.log(this.me);
		return new Page({
			body: $body,
			header: new Header({
				left: [
					new IconLink(Icons.menu, {
						onClick(e){
							sidebar.show();
						}
					})
				],
				title: new SearchBar({
					type: 'transparent'
				})
			}),
			fab: new FloatingActionButton({
				text: "Hello",
				icon: new Icon(),
				onClick: () => {
					this.setState({items101: [{
						title: "man",
						link: true,
						icon: new Icon(),
						onClick: () => {
							console.log(this);
							this.setState({items101: []})
						}
					}]});
				}
			}),
			children: [
				new List({
					id: 'manaspace',
					itemsStateName: 'items101',
					items: [],
					type: ['inset'],
					loading: true,
					loader: new Center({
						height: 70,
						child: new Preloader({
							color: 'blue',
							type: 'large'
						})
					})
				}),
				new Grid({
					id: 'monaspace',
					style: {
						width: "95%"
					},
					itemsStateName: 'hellow',
					template: (title) => {
						return new Card({
							children: [
								new Text(title),
							]
						});
					},
					items: ['Woah wait a minute']
				}),
				new Container({
					children: [
						new Grid({
							empty: false,
							style: {
								width: "95.5%"
							},
							children: [
								...([2,12, 44, 65].map(title => new Card({
									children: [
										new Text(title),
									]
								})))
							]
						}),
						new Card({
							header: new Header({
								title: "Hii",
								left: [
									new Link('s'),
									new Link('s'),
									new Link('s')
								],
								right: [
									new Link('s')
								]
							}),
							children: [
								new Text("how are you?"),
								new Column({
									gap: 10,
									children: [
										new Text("Hi"),
										new Text("Hello"),
									]
								}),
								new Row({
									gap: '10px',
									children: [
										new Text("Hi"),
										new Text("Hello"),
									]
								})
							],
							footer: new ButtonSegment({
								children: [
									new Button('hello', {
										type: ['outline']
									}),
									new Button('hello', {
										onClick(){
											app.setColorTheme('#09d0d0');
										}
									})
								]
							})
						})
					]
				}),
				new Form({
					type: ['inset'],
					children: [
						new SelectBox({
							title: "Hamad",
							options: [
								'haha',
								'huhu'
							]
						}),
						new Entry({
							title: 'hi',
							subtitle: 'hello',
							icon: new Icon(),
							controller: this.c,
						})
					]
				}),
			]
		});

	}

	_after(props, { 
		$widget
	}) {
		setTimeout(() => {
			$widget.find('#manaspace')
			.updateList({items: "Hi|Hello|Desmond|Man".split('|').map(i => ({
				title: i,
				link: true,
			})), loading: false});


			$widget.find('#monaspace')
			.updateList({items: ['lemao'], loading: false});
		}, 2000);
	}

}

class ProfilePage extends Component {

	_onBuild(props, { $useState, $body }){
		return new Page({
			body: $body,
			children: [
				new Center({
					height: 400,
					child: new Image('res/img/wall.png')
				})
			]
		});
	}
	
}

var app = new Framework7({
  // App root element
  el: f.raw()[0],
  // App Name
  name: 'My App',

	theme: 'ios',

	colors: {},

	routes: [
		{
      path: '/profile/',
      component: new ProfilePage()
    },
		{
      path: '/',
      component: new HomePage()
    },
	],

	darkMode: true
});

Widget.injectApp(app);

setThemeMap(app);

app.views.create(view.raw()[0]);

sidebar.reMount();

setInterval(() => 
findEl(sidebar.id)[0].GUISIDEBAR.enableVisibleBreakpoint(), 100);