import getDefaults, { options } from "../../utils/options";
import Text from "../main/Text";
import Link, { LinkOptions } from "../main/Link";

const defaultButton = (more: any, link: any) => getDefaults({
	element: { name: link ? 'a' : 'button' },
	class: more ? 'button '+more : 'button',
	accepts: false,
});

export interface ButtonOptions extends LinkOptions {}

class Button<T extends options = ButtonOptions> extends Link<T> {

	constructor(selectedOptions: string | T, otheroptions: T | null = null){
		const options = Text.resolveOptions(selectedOptions, otheroptions, defaultButton(null, otheroptions?.url || (selectedOptions as T)?.url));
		super(options as any);
	}
	
}

export default Button;