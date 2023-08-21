import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import Store from "../../data/Store.js";

const defaults = getDefaults({ element: { name: "label" }, class: 'checkbox', stateName: '$chechbox_checked' });

class Checkbox extends Widget {
  state = new Store({ '$chechbox_checked': false });

  constructor(selectedOptions) {
		const options = { ...defaults, ...selectedOptions };
    let { onChange } = options;
    if(onChange) delete options.onChange;
    super(options);

    let iconElt = options?.class == "toggle" ? 'span' : 'i';

    findEl(this.id).append(`
      <input type="${options?.class == 'radio' ? 'radio' : 'checkbox'}" ${options?.name ? `name="${options.name}"` : ""} />
      <${iconElt} class="${options?.iconClass || 'icon-checkbox'}"></${iconElt}>
    `);

    const input = findEl(this.id).find("input");

    input.on("change", (e) => {
      const checked = e.target.checked;
      this.setState({ [options.stateName]: checked });
      if (typeof onChange === "function") {
        onChange(checked);
      }
      if(checked){
        if(options?.class == "checkbox") findEl(this.id).addClass('checkbox-active');
      }
    });

		this.on("state:change", (e, { new: state }) => {
			if(findEl(this.id).find("input").is(":checked") == state[options.stateName]) return;
      findEl(this.id).find("input").prop("checked", state[options.stateName]);
    });
  }

  isChecked() {
    return findEl(this.id).find("input").is(":checked");
  }

  setChecked(checked) {
    findEl(this.id).find("input").is(":checked", true);
    return this;
  }
}

export default Checkbox;
