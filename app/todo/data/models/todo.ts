

export interface TodoItem {
	title: string,
	description: string,
	checked: boolean
}

export type potentialTodo = Record<string, string | boolean>;


export class Todo implements TodoItem {
	title: string = "";
	description: string = "";
	checked: boolean = false;

	constructor(potentialTodo: TodoItem | potentialTodo){
		this.setValues(potentialTodo);
	}

	setValues(potentialTodo: TodoItem | potentialTodo){
		let that: Record<string, any> = this;
		for(let i in potentialTodo){
			that[i] = (potentialTodo as potentialTodo)[i];
		}
		return this;
	}

	fromObject(object: potentialTodo){
		return this.setValues(object);
	}

	// toJSON(): string {
	// 	try{
	// 		return JSON.stringify(this);
	// 	} catch(e){
	// 		return "";
	// 	}
	// }

}