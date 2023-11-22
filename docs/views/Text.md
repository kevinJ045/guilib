# Text

A simple text wrapper.

### Constructor

```javascript
constructor(text: string | object, options: object)
``` 
#### Options
| Option | Type | Description |
| --- | --- | --- |
| `text` | string | The content of the text. |

#### Example:
```ts
const text = new Text('Hello', { style: { color: 'red' } });
// or
const text = new Text({ text: 'Hello', style: { color: 'red' } });
```