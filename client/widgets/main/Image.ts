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
  src?: string,
  height?: string | number,
  width?: string | number
}

class Image extends Widget {
  constructor(selectedOptions: string | ImageOptions, otheroptions: ImageOptions | null = null) {
    const options: ImageOptions = Image.resolveOptions(
      selectedOptions,
      otheroptions,
      defaultImage()
    );
    super(options);
    if(options.width) this.width(options.width);
    if(options.height) this.height(options.height);
  }

  static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object) {
    if (typeof selectedOptions == "string") {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults, ...selectedOptions } as ImageOptions;
  }

  set src(src: string) {
    if (this.sealed !== true) findEl(this.id!).attr({"src": src});
  }
}

export default Image;
