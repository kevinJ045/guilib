import Page0 from "../app/page";

import Page1 from "../app/layout";

		import * as clientInit from "../app/init.client";


		window.addEventListener('load', () => {
			const buildProps = (props) => (
				{ route: {path: "/", params: {} }, ...props}
			)

			const initResponse = typeof clientInit.init == "function" ? clientInit.init(buildProps) || {} : {};
	
			let page0 = new Page0();
let made0 = page0.build(buildProps({init: initResponse, page: null}));
let page1 = new Page1();
let made1 = page1.build(buildProps({init: initResponse, page: made0}));
	
			
made1.to(document.body)
	
			if(typeof page0.afterBuild == "function") page0.afterBuild(buildProps({page: made0}));
			if(typeof clientInit.after == "function") clientInit.after(buildProps({page: made0}));
		});
	