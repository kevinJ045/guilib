import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";
import { options } from "../../utils/options";
import Controller from "../../data/Controller";

const defaults = getDefaults({ element: { name: "input" }, class: 'checkbox', attr: { type: 'checkbox' } });

export interface CheckboxOptions extends options {
  controller?: CheckboxController,
  checked?: boolean,
  onChange?(): any
}

export class CheckboxController extends Controller<boolean> {
	constructor(val: boolean){super(val)}
};

class Checkbox extends Widget {
  __controller?: CheckboxController; // Use EntryController for state management

  constructor(selectedOptions: CheckboxOptions) {
    const options = { ...defaults, ...selectedOptions };
    super(options);

    if (options.controller) {
      this.setController(options.controller);
    }
    if(options.checked){
      this.setChecked(true);
    }
  }

  isChecked() {
    return findEl(this.id!).at(0).checked;
  }

  setChecked(checked: boolean) {
    findEl(this.id!).at(0).checked = checked;
    return this;
  }

  setController(controller: CheckboxController) {
    if (this.__controller) throw new Error('Checkbox already has a controller.');
    if (controller instanceof CheckboxController) {
      const change = (v: boolean) => this.isChecked() !== v ? this.setChecked(v) : [];
      this.on('change', () => {
        controller.set(this.isChecked(), change);
      });
      controller.onChange(change);
      this.__controller = controller;
      this.setChecked(controller.get());
    }
  }
}

export default Checkbox;
