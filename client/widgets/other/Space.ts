import { options } from "../../utils/options";
import Widget from "../main/Widget";

interface SpaceOptions extends options {
	height?: number | string;
	width?: number | string;
}

export default class Space extends Widget<SpaceOptions> {

	constructor(options: { width?: number | string, height?: number | string } = { height: '10px' }){
		super({
			element: { name: 'div' },
			style: {
				display: 'block'
			},
			position: {
				type: 'relative'
			}
		});
		if(options.width) this.width(options.width);
		if(options.height) this.height(options.height);
	}

}