# Rayous and React
Rayous and React have a different way of working, but because they both use the basics(js and html), we are able to render React components inside of Rayous.

Rayous comes with a module for react by default:
```ts
import ReactWidget from "rayous/react/wrapper";
```
Once imported, you can use this module to render react components inside of your pages, but keep in mind that react components and jsx in general are still problematic in rayous.

## Example
First, let us make our tsx file, let's name it `component.tsx` as an example.
```tsx
function CustomComponent(){
	return <div>Hello <span>React</span>!</div>;
}

export function renderElement(){
	return <CustomComponent />
}
```

Now finally, in our page.ts, inside any widget we can just do:
```ts
import ReactWidget from "rayous/client/widgets/react/wrapper";
import { renderElement } from "./component";

new Widget({
	children: [
		// ...
		new ReactWidget({
			children: [
				new Text("Some normal rayous widget"),
				renderElement()
			]
		}),
	]
});
```

Now, this component will render the react element in it's own container, and it will run the way you would expect it to.