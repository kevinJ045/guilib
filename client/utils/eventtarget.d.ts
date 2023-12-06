export interface EmptyEventObject {
}
export declare class WidgetEventTarget<T extends Event | CustomEvent | EmptyEventObject, U = any> {
    private _events;
    _eventEmitMethod: string;
    constructor();
    on(event: string | string[], eventCallback: (e: T | U, data?: U) => any | void): this;
    once(event: string | string[], eventCallback: (e: T | U, data?: U) => any | void): this;
    off(event: string | string[], eventCallback?: (e: T | U, data?: U) => any | void): this;
    emit(event: string | string[], eventData?: U, init?: EventInit, raw?: boolean): this;
}
