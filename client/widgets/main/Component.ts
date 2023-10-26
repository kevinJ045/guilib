import Widget from "./Widget";

export const components: Component[] = [];


export type buildProps = {
	route: {
		path: string,
		params: Record<string, any>
	},
	init?: any,
	page?: Widget
}

export default class Component {

	constructor(){
		components.push(this);
	}
	
	build(props: buildProps | any){

	}

	afterBuild(props: buildProps | any){}
}