# Center

A centered layout widget.

### Constructor

```javascript
constructor(options: object): extends DirectedWidget
``` 

#### Setters
| Setter | Type | Description |
| --- | --- | --- |
| `gap` | string \| number | The gap between widgets. |
| `crossAxisAlignment` | string | The cross axis alignment, eg: center. |
| `mainAxisAlignment` | string | The cross axis alignment, eg: space-between. |
| `wrap` | boolean \| string | The wrap of children widgets. |

#### Example
```ts
let center = new Center({
	height: 400,
	children: [
		new Text('Centered Item')
	]
});
```