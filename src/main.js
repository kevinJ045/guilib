import "./style/main.scss";

import $ from "jquery";

import Widget from "./widgets/Widget.js";
import Body from "./widgets/Body.js";
import Button from "./widgets/Button.js";

import Framework7 from "framework7";
import { setThemeMap } from "./theme/base.js";
import View from "./widgets/View.js";

const view = new View();

const f = Body({
	child: view
});

f.toHTMLElement($("body")[0]);

console.log(f.children());


var app = new Framework7({
  // App root element
  el: f.raw()[0],
  // App Name
  name: 'My App',

	theme: 'md',

	colors: {},

	routes: [
		{
      path: '/',
      component: (props, { $h, $update }) => {
				let value = 10;
				const items = ['s', 'c', 'e'];

				const addValue = (number) => {
					value += number;
					$update();
				}
				const onClick = () => {
					console.log('click');
				}
			
				return () => (
					<div className="page">
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
				);
			}
    },
	],

	darkMode: true
});

setThemeMap(app);

app.views.create(view.raw()[0])