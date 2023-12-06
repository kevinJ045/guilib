import Component, { buildProps } from "../widgets/main/Component";
export declare function getComponentExports(): any;
export interface RayousExport {
    component: new (props: buildProps | any) => Component;
    layouts: string[];
    path: string;
    props: buildProps;
}
