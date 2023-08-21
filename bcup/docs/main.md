
## Widget

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

## end Widget;

## Text
A simple text wrapper.

### Constructor

```javascript
constructor(text: string | object, options: object)
``` 
#### Options
| Option | Type | Description |
| --- | --- | --- |
| `text` | string | The content of the text. |

## end Text;

## Button
A simple, multi purposed Button widget.

### Constructor

```javascript
constructor(text: string | object, options: object): extends Text
``` 

> Button only extends Text, and has no special options or methods.

## end Button;

## Link
A link widget

### Constructor

```javascript
constructor(text: string | object, options: object): extends Text
``` 

> Link only extends Text, and has no special options or methods.

## end Link;

## ButtonSegment
A button grouper.

### Constructor

```javascript
constructor(options: object)
``` 

> ButtonSegment is just a widget. no options nor methods out of the ordinary

## end ButtonSegment;

## Checkbox
A simple form independent checkbox.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `onChange` | function | Event listener for change. |
| `stateName` | string | The state name to store the value of checkbox |

## end Checkbox;

## Radio
A simple form independent checkbox.

### Constructor

```javascript
constructor(options: object): extends Checkbox
``` 
> Radio only extends Checkbox, and has no special options or methods.

## end Radio;

## Toggle
A simple switch/toggle.

### Constructor

```javascript
constructor(options: object): extends Checkbox
``` 
> Toggle only extends Checkbox, and has no special options or methods.

## end Toggle;

## FloatingActionButton
A simple minimal floating action button, with an icon and optionally a text

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `position` | string | The position, x and y, center, top, bottom, left or right |
| `text` | string | If the fab needs a text or not |
> These options are also setters

## end FloatingActionButton;

## Canvas
A simple HTMLCanvas widget.

### Constructor

```javascript
constructor(options: object)
``` 
#### Methods
| Method | Description |
| --- | --- |
| `getContext(context)` | Returns the HTMLCanvas context. |

## end Canvas;

## Body
`Body` is a special type of Widget called `AssemblyWidget`,  since the HTMLBodyElement is already on the page, instead it gets initiated without being constructed.

### Constructor
`Body` has no Constructor, instead it relies on being called as a function, takes one argument with only one independent option, `child`
```javascript
Body(options: object)
``` 

### Example
```javascript
Body({
	child: new Widget();
});
```

## end Body;

## Card
A simple Card widget. with header, body and footer.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `header` | Widget | The header element to be added. Possibly a `Row` |
| `footer` | Widget | The header element to be added. Possibly a `Row` as well. |

#### Methods
| Method | Description |
| --- | --- |
| `header(Widget)` | Adds more to the header. |
| `footer(Widget)` | Adds more to the footer. |

## end Card;

## DirectedWidget
`DirectedWidget` includes the widgets `Row`, `Center` and `Column`, which are all widgets with the `display:flex;` css attribute to help with grids. 

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `height` | string \| number | The height of the widget, required for `Center`. |
| `width` | string \| number | The width of the widget. |

#### Setters
| Option | Type | Description |
| --- | --- | --- |
| `gap` | string \| number | The gap between each child. |
| `crossAxisAlignment` | string | The alignment in the x axis |
| `mainAxisAlignment` | string | The alignment in the y axis |

> Keep in mind that DirectedWidget is not itself a widget but it contains `Center`, `Row` and `Column`

## end DirectedWidget;

## Container
A container with padding for a simple containment.

### Constructor

```javascript
constructor(options: object)
``` 

> Container is just a widget. no options nor methods out of the ordinary

## end Container;

## Header
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

## end Header;

## Toolbar
A wrapper for `Link` and `IconLink`, behaves like `Header`.

### Constructor
```javascript
constructor(options: object)
``` 
> **Note** You can add a `type` called tabbar to make this behave like one.

## end Toolbar;

## View
Just a widget, controlled mainly by css.

### Constructor
```javascript
constructor(options: object)
``` 

> View is just a widget. no options nor methods out of the ordinary.

## end View;

## Page
The page widget behaves more than just a Widget, it has some special option, but cannot be called without a `Component`.

### Constructor
```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `body`* | $body \| Body |  **`Required`** This is a special option, It can be anything with a full width and height.|

#### Setters
| Option | Type | Description |
| --- | --- | --- |
| `header` | Header (optional) | The fixed header for navigation. |
| `fab` | FloatingActionButton (optional) | A fixed FAB for the page. |
| `toolbar` | Toolbar (optional) | A toolbar for navigation or as a tabbar |

## end Page;
