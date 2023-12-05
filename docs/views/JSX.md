# JSX
JSX is a convinient way to make templates and programmatically change their context, In rayous, there are some ways to include jsx and tsx into your pages, but they tend to be unreliable and problematic.

## Usage
To use jsx, first you need to go to your `tsconfig.json` and then put `"jsx": "react"` in there,
```json
// /tsconfig.json
{
	"compilerOptions": {
		// ...
		"jsx": "react"
	}
}
```

Next, import the react module from rayous:
```ts
import { React } from "rayous/react";
```
> Keep in mind that this React import only has `createElement` inside of it, to make a fake React environment that can be used to build rayous components and html elements.

### Intellisense
If your code editor is bugging you about `JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.`, then you can just make the file `jsx.d.ts` in your app root and put the below content:
```ts
// /app/jsx.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
};
```