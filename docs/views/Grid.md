# Grid

A grid builder based on as systematic auto grid styler based on options.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `items` | Array \| Controller\<Array> \| Promise\<Array \| Controller\<Array>> | The items array to build the grid. |
| `template` | function(item, index, array) | The template function that returns the widget based on the item. |
| `empty` | boolean | A boolean specifying whether to empty the grid when updateList is called. |
| `gridClass` | string | grid class for when you have css grid rukes. eg: 'row row-2 row-sm-4'. |
| `grid` | gridOptions | Grid options. |

#### Methods
| Method | Description |
| --- | --- |
| `updateList(options: object)` | Update the options of the grid. |
| `appendItem(item)` | Add an item to the array and render it. |
| `onItems(event: string, callback: function)` | Add an event to each item on click |
| `empty()` | empty the grid |
| `gridClass(string: class)` | grid class. eg: 'row row-2 row-sm-4' |

#### gridOptions
| Option | Type |
| --- | --- |
| `trueOrder` | boolean |
| `waitForImages` | boolean |
| `useOwnImageLoader` | boolean |
| `mobileFirst` | boolean |
| `columns` | number |
| `margin` | { x & y: number \| string, } |
| `padding` | { x & y: number \| string, } |
| `breakAt` | { [size]: gridOptions } |

#### Example
```ts
let grid = new Grid({
	items: ['a', 'b', 'c', 'd', 'e', 'f'],
	grid: {
		columns: 4,
		margin: {
			x: 20,
			y: 20
		},
		breakAt: {
			700: 3,
			400: {
				columns: 2,
				margin: {
					x: 10,
					y: 10
				}
			}
		}
	},
	template(item: string){
		return new Text(item);
	}
})
```