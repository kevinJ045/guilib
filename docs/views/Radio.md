# Radio

A simple form independent radio button.

### Constructor

```javascript
constructor(options: object): extends Checkbox
``` 
> Radio only extends `Checkbox`, and has no special options or methods.

#### Example
```ts
let radio1 = new Radio({ name: 'radio' });
let radio2 = new Radio({ name: 'radio' });
let isRadio1 = radio1.isChecked();
```