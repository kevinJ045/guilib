import { Component, Text, Widget } from "../../../client";
import "../../../styles/main.scss";


export default class extends Component {
	build({ route }: { route: { params: { id: string } } }){
		return new Widget({ children: [ new Text('/posts/'+route.params.id) ] })
	}
}