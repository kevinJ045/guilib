# InputWrapper

A simple input/entry widget.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `controller` | EntryController | The value controller for the entry. |
| `title` | string | The placeholder of the input. |
| `onTextInput` | function | On value change listener |
| `required` | boolean | Set if the input is required or not |
| `inputType` | string | Input types, eg: file, password, email |

#### Methods
| Method | Description |
| --- | --- |
| `setController(controller: EntryController)` | Set the controller. |
| `val(text: string)` | Retrieve or set the value. |