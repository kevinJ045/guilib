# Link

A link widget

### Constructor

```javascript
constructor(text: string | object, options: object): extends Text
``` 

#### Setters
| Setter | Type | Description |
| --- | --- | --- |
| `url` | string | The URL or pathname for the Link `href`. |


#### Example
```ts
let link = new Link('Link', { url: '/path/to/page' });
// or
let link = new Link({ text: 'Link', url: '/path/to/page' });

link.url =  '/path/to/page';
```