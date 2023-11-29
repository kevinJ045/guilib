# Standalone
Rayous Standalone, is an independent js file that can be used to make rayous apps without using the rayous server and only including one js file.

You can find that js file [here](https://raw.githubusercontent.com/kevinJ045/guilib/main/dist/index.js) in the [github](https://github.com/kevinJ045/guilib/blob/main/dist/index.js).

Or you can just include from `unpkg`:
```html
<script src="https://unpkg.com/rayous@2.3.2/dist/index.js"></script>
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
