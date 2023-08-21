# Header

An appbar, or in other words navbar, can be static or fixed based on it's placement.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `title`* | Widget | The main element to be added. Possibly a `Searchbar` or a `Text` |
| `left` | [...Widget] | The list of elements to be in the left, like navigation. |
| `right` | [...Widget] | The list of elements to be in the right, like navigation as well. |

#### Methods
| Method | Description |
| --- | --- |
| `title(Widget)` | Replaces the title. |
| `left(...Widget)` | Adds more to the left. |
| `right(...Widget)` | Adds more to the right. |