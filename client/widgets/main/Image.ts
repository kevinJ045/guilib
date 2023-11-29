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
  src?: string | Blob,
  height?: string | number,
  width?: string | number
}

class Image<T extends options = ImageOptions> extends Widget<T> {
  constructor(selectedOptions: Blob | string | ImageOptions, otheroptions: ImageOptions | null = null) {
    const options: ImageOptions = Image.resolveOptions(
      selectedOptions,
      otheroptions,
      defaultImage()
    );
    super(options as T);
    if(options.width) this.width(options.width);
    if(options.height) this.height(options.height);
  }

  static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object) {
    if (typeof selectedOptions == "string" || selectedOptions instanceof Blob) {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults, ...selectedOptions } as ImageOptions;
  }

  set src(src: string | Blob) {
    if (this.sealed !== true) {
      if(typeof src != "string"){
        src = URL.createObjectURL(src);
      }
      findEl(this.id!).attr({"src": src});
    }
  }
}

export default Image;
