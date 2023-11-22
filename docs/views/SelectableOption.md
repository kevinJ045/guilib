# SelectableOption

SelectableOption class is a subclass for the Selectbox, it can be either just an object with a `title` and a `value` property, but it can also be a full widget.

### Constructor

```javascript
constructor(options: object)
``` 

#### Setters
| Setter | Type | Description |
| --- | --- | --- |
| `selected` | boolean | Wether option is selected or not. |
| `disabled` | boolean | Wether option is disabled or not. |
| `value` | string | The value of the option. |
| `title` | string \| Widget | The display title of the option. |
