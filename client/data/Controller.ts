class Controller<T> {
  value: T;
  type: string;
  private taken: any[] = [];
  private changeListeners: CallableFunction[] = [];

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

  unTake(taker: any){
    this.taken.splice(this.taken.indexOf(taker), 1);
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
    return this;
  }

  offChange(callback: CallableFunction){
    this.changeListeners.splice(this.changeListeners.indexOf(callback), 1);
    return this;
  }

  notifyChangeListeners(notify: boolean | CallableFunction = false) {
    let ignoreIndex = typeof notify == "function" ? this.changeListeners.indexOf(notify) : -1;
    this.changeListeners.forEach((callback, index) => {
      if(index == ignoreIndex) return;
      callback(this.value);
    });
  }
}

export class ArrayController<T> extends Controller<Array<T>>{
  push(...items: T[]){
    this.value.push(...items);
    this.notifyChangeListeners();
    return this;
  }
  unshift(...items: T[]){
    this.value.unshift(...items);
    this.notifyChangeListeners();
    return this;
  }
  pop(){
    let popped = this.value.pop();
    this.notifyChangeListeners();
    return popped;
  }
  shift(){
    let popped = this.value.shift();
    this.notifyChangeListeners();
    return popped;
  }
  forEach(callback: (value?: T, index?: number, array?: T[]) => void){
    this.value.forEach(callback);
    return this;
  }
  setArray(array: T[]){
    this.set(array);
    return this;
  }
  map(callback: (item: T, index?: number, array?: T[]) => any, castToNew = false){
    const newArray = this.get().map(callback);
    return castToNew ? new ArrayController(newArray) : this.setArray(newArray);
  }
  filter(callback: (item: T, index?: number, array?: T[]) => any, castToNew = false){
    const newArray = this.get().filter(callback);
    return castToNew ? new ArrayController(newArray) : this.setArray(newArray);
  }
  find(callback: (item: T, index?: number, array?: T[]) => any){
    return this.get().find(callback);
  }
  indexOf(item: T){
    return this.get().indexOf(item);
  }
  includes(item: T){
    return this.get().includes(item);
  }
  at(index: number){
    return this.get().at(index);
  }
  join(separator?: string){
    return this.get().join(separator);
  }
  splice(start: number, deleteCount?: number | undefined, castToNew = false, fromOmitted = false){
    const newArray = this.get().splice(start, deleteCount);
    return castToNew ? new ArrayController(fromOmitted ? newArray : this.get()) : this.setArray(fromOmitted ? newArray : this.get());
  }
  slice(start: number, deleteCount?: number | undefined, castToNew = false){
    const newArray = this.get().slice(start, deleteCount);
    return castToNew ? new ArrayController(newArray) : this.setArray(newArray)
  }
  sort(callback: (itemA: T, itemB: T) => any, castToNew = false){
    const newArray = this.get().sort(callback);
    return castToNew ? new ArrayController(newArray) : this.setArray(newArray);
  }
  reverse(castToNew = false){
    const newArray = this.get().reverse();
    return castToNew ? new ArrayController(newArray) : this.setArray(newArray);
  }
  copy(controller: ArrayController<T>){
    this.set(controller.get());
    return this;
  }
}

export default Controller;