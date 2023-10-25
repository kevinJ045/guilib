
export const components: Component[] = [];

export default class Component {

	constructor(){
		components.push(this);
	}
	
	build(props: any){

	}
}