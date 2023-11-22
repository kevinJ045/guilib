# LayoutBuilder

The LayoutBuilder class is a complex class used to make a certain setup on a certain width.

### Constructor

```javascript
constructor(options: object)
``` 

#### Options
| Option | Type | Description |
| --- | --- | --- |
| `queries` | queries | A set of screen sizes and functions with that screen size returning widgets. |

#### Queries
+ `w`: Element width
+ `h`: Element height
+ `ph`: Parent height
+ `pw`: Parent width
+ `vw`: Screen width
+ `vh`: Screen height

#### Example
```ts
new LayoutBuilder({
	queries: {
		'pw > 700': () => {
			return new Text('widget');
		},
		'pw > 700 && ph < 600': () => {
			return new Text('another');
		}
	}
})
```