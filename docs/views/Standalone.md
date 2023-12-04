# Standalone
Rayous Standalone, is an independent js file that can be used to make rayous apps without using the rayous server and only including one js file.

You can find that js file [here](https://raw.githubusercontent.com/kevinJ045/guilib/main/dist/index.js) in the [github](https://github.com/kevinJ045/guilib/blob/main/dist/index.js).

Or you can just include from `unpkg`:
```html
<script src="https://unpkg.com/rayous/dist/index.js"></script>
```

Once you include that js file you can just:
```html
<script src="/path/to/rayous.js"></script>
<script>
	const { Text } = Rayous.widgets;

	new Text('Hello World')
	.to(document.body);

	Rayous.dom('.widget').remove();
</script>
```

### Rayous Script Components
Rayous Standalone Script Components are script tags that can hold a component class, for example:
```html
<script type="rayous-component">
	class extends Component{

		build(){
			return new Widget({
				children: [ new Text('hi') ]
			})
		}

	}
</script>
```

#### Custom properties
Custom buildProps for `rayous-component` scripts.
```html
<script type="rayous-component" props="{ prop: 'value' }">
	class extends Component{

		build({ prop }){
			return new Widget({
				children: [ new Text(prop) ] // 'value'
			})
		}

	}
</script>
```

### External components
There are two types of external components,
In the simpler version, all you have to do is:
```html
<script type="rayous-component" src="/path/to/component.js"></script>
```
and in the js:
```ts
class extends Component {
	build({ prop }){
		return new Widget({
			children: [ new Text(prop) ] // 'value'
		})
	}
}
```
you should put the class code before anything else, if the component class is not declared
right at the start, errors might happen. this one uses the `fetch` api, and it might not always work as expected.

The other one is more complex, you have to actually define the component inside the script, and put the name inside the html:
```html
<script type="rayous-component" src="/path/to/component.js" componentName="ExampleComponent"></script>
```
In the JS, all you have to do is:
```
const { Component, Widget, Text } = Rayous.widgets; 

Rayous.component(class ExampleComponent extends Component {
	build({ prop }){
		return new Widget({
			children: [ new Text(prop) ] // 'value'
		})
	}
});
```
It is important to name the class the same name you put in the `componentName` attribute. In this one, fetch is not used, and you can use anything you like inside it, as long as it calls the `Rayous.component` with an extension class for `Component`, and a name of `componentName`.