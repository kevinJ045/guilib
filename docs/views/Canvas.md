# Canvas

A simple HTMLCanvas widget.

### Constructor

```javascript
constructor(options: object)
``` 
#### Methods
| Method | Description |
| --- | --- |
| `getContext(context)` | Returns the HTMLCanvas context. |

#### Example
```ts
let canvas = new Canvas();
let ctx = canvas.getContext('2d');
...
```