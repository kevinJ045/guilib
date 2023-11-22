# Component

The `Component` class is a class that manages the rendering, building and processing a page. the class comes with multiple methods:
```ts
class extends Component {
	initState(props: buildProps){}
	build(props: buildProps): Widget {}
	afterBuild(props: buildProps){}
}
```

## initState
The `intState` function is called before any component is built, you can manage properties and states in it before the init is done, it doesn't need to return anything. 

## build
The `build` method is called when the Widget of the Component is needed, the build method can hold anything but shouldn't be async and should only return a Widget.

## afterBuild
the `afterBuild` method is callled after the `build` method, it's properties are also a bit different since they hold the previously built widget as `page`, therefore you can use async requests and then change the data as needed after the ui is done building.

## buildProps
The `buildProps` type holds the object model for a build, it holds the current route, it holds the init return, and most of all in layout.ts and `afterBuild` it will come with a property called `page` holding a Widget.

## title
The page title for a rayous app is always from the `rayous.json` file, it holds the title of all pages, but if you want to make a special title for the current page, you can just add a static string with name `title` in a component as below:
```ts
export default class extends Component{
	...
	static title = "Page Title"
}
``` 
You can also make the title a function that returns a string, and you can take the buildProps as well.
```ts
export default class extends Component{
	...
	static title = (props: buildProps) => "Page Title"
}
``` 
## Remove Layouts
While layouts are useful, there may be some pages that you won't want the layouts to load onto, in that case, you can make a static option in the component to remove all layouts.
```ts
export default class extends Component{
	...
	static layouts = false;
}
``` 