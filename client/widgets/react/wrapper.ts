// @ts-ignore
import * as React from "react";
// @ts-ignore
import ReactDOM from "react-dom/client";

import { options } from "../../extra";
import Widget from "../main/Widget";


export interface ReactWidgetOptions extends options {
	children?: (any)[],
	rootOptions?: ReactDOM.RootOptions
}

Widget.additionRule(
	(child: any) => React.isValidElement(child),
	(parent: Widget, child: any) => { 
		const wrapper = document.createElement('div');
		const root = ReactDOM.createRoot(wrapper, parent.options.rootOptions);
		root.render(child);
		parent.add(wrapper);
	}
)

export class ReactWidget extends Widget<ReactWidgetOptions> {
	
	add(child: any){
		if(React.isValidElement(child)) {
			const wrapper = document.createElement('div');
			const root = ReactDOM.createRoot(wrapper, this.options.rootOptions);
			root.render(child);
			super.add(wrapper);
		} else {
			super.add(child);
		}
		return this;
	}

}