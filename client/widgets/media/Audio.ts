import Widget from "../main/Widget";
import getDefaults, { options } from "../../utils/options";
import { findEl } from "../../utils/elman";

const defaultAudio = () =>
  getDefaults({
    element: { name: "audio" },
    class: "audio",
    accepts: false,
    _setters: ['src', 'controls', 'autoplay']
  });

interface AudioOptions extends options {
  src?: string;
  controls?: boolean;
  autoplay?: boolean;
}

class Audio extends Widget {
  constructor(selectedOptions: string | AudioOptions, otheroptions: AudioOptions | null = null) {
    const options = Audio.resolveOptions(
      selectedOptions,
      otheroptions,
      defaultAudio()
    );
    super(options);
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

  get paused() {
    return findEl(this.id!).at(0).paused;
  }

  get duration() {
    return (findEl(this.id!).at(0) as HTMLAudioElement).duration;
  }

  get currentTime() {
    return (findEl(this.id!).at(0) as HTMLAudioElement).currentTime;
  }
}

export default Audio;
