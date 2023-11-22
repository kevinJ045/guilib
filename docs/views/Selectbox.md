# Selectbox

A multiple item select box widget.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `controller` | SelectController | Item list state and value controller for the checkbox. |

#### Setters
| Setter | Type | Description |
| --- | --- | --- |
| `multiple` | boolean | Select multiple options. |
| `selectableOptions` | SelectableOptions[] | Selectable options list. |

#### Methods
| Method | Description |
| --- | --- |
| `setController(controller: SelectController)` | Set the controller. |
| `val(text: string)` | Retrieve or set the value. |

#### Example
```ts
let controller = new SelectController('option_1');
new Selectbox({
	controller,
	selectableOptions: [
		{
			title: 'Option 1',
			value: 'option_1'
		},{
			title: 'Option 2',
			value: 'option_2'
		},
		new SelectableOption({
			title: 'Option 3',
			value: 'option_3',
			disabled: true
		})
	]
});
```