# Widget

The `Widget` is the base class for all GUI components in GUILIB. It provides a set of common methods and functionalities that are inherited by other widgets.

### Constructor

```javascript
constructor(options: object)
``` 

Create a new `Widget` with the specified `options`.

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `element` | object (optional) | The HTML element options for the widget. |
| `class` | string (optional) | Additional CSS classes to be applied to the widget. |
| `style` | object (optional) | CSS styles to be applied to the widget. |
| `position` | object (optional) | Positioning options for the widget. |
| `size` | object (optional) | Size options for the widget. |
| `private` | boolean (optional) | Set to `true` to make the widget private (cannot be modified). |
| `reset` | boolean (optional) | Set to `true` to reset the widget's properties. |
| `value` | any (optional) | The initial value of the widget. |
| `children` | array (optional) | An array of child widgets to be added to the widget. |
| `accepts` | boolean (optional) | Set to `false` to prevent adding child widgets. |
| `events` | object (optional) | Event handlers for the widget. |
| `type` | string or array (optional) | Set the type of the widget. |

#### Methods
| Method | Description |
| --- | --- |
| `set(options: object)` | Update the options of the widget. |
| `on(event: string, callback: function)` | Add an event listener to the widget. |
| `off(event: string, callback: function)` | Remove an event listener from the widget. |
| `emit(event: string, data: any)` | Trigger a custom event on the widget. |
| `hide(time: number)` | Hide the widget with an optional animation duration. |
| `show(time: number)` | Show the widget with an optional animation duration. |
| `toggle(time: number)` | Toggle the visibility of the widget with an optional animation duration. |
| `raw()` | Get the raw HTML element of the widget. |
| `stripElement()` | Remove the GUIWIDGET association from the widget's HTML element. |
| `setState(newState: object)` | Set the state of the widget. |
| `getState()` | Get the current state of the widget. |

#### Static Methods
| Method | Description |
| --- | --- |
| `from(raw: string)` | Create a new widget from a raw HTML string. |
| `html(widget: Widget)` | Get the outerHTML of the widget's HTML element. |

### `onEvent` Option

The `onEvent` option allows you to define event handlers for the widget. If you specify an event with the `on` prefix in the options, it will automatically be treated as an event handler. The `onEvents` option enables you to bind functions to specific events that occur on the widget.

For example, suppose you want to add an `onClick` event to a widget that logs a message when clicked:

```javascript
new Widget({
    onClick() {
        console.log('yeehaw');
    }
});
``` 

In this case, when the widget is clicked, the `onClick` event handler will be triggered, and the message 'yeehaw' will be logged to the console.

Using `onEvent` simplifies the process of handling events for the widget, providing a clean and concise way to manage event interactions in your application.