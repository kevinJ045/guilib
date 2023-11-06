import Widget from "./Widget.js";
import getDefaults, { options } from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

const defaultImage = () =>
  getDefaults({
    element: { name: "img" },
    class: "image",
    accepts: false,
		_setters: ['src']
  });

interface ImageOptions extends options {
  src?: string
}

class Image extends Widget {
  constructor(selectedOptions: string | ImageOptions, otheroptions: ImageOptions | null = null) {
    const options = Image.resolveOptions(
      selectedOptions,
      otheroptions,
      defaultImage()
    );
    super(options);
  }

  static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object) {
    if (typeof selectedOptions == "string") {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults, ...selectedOptions };
  }

  set src(src: string) {
    if (this.sealed !== true) findEl(this.id!).attr({"src": src});
  }
}

export default Image;
