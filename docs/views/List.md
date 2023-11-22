# List

The List class is a widget class to turn arrays into widgets, can be used to quickly make a template-based list and can be used with Controllers and Promises.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `items` | Array \| Controller\<Array> \| Promise\<Array \| Controller\<Array>> | The items array to build the list. |
| `template` | function(item, index, array) | The template function that returns the widget based on the item. |
| `loader` | Widget | The loader for when the list is in the loading state . |
| `loading` | boolean | The state of the list, if it's loading it will show the loader. |
| `empty` | boolean | A boolean specifying whether to empty the list when updateList is called. |

#### Methods
| Method | Description |
| --- | --- |
| `updateList(options: object)` | Update the options of the list. |
| `appendItem(item)` | Add an item to the array and render it. |
| `onItems(event: string, callback: function)` | Add an event to each item on click |
| `empty()` | empty the list |

#### Example:
```ts
let list = new List({
    items: [/* initial items */],
    template(item, index, array) {
      return new ListItem({ title: item });
    },
    loading: false,
    loader: new Widget({ content: "Loading..." }),
    empty: true
});

// Update the list with new items and set it to loading state
list.updateList({
    items: [/* new items */],
    loading: true
});
```