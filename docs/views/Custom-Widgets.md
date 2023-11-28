# Custom Widgets
In rayous, you will be making custom widgets many times for many purposes, and there are ways to make that an easier task, naturally to make a custom widget, you have to make it's own options interface or class, and it's own class.

```ts
import { options } from "rayous/extra";
import { Widget } from "rayous";
 
export interface MyWidgetOptions extends options {
	customProp?: string
}

export class MyWidget extends Widget<MyWidgetOptions> {
	constructor(options: MyWidgetOptions){
		super(options);
	}
}
```

While making custom options is just optional, it will help you make your class unique and help typescript understand what your widget is.

### mergeOptions
When you make custom widgets, you can make a default config that can be merged with the init config, 

```ts
import { mergeOptions } from "rayous/extra";

export class MyWidget extends Widget<MyWidgetOptions> {
	constructor(options: MyWidgetOptions){
		super(mergeOptions<typeof options>({
			class: "default-css-class",
			children: [
				// default children
				new Widget({...})
			]
		}, options));
	}
}
```