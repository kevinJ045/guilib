import Widget from "../main/Widget";
import { options } from "../../utils/options";
interface LayoutBuilderOptions extends options {
    queries?: Record<string, Widget[] | (() => Widget | Widget[])>;
}
declare class LayoutBuilder<T extends options = LayoutBuilderOptions> extends Widget<T> {
    constructor(selectedOptions: LayoutBuilderOptions);
    _onMount(parent: Widget): void;
}
export default LayoutBuilder;
