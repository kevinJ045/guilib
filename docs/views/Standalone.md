# Standalone
Rayous Standalone, is an independent js file that can be used to make rayous apps without using the rayous server and only including one js file.

You can find that js file [here](https://raw.githubusercontent.com/kevinJ045/guilib/main/dist/index.js) in the [github](https://github.com/kevinJ045/guilib/blob/main/dist/index.js).

Once you include that js file you can just:
```html
<script src="/path/to/rayous.js"></script>
<script>
	const { Text } = Rayous;

	new Text('Hello World')
	.to(document.body);
</script>
```