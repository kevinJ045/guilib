import { Controller } from "../../../../client/extra";
import { Todo, potentialTodo } from "../models/todo";


export class TodoList extends Controller<Todo[]> {

	constructor(todos: Todo[] = []){
		super(todos);
	}

	add(todo: Todo){
		this.get().push(todo);
		this.notifyChangeListeners();
		return this;
	}

	remove(todo: Todo | number){
		let index = -1;
		if(typeof todo == "number"){
			index = todo;
		} else {
			index = this.get().indexOf(todo);
		}
		if(index > -1) this.get().splice(index, 1);
		this.notifyChangeListeners();
		return this;
	}

	empty(){
		this.get().splice(0, this.get().length);
		this.notifyChangeListeners();
		return this;
	}

	at(index: number){
		return this.get().at(index);
	}

	setItem(todo: Todo | number, props: potentialTodo){
		let index = -1;
		if(typeof todo == "number"){
			index = todo;
		} else {
			index = this.get().indexOf(todo);
		}
		if(index > -1) {
			for(let i in props){
				(this.get().at(index) as any)[i] = props[i];
			}
			this.notifyChangeListeners();
		}
		return todo;
	}

}