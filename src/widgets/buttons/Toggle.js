import getDefaults from "../../utils/options.js";
import Checkbox from "./Checkbox.js";

const defaults = getDefaults({ element: { name: "label" }, class: 'toggle' });

class Toggle extends Checkbox {
  state = { checked: false };

  constructor(options) {
    super({ ...defaults, ...options, iconClass: 'toggle-icon' });
	}
}

export default Toggle;
