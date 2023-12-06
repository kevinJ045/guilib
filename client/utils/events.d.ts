import Widget from "../widgets/main/Widget";
interface WidgetEvent<T = any> {
    prevent: () => void;
    stop: () => void;
    key: {
        code: number;
        name: string;
        output: string;
        ctrl: boolean;
        alt: boolean;
        meta: boolean;
        shift: boolean;
    };
    pos: {
        x: number;
        y: number;
    };
    offset: {
        x: number;
        y: number;
    };
    name: string;
    data?: any;
    dataTransfer?: any;
    target: Widget;
    original: T;
}
declare function createEventData(e: any, name: string, widget?: Widget | null): {
    prevent: () => any;
    stop: () => any;
    key: {
        code: any;
        name: any;
        output: any;
        ctrl: any;
        shift: any;
        alt: any;
        meta: any;
    };
    pos: {
        x: any;
        y: any;
    };
    offset: {
        x: any;
        y: any;
    };
    name: string;
    data: any;
    dataTransfer: any;
    target: Widget<{
        element: {
            raw: HTMLElement | import("../widgets/_ghost/WidgetProps").HTMLGUIWidget;
        };
    }>;
    original: any;
};
declare function getEventName(event: string): string;
declare function onHold(widget: Widget, callback: any, duration: number): Widget<import("./options").options>;
declare function onTextInput(widget: Widget, callback: any): void;
export type { WidgetEvent };
export { onHold, onTextInput, createEventData, getEventName };
