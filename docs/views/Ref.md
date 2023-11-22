# Ref

The `Component.ref` method or the `Ref` class are used to make stateful Components by creating a setter and getter for a property making it rebuild the entire component on change.

Example:
```ts
import { Component, Text } from "rayous";
export default class extends Component {
	text: string = "Click Me!";
	
	initState(){
		this.ref('text');
	}	

	build(){
		return new Text(this.text, {
			onClick: () => this.text = 'Hi';
		});
	}
}
```

In this example, in the `initState` before the build, we register `text` as a getter and setter to rebuild for the update everytime it's changed. 

Another example:
```ts
import { Component, Text } from "rayous";
import { Ref } from "rayous/extra";

export default class extends Component {
	text: string | Ref<string> = new Ref("Click Me!");

	build(){
		return new Text(this.text, {
			onClick: () => this.text = 'Hi';
		});
	}
}
```

This way, we won't have to register it in `initState`, but we can just declare it and change it later.