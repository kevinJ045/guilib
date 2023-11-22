# Styles
To stylize a widget in GUILIB, you can just use the Style class for shared styles, inline style property, or even css classes.

## Inline `style` property
The inline `style` option for Widgets gives a css style to your component just the same way as you would in a style attribute. 
```ts
new Text("Text!", {
	style: {
		fontFamily: 'monospace',
		fontSize: 12
	}
})
```

## The `Style` Class
The `Style` Class makes a shared style that can be named.
```ts
import { Style } from "rayous/extra";
...
new Text("Text!", {
	style: new Style('text-style', {
		fontFamily: 'monospace',
		fontSize: 12
	}),
}),
new Text("Text!", {
	style: new Style('text-style'),
})
```

## Css and Scss
If you don't like putting the styles inside the component, you can just import css files separately and use the `class` option in the widget to assign it a class, 
```ts
import "./styles.scss";
...
new Text('Hello!', { class: 'title' });
```
> Note: I advice you put all styles in the projectRoot/styles directory, since i might make something of it in the future.

## Tailwind support
Starting from version 1.1.9 rayous has a support for tailwind, and when you do `npx rayous create` you will create a `tailwind.config.js` file in your project root. And to actually use tailwind, all you have to do is name a file that ends with `.tail.css` and it will build it as a tailwind css file.
