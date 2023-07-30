class Controller {
  constructor(val) {
    this.value = val;
    this.changeListeners = [];
  }

  set(newValue, doNoyNotify) {
    this.value = newValue;
    if(!doNoyNotify) this.notifyChangeListeners();
  }

  get() {
    return this.value;
  }

  onChange(callback) {
    this.changeListeners.push(callback);
  }

  notifyChangeListeners() {
    this.changeListeners.forEach(callback => {
      callback(this.value);
    });
  }
}

export default Controller;