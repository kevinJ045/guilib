import Widget from "../main/Widget";
declare class Canvas extends Widget {
    constructor(selectedOptions: Record<string, any>);
    getContext(dimensions: string): any;
}
export default Canvas;
