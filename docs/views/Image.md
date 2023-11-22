# Image

A simple Image widget.

### Constructor

```javascript
constructor(src: string | object, options: object)
``` 

#### Setters
| Setter | Type | Description |
| --- | --- | --- |
| `src` | string | The URL or pathname for the Image `src`. |

#### Example
```ts
let image = new Image('/path/to/image.png', {
	width: 100,
	height: 100
});
// or
let image = new Image({
	src: '/path/to/image.png',
	width: 100,
	height: 100
});
```