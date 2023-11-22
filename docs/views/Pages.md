# Pages

The `page.(ts|js)` file is used to render actual page components instead of just data, you can use it to render a GUILIB component into a html page.

Here's an example:
In `app/page.ts` put:
```ts
import { Component, Widget, Text } from "rayous";

export default class extends Component {
	build(){
		return new Widget({
			children: [ new Text('Hi') ]
		});
	}
}
```

This will render a page with a text 'Hi', you can use this to use UI instead of just a route.