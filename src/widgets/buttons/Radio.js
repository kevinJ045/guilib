import getDefaults from "../../utils/options.js";
import Checkbox from "./Checkbox.js";

const defaults = getDefaults({ element: { name: "label" }, class: 'radio' });

class Radio extends Checkbox {
  state = { checked: false };

  constructor(options) {
    super({ ...defaults, ...options, iconClass: 'icon-radio' });
	}
}

export default Radio;
