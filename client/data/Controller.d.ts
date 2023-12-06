declare class Controller<T> {
    value: T;
    type: string;
    taken: any[];
    changeListeners: CallableFunction[];
    constructor(val: T);
    take(taker: any): void;
    isTakenBy(taker: any): boolean;
    set(newValue: T, doNoyNotify?: boolean | CallableFunction): void;
    get(): T;
    onChange(callback: CallableFunction): void;
    notifyChangeListeners(notify?: boolean | CallableFunction): void;
}
export declare class ArrayController<T> extends Controller<Array<T>> {
    push(item: T): this;
    unshift(item: T): this;
    pop(): T;
    shift(): T;
    forEach(callback: (value?: T, index?: number, array?: T[]) => void): this;
    setArray(array: T[]): this;
}
export default Controller;
