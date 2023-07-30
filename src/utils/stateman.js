import Widget from "../widgets/main/Widget.js";
import { isWidget } from "./type.js";


class StateMan {

	state = {};

	setState(newState) {
    if (this.sealed === true) return this;
		const old = { ...this.state };
    this.state = { ...this.state, ...newState };
		if(this._onStateChange) this._onStateChange({ old, current: this.state, new: newState });
    return this;
  }

  getState() {
    return { ...this.state };
  }

	switchWidgetState(widget){
		return widget.setState(this.state);
	}

}

export default StateMan;