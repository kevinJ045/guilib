# DirectedWidget

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