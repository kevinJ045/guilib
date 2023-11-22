# Rayous

Rayous is a web framework designed to make TypeScript web development straightforward and efficient. If you're familiar with Next.js and enjoy working with TypeScript, Rayous could be your new go-to framework.

## Why Rayous?

-   **Simple Widget Creation:** Building a basic widget is as easy as defining its structure. Rayous simplifies the process, making it accessible for developers at any skill level.
    
-   **Effortless Rendering:** Unlike traditional approaches, Rayous leverages its routing system to dynamically render TypeScript directly to an HTML page. This saves you from manually managing widget placements.
    
-   **Structured Project Setup:** Rayous projects follow a clean structure. The `app` folder contains your pages and components, while styles and static files have designated directories.
    
-   **Middleware Magic:** Rayous introduces middleware functions for server-side tasks. Files ending in `.use.ts` in the `app` folder are automatically treated as middleware, streamlining your server-side operations.
    
-   **Styling Made Simple:** Whether you prefer inline styles, a shared `Style` class, or external CSS/SCSS files, Rayous gives you the flexibility to style your widgets your way. Tailwind support is also included.
    
-   **Widget Wonders:** The `Widget` class is the backbone of Rayous components. It offers easy-to-use methods for updating options, handling events, and managing visibility.

Here is a basic example for Rayous:
```ts
import { Widget, Text } from "rayous";
const widget = new Widget({
	children: [
		new Text("Hello !")
	]
});
```
As you can see here, there had been no utilization of JSX nor React. The onlly thing we are using is Rayous/GUILIB.

Here's where rayous comes to play, to actually add the widgets to the page, you  need rayous to append the widget to an html element, like this
```ts
widget.to(document.body);
```

so instead of actually doing so, we can use rayous's routing to render the typescript directly to an html page, 
```ts
import {  Component, Widget } from "rayous";
export default class extends Component {
	build(){
		return new Widget({ ... });
	}
}
```

This code will be generated to a page when the request have been made.