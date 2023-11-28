# Widget Models
Widget models are simple configs create custom widget classes just from a config without creating a full class.

```ts

interface MyOptions extends options {
	title?: string | Widget
}

const MyWidget = Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	],
	options: {
		title: {
			string: {
				"div.somethingelse": {
					text: "$title"
				}
			},
			widget: {
				"div.somethingelse": {
					append: "$title"
				}
			}
		}
	},
	_onMount(){},
	_optionChange(){}
}, {
	title: null
});
```

In here, we see a semi-complicated config, but let's tear it all apart.

### Custom Options
First, we declare options to hint into what the options/configs to our new custom widget are.
```ts
interface MyOptions extends options {
	title?: string | Widget
}
```

### Model declaration
We next, declare the class that will be generated from our model context,
```ts
const MyWidget = Widget.model<MyOptions>({}, {});
```
The `Widget.model` function takes the model context and default options.

### Starting with html selectors
Now, we start by telling the widget generator to create a widget associated with a certain HTML element.
```ts
Widget.model<MyOptions>({
	selector: "div.classname"
}, {});
```
You can put a html selector with "elementname.classname.classname2" as a selector or just "elementname".

### Setup default structure
We can next make children to make a basic skeleton for our custom widget class.
```ts
Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	]
}, {});
```
The children can be either a string or of type widgetModel
```ts
type widgetModel = {
	selector: string,
	children?: (widgetModel | string)[],
	child?: widgetModel | string,
	attributes?: Record<string, any>,
	text?: string,
	html?: string,
}
```
You can also put any widget configs here for the children.

### Making the options structure
We can now make the content of the widget based on options, to do that, we can simply state options: 
```ts
Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	],
	options: {
		title: {}
	}
}, {
	title: null
});
```
Now we have defined the option 'title'. we have to set it so it behaves a certain way when the option is passed.

### Option `typecase`
To make the options functional, we need to tell it to behave a certain way when an option is passed with a certain type
```ts
Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	],
	options: {
		title: {
			string: {
				
			},
			widget: {
				
			} 
		}
	}
}, {
	title: null
});
```
Now, our widget will know to respond when a either a string is passed or a widget is passed in the option.
A typecase can include these types:
- `number`
- `string`
- `boolean`
- `function`
- `object`
- `null`
- `undefined`
- `widget`
- `else`

You can also use arrays to handle multiple items in an option, for example:
```ts
options: {
	type: "array",
	forEach: {
		string: { ... }
	}
}
```

### Option `selectorcase`
Once we have determined the type of the option, we can continue to select out element to make changed to.
```ts
Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	],
	options: {
		title: {
			string: {
				"div.somethingelse": {}
			},
			widget: {
				"div.somethingelse": {}
			} 
		}
	}
}, {
	title: null
});
```
In the selector case, we can put any html query selector to select our element inside out base element.

### Option `actioncase`
Now, we have determined type of the option, and the element to modify, next all we have to do is do the change.
```ts
Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	],
	options: {
		title: {
			string: {
				"div.somethingelse": {
					text: ""
				}
			},
			widget: {
				"div.somethingelse": {
					append: ""
				}
			} 
		}
	}
}, {
	title: null
});
```
As an actioncase, we can put any function inside of a the widget we created a model from. there are basic actions such as:
- `text`
- `addClass`
- `removeClass`
- `toggleClass`
- `append`
- `empty`
- `prepend`

Keep in mind that you can put more than one action, more than one selector and more than one type.


### Option `valuecase`
Now that we know what action to do, like setting the text, we need to know what we will be setting the text to.
```ts
Widget.model<MyOptions>({
	selector: "div.classname",
	children: [
		"div.something"
		{
			selector:  "div.anotherthing",
			children: [
				"div.somethingelse"
			]
		},
	],
	options: {
		title: {
			string: {
				"div.somethingelse": {
					text: "$title"
				}
			},
			widget: {
				"div.somethingelse": {
					append: "$title"
				}
			} 
		}
	}
}, {
	title: null
});
```
Keep in mind that if no matter what you put as content, if the valuecase starts with a `$` it will default to the current passed option, but if you want to make a dynamic string you can use `$(optionName)` to select the option from the passed options.
> Note: You can also pass a `{ selector: "",  ... }` or a function that takes the widget as an argument and returns either a string or a `{ selector: "",  ... }`  as a value.

### Additional Parameters
You can also make additional widget parameters, like `widgetOptions` or `_onMount` and `_optionChange` to make the widget more functional.

### Finalize
Finally, we can just use our widget class by:
```ts
new MyWidget({
	title: "MyWidget"
});
```