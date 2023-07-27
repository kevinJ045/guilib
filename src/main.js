import "./style/main.scss";

import $ from "jquery";

import Widget from "./widgets/Widget.js";
import Body from "./widgets/Body.js";
import Button, { ButtonSegment } from "./widgets/Button.js";

import Framework7 from "framework7";
import { setThemeMap } from "./theme/base.js";
import View from "./widgets/View.js";
import List from "./widgets/List.js";
import Container from "./widgets/Container.js";
import Card from "./widgets/Card.js";
import Text from "./widgets/Text.js";
import Header from "./widgets/Header.js";
import Link from "./widgets/Link.js";
import Form from "./widgets/Form.js";
import Icon from "./widgets/Icon.js";

const view = new View();

const f = Body({
	child: view
});

const list = new List();

// f.toHTMLElement($("body")[0]);

console.log(f.children());


var app = new Framework7({
  // App root element
  el: f.raw()[0],
  // App Name
  name: 'My App',

	theme: 'ios',

	colors: {},

	routes: [
		{
      path: '/',
      component: (props, { $h, $update, $el, $on }) => {
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
						icon: new Icon()
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
									new Text("how are you?")
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
						type: ['inset']
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
									<li>{item}</li>
								))}
							</ul>
						</div>
					</div>
				);
			}
    },
	],

	darkMode: true
});

setThemeMap(app);

app.views.create(view.raw()[0])