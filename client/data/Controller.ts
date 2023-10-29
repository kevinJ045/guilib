class Controller<T> {
  value: T;
  type: string;
  taken: any[] = [];
  changeListeners: CallableFunction[] = [];

  constructor(val: T) {
    this.value = val;
    this.type = typeof val;
  }

  take(taker: any){
    this.taken.push(taker);
  }

  isTakenBy(taker: any){
    return this.taken.indexOf(taker) > -1;
  }

  set(newValue: T, doNoyNotify: boolean | CallableFunction = false) {
    this.value = newValue;
    if(doNoyNotify !== true)
    this.notifyChangeListeners(typeof doNoyNotify == "function" ? doNoyNotify : false);
  }

  get() {
    return this.value;
  }

  onChange(callback: CallableFunction) {
    this.changeListeners.push(callback);
  }

  notifyChangeListeners(notify: boolean | CallableFunction = false) {
    let ignoreIndex = typeof notify == "function" ? this.changeListeners.indexOf(notify) : -1;
    this.changeListeners.forEach((callback, index) => {
      if(index == ignoreIndex) return;
      callback(this.value);
    });
  }
}

export default Controller;