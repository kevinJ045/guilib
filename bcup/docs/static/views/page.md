# Page

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