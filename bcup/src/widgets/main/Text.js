import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../../utils/options.js";
import Store from "../../data/Store.js";

const defaultText = () => getDefaults({
	element: { name: 'div' },
	class: 'text-wrapper',
	accepts: false,
	stateWrapperName: '$text_text'
});

class Text extends Widget {

	state = new Store({$text_text: "Text"});

	constructor(selectedOptions, otheroptions){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultText());
		super(options);

		if(options.text){
			this.setState({[options.stateWrapperName]: options.text});
		}

		this.text(this.getState()[options.stateWrapperName]);
	}


	// For quick title making
	static title(text, opts = {}){
		const {type, ...options} = opts;
		return new Text(text, {
			type: [type == 'header' ? 'block-header' : (type == 'large' ? 'block-title-large' : 'block-title')],
			...options
		});
	}


	static resolveOptions(selectedOptions, otheroptions, defaults){
		if(typeof selectedOptions == 'string'){
			selectedOptions = { text: selectedOptions };
		}
		if(otheroptions){
			selectedOptions = {...otheroptions, ...selectedOptions};
		}
		return {...defaults, ...selectedOptions};
	}
}

export default Text;