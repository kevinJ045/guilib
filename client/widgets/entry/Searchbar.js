import Store from "../../data/Store.js";
import { findEl } from "../../utils/elman.js";
import getDefaults from "../../utils/options.js";
import Widget from "../main/Widget.js";

class SearchBar extends Widget {
  state = new Store({ value: "" });

  constructor(selectedOptions) {
    const options = {
			...(getDefaults({class: 'searchbar', placeholder: 'Search'})), 
			...selectedOptions
		};
    super(options);

    const { placeholder, onInput, onCancel } = this.options;

    findEl(this.id).append(`
      <div class="searchbar-inner">
        <div class="searchbar-input-wrap">
          <input type="search" placeholder="${placeholder}" class="input-wrapper" />
          <i class="searchbar-icon"></i>
          <span class="input-clear-button"></span>
        </div>
        <span class="searchbar-disable-button">Cancel</span>
      </div>
    `);

    const input = findEl(this.id).find(".input-wrapper");

    input.on("input", (e) => {
      const value = e.target.value;
      this.setState({ value });
      if (typeof onInput === "function") {
        onInput(value);
      }
    });

    findEl(this.id).find(".input-clear-button").on("click", () => {
      this.clear();
      if (typeof onInput === "function") {
        onInput("");
      }
    });

    findEl(this.id).find(".searchbar-disable-button").on("click", () => {
      if (typeof onCancel === "function") {
        onCancel();
      }
    });
  }

  getValue() {
    return this.getState().value;
  }

  setValue(value) {
    this.setState({ value });
    findEl(this.id).find(".input-wrapper").val(value);
  }

  clear() {
    this.setState({ value: "" });
    findEl(this.id).find(".input-wrapper").val("");
  }

  set placeholder(value){
    findEl(this.id).find(".input-wrapper").attr("placeholder", value);
  }
}

export default SearchBar;
