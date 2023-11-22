# Table

A table widget based on the ListBuilder from the List class.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `items` | Array \| Controller\<Array> \| Promise\<Array \| Controller\<Array>> | The items array to build the table. |
| `columns` | Array \| Controller\<Array> \| Promise\<Array \| Controller\<Array>> | The columns to sort the items before building the table. |
| `template` | function(item, index, array) | The template function that returns the widget based on the item. |
| `controller` | TableController<any> | The controller for both columns and items . |
| `empty` | boolean | A boolean specifying whether to empty the table when updateList is called. |

#### Methods
| Method | Description |
| --- | --- |
| `updateList(options: object)` | Update the options of the table. |
| `appendItem(item)` | Add an item to the array and render it. |
| `onItems(event: string, callback: function)` | Add an event to each item on click |
| `empty()` | empty the table |

#### Example
```ts
interface person {
	id: any,
	name: Widget | string,
	rank: any,
	address?: string,
	inVisible?: string
}
let items = new TableController<person>({
	columns: ['id', 'name', 'rank'],
	items: [
		{
			id: "1234",
			name: "dude",
			rank: '1'
		}
	]
});
setTimeout(() => {
	items.addColumn('address');
	items.push({
		id: { type: 'th', value: "1" },
		name: new Button('ss'),
		rank: (original: any, mapped: any) => {
			console.log(original, mapped);
			return "s";
		},
		address: "Somewhere",
		inVisible: "invisible"
	});
}, 1000);

const table = new Table({
	items,
	columns: items
});
```