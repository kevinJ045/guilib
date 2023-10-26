import $ from "jquery";
import Widget from "./Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

const defaultImage = () =>
  getDefaults({
    element: { name: "img" },
    class: "image",
    accepts: false,
		_setters: ['src']
  });

class Image extends Widget {
  constructor(selectedOptions, otheroptions) {
    const options = Image.resolveOptions(
      selectedOptions,
      otheroptions,
      defaultImage()
    );
    super(options);
  }

  static resolveOptions(selectedOptions, otheroptions, defaults) {
    if (typeof selectedOptions == "string") {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults, ...selectedOptions };
  }

  set src(src) {
    if (this.sealed === true) return this;
    findEl(this.id).attr("src", src);
  }
}

export default Image;
