import { Todo } from "../models/todo";
import { TodoList } from "./todo";



export class TodoListLocalStorage extends TodoList {
	constructor(){
		super([]);
		this.set(this.getFromLocalStorage());
		this.onChange(() => {
			this.setToLocalStorage();
		});
	}

	getFromLocalStorage(): Todo[] {
		let saved = localStorage.todos;
		if(!saved) return [];
		try{
			let todos = JSON.parse(localStorage.todos);
			return todos.map((todo: Record<string, any>) => new Todo(todo));
		} catch(e){
			return [];
		}
	}

	setToLocalStorage(){
		localStorage.todos = JSON.stringify(this.get());
	}
	
}
