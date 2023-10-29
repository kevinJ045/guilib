import { Component, InputWrapper, Text, List, ListItem, Widget, Button, Checkbox } from "../../client";
import { EntryController } from "../../client/extra";
import { TodoListLocalStorage } from "./data/controllers/localStorage";
import { Todo } from "./data/models/todo";


export default class extends Component {
	todos: TodoListLocalStorage = new TodoListLocalStorage();

	build({ route: {} }) {
		const self = this;
		let todoTitle = new EntryController('');
		return new Widget({
			children: [
				new InputWrapper({
					title: 'Enter Todo',
					controller: todoTitle,
					onTextInput(){}
				}),
				new Button('Add', {
					onClick(){
						self.todos.add(new Todo({ title: todoTitle.get() }));
					}
				}),
				new List({
					items: this.todos,
					template(todo: Todo){
						return new ListItem({ 
							children: [ 
								new Checkbox({
									checked: todo.checked,
									onChange(){
										const that: any = this;
										self.todos.setItem(todo, { checked: that.isChecked()  })
									}
								}),
								new Text(todo.title, { style: { textDecoration: todo.checked ? 'line-through' : '' } }),
								new Button('x', { onClick(){ self.todos.remove(todo) } })
							]
						});
					}
				}),
			]
		});
	}
}