# Column

A Column or vertical layout widget.

### Constructor

```javascript
constructor(options: object): extends DirectedWidget
``` 

> Column is just a copy of the Center class.

#### Example
```ts
let column = new Column({
	gap: 20,
	children: [
		new Text('Vertical Item 1'),
		new Text('Vertical Item 2'),
	]
});
```