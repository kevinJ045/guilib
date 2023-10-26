import Store from "../data/Store.js";
import Widget from "../widgets/main/Widget.js";
import { isWidget } from "./type.js";


class StateMan {

	state = new Store();

	setState(newState) {
    if (this.sealed === true) return this;
		const old = { ...this.state.getStore() };
    this.state.getStore({ ...old, ...newState });
		if(this._onStateChange) this._onStateChange({ old, current: this.state.getStore(), new: newState });
    return this;
  }

  getState() {
    return this.state.getStore();
  }

	switchWidgetState(widget){
		return widget.setStore(this.state);
	}

}

export default StateMan;