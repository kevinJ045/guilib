# Controller

The `Controller` class is a powerful class recognized by widgets to re-render on change, it holds simple methods like set, get, and onChange. 

You can use controllers for Inputs, Texts, Checkboxes and also ListBuilder(List).
Examples:
```ts
import { List, ListITem, Text, Checkbox, InputWrapper } from "rayous";
import { Controller, EntryController, CheckboxController } from "rayous/extra";

...

let inputController = new EntryController('');
new InputWrapper({ controller: inputController });
new Text(inputController);
let arrayController = new Controller<string[]>([]);
new List({
	items: arrayController,
	template(item: string){
		return new ListItem({ title: item });
	}
});
setTimeout(() => arrayController.set(['a', 'b', 'c']), 1000);
```

More examples have been showcased in the [rayous todo app demo](https://github.com/kevinj045/rayous-todo-demo).