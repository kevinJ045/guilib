# Row

A Row or horizontal grid layout widget.

### Constructor

```javascript
constructor(options: object): extends DirectedWidget
``` 

> Row is just a copy of the Center class.

#### Example
```ts
let row = new Row({
	gap: 20,
	children: [
		new Text('Horizontal Item 1'),
		new Text('Horizontal Item 2')
	]
});
```