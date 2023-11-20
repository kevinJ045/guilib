import Component, { buildProps } from "../widgets/main/Component";

export function getComponentExports(){
	// @ts-ignore
	return window.__rayous_exports;
}

export interface RayousExport {
	component: new (props: buildProps | any) => Component,
	layouts: string[],
	path: string,
	props: buildProps
}
