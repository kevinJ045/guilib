import getDefaults from "../../utils/options.js";
import Checkbox, { CheckboxOptions } from "./Checkbox.js";

const defaults = getDefaults({ element: { name: "input" }, class: 'radio', attr: {type: 'radio'} });

class Radio extends Checkbox {
  constructor(options: CheckboxOptions) {
    super({ ...defaults, ...options });
	}
}

export default Radio;
