# Span

A simple Span widget, used to make simple text segments as inline blocks instead of a full block.

### Constructor

```javascript
constructor(text: string | object, options: object): extends Text
``` 

> Span only extends Text, and has no special options or methods.

#### Example
```ts
let text = new Text('SomeText', {
	accepts: true, // to make the text accept widget children,
	children: [
		new Span('Some other text', { class: 'colored-text' })
	]
});
```