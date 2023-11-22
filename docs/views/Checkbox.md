# Checkbox

A simple form independent checkbox.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `onChange` | function | Event listener for change. |
| `checked` | boolean | The checked state of the checkbox. |
| `controller` | CheckboxController | Checked state controller for the checkbox. |

#### Methods
| Method | Description |
| --- | --- |
| `setController(controller: CheckboxController)` | Set the controller. |
| `setChecked(checked: boolean)` | Set checked state. |
| `isChecked()` | Get checked state. |