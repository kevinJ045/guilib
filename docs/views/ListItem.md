# ListItem

A List Item Widget to render inside of lists.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `title` | Widget or string | The title of the ListItem. |
| `link` | boolean | It makes an `a` instead of an `li` element |

#### Setters
| Setter | Type | Description |
| --- | --- | --- |
| `url` | string | The URL or pathname for the List Item `href`. |

#### Example
```ts
let li = new ListItem({
	title: new Text('Title'),
	// or
	title: 'Title'
});
// or
let liLink = new ListItem({
	title: 'Title',
	link: true,
	url: '/path/to/page'
});
```