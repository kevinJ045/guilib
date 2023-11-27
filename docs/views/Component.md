# Component

The `Component` class is a class that manages the rendering, building and processing a page. the class comes with multiple methods:
```ts
class extends Component {
	initState(props: buildProps){}
	build(props: buildProps): Widget {}
	afterBuild(props: buildProps){}
}
```

## Methods

### initState
The `intState` function is called before any component is built, you can manage properties and states in it before the init is done, it doesn't need to return anything. 

### build
The `build` method is called when the Widget of the Component is needed, the build method can hold anything but shouldn't be async and should only return a Widget.

### afterBuild
the `afterBuild` method is callled after the `build` method, it's properties are also a bit different since they hold the previously built widget as `page`, therefore you can use async requests and then change the data as needed after the ui is done building.

### buildProps
The `buildProps` type holds the object model for a build, it holds the current route, it holds the init return, and most of all in layout.ts and `afterBuild` it will come with a property called `page` holding a Widget.

### title
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

## Events
The Component class supports various events that can be hooked into during different stages. Each event is associated with a specific method, and you can add custom logic to these methods.

Example:
```ts
export default class extends Component{
	
	onBeforeInit({ props, component } : { props: buildProps, component: Component }){
		...
	}

	onInitState({ props, component } : { props: buildProps, component: Component }){
		...
	}
	
	onBuildStart({ props, component } : { props: buildProps, component: Component }){
		...
	}

	onBuildEnd({ widget, props, component } : { widget: Widget, props: buildProps, component: Component }){
		...
	}

	onRebuild({ widget, newWidget, props, component } : { widget: Widget, newWidget: Widget, props: buildProps, component: Component }){
		...
	}
	
	build(props: buildProps){

		this.on('buildEnd', () => {
			...
		});

		this.once('rebuild', () => {
			...
		});

		this.emit('eventName', { /* data */ });

		this.off('eventName');
		
		return new Widget({ ... });
	}
}
```
#### onBeforeInit
This event is triggered before the initialization of the component. It provides access to props and the component instance.

#### onInitState
This event is triggered during the initState method. It provides access to props and the component instance.

#### onBuildStart
This event is triggered at the start of the build method. It provides access to props and the component instance.

#### onBuildEnd
This event is triggered at the end of the build method. It provides access to the built widget, props, and the component instance.

#### onRebuild
This event is triggered on a rebuild. It provides access to the current widget, the new widget, props, and the component instance.



### Event decorators
Event decorators provide a convenient way to attach event listeners to component methods. They are loaded before the component starts building.
```ts
import { onComponent } from "rayous/extra";

export default class extends Component{

	@onComponent
	rebuild(){
		// ...
	}

}
```

## Async Components
To create an asynchronous component, you can use the asyncComponent decorator. This allows you to handle asynchronous operations within the build method and display a placeholder until the component is fully loaded.

Basic Usage
```ts
import { asyncComponent, Component, Widget } from 'rayous';

@asyncComponent()
export default class extends Component {
  async build(props: buildProps): Promise<Widget> {
    let somevar = await promise();
    return new Widget({/*...*/});
  }
}
```
In the basic usage, the @asyncComponent() decorator is applied to the component class. The build method can now contain asynchronous operations, and the component will handle the loading state automatically.

Custom Loading Placeholder
You can customize the loading placeholder by providing a loading option to the asyncComponent decorator. This is useful for displaying a loading message or spinner while the asynchronous operation is in progress.
```ts
import { asyncComponent, Component, Widget, Text } from 'rayous';

@asyncComponent({
  loading: () => new Text('Loading...'),
})
export default class extends Component {
  async build(props: buildProps): Promise<Widget> {
    let somevar = await promise();
    return new Widget({/*...*/});
  }
}
```
In this example, the loading option is specified as a function that returns a new Text widget with the content "Loading...". This text will be displayed until the asynchronous operation in the build method is completed.

Using the asyncComponent decorator simplifies the handling of asynchronous components in your application, providing a clean way to manage loading states.


## Remove Layouts
While layouts are useful, there may be some pages that you won't want the layouts to load onto, in that case, you can make a static option in the component to remove all layouts.
```ts
export default class extends Component{
	...
	static layouts = false;
}
``` 