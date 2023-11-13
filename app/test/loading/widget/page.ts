import { Button, Component, Link, Text, Widget } from "../../../../client";
import { buildProps } from "../../../../client/extra";
import "../../../../styles/main.scss";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Text(`Keep in mind that making a widget for a loading is costly 
				in the ways of increasing the size of the component 
				making it even slower to load the loading
				in the first place.
				
				And since the loader and the app
				are generated separately, using this will make 
				your loading the size of your app
				and your app won't use what you imported here
				so it will be a big size too
				
				this will make your component slower.`)
			]
		});
	}
	static scripts = ['https://scriff.onrender.com/app/lib/js/at.js']
}
