import Widget from "../main/Widget";
import getDefaults, { options } from "../../utils/options";
import { findEl } from "../../utils/elman";

const defaultVideo = () =>
  getDefaults({
    element: { name: "video" },
    class: "video",
    accepts: false,
    _setters: ['src', 'controls', 'autoplay']
  });

interface VideoOptions extends options {
  src?: string;
  controls?: boolean;
	autoplay?: boolean;
  height?: string | number;
  width?: string | number;
}

class Video extends Widget {
  constructor(selectedOptions: string | VideoOptions, otheroptions: VideoOptions | null = null) {
    const options: VideoOptions = Video.resolveOptions(
      selectedOptions,
      otheroptions,
      defaultVideo()
    );
    super(options);
    if(options.width) this.width(options.width);
    if(options.height) this.height(options.height);
  }

  static resolveOptions(selectedOptions: object | string, otheroptions: object | null, defaults: object) {
    if (typeof selectedOptions === "string") {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults, ...selectedOptions };
  }

  set src(src: string) {
    if (this.sealed !== true) findEl(this.id!).attr({ "src": src });
  }

  set controls(controls: boolean) {
    if (this.sealed !== true) findEl(this.id!).attr({ "controls": controls });
  }

	set autoplay(autoplay: boolean) {
    if (this.sealed !== true) findEl(this.id!).attr({ "autoplay": autoplay });
  }

	play(){
		findEl(this.id!).at(0).play();
		return this;
	}

	pause(){
		(findEl(this.id!).at(0) as HTMLVideoElement).pause();
		return this;
	}

	get paused(){
		return findEl(this.id!).at(0).paused;
	}

	get duration(){
		return (findEl(this.id!).at(0) as HTMLVideoElement).duration;
	}

	get currentTime(){
		return (findEl(this.id!).at(0) as HTMLVideoElement).currentTime;
	}
}

export default Video;
