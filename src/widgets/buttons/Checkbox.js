import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

const defaults = getDefaults({ element: { name: "label" }, class: 'checkbox' });

class Checkbox extends Widget {
  state = { checked: false };

  constructor(selectedOptions) {
		const options = { ...defaults, ...selectedOptions };
    super(options);

    findEl(this.id).append(`
      <input type="${options?.element?.name == 'radio' ? 'radio' : 'checkbox'}" />
      <span class="${options?.iconClass || 'icon-checkbox'}"></span>
    `);

    const input = findEl(this.id).find("input");

    input.on("change", (e) => {
      const checked = e.target.checked;
      this.setState({ checked });
      if (typeof options.onChange === "function") {
        options.onChange(checked);
      }
    });

		this.on("state:change", (e, { new: state }) => {
			if(findEl(this.id).find("input").is(":checked") == state.checked) return;
      findEl(this.id).find("input").prop("checked", state.checked);
    });
  }

  isChecked() {
    return this.state.checked;
  }

  setChecked(checked) {
    this.setState({ checked });
  }
}

export default Checkbox;
