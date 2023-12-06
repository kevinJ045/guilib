import Widget from "../widgets/main/Widget";
declare const htmlPseudos: string[];
declare function filteredChildren(children: Widget | any | Widget[], makeOne?: boolean, giveNull?: boolean): any;
declare function resolveSubchild(element: Widget, child?: string | null): Widget<import("./options").options>;
export { htmlPseudos, filteredChildren, resolveSubchild };
