declare class Store extends EventTarget {
    stores: Record<string, Record<string, any>>;
    constructor(state?: Record<string, any>);
    set(key: string, value: any, store?: string): void;
    get(key: string, store?: string): any;
    getStore(store?: string, id?: string | null): {
        [x: string]: any;
    };
    setStore(state: Record<string, any>, store?: string): void;
    getStores(): Record<string, Record<string, any>>;
    inherit(store: Store): void;
}
export default Store;
