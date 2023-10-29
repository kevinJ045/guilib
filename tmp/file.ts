import Page0 from "../app/test/loading/page";

import Page1 from "../app/layout";

		import * as clientInit from "../app/init.client";


		import Loader from "../app/test/loading/loading.ts"

		let loaderOn = "app/test/loading/loading.ts", loader, after = false;

		const buildProps = (props) => (
			{ route: {path: "/test/loading", params: {} }, ...props}
		)

		if(loaderOn){
			try{
				if(typeof Loader == "function"){
					loader = Loader(buildProps());
					if(!loader.to){
						throw new TypeError('Loader from app/test/loading/loading.ts is not a returning a function that returns a widget!');
					} else {
						if(loader.options.props?.removeAfterLoad) after = true;
						loader.to(document.body);
					}
				} else {
					throw new TypeError('Loader from app/test/loading/loading.ts is not a returning a function that returns a widget!');
				}
			} catch(e){
				document.write()
				throw e;
			}
		}

		window.addEventListener('load', () => {
			if(!after && loaderOn) loader.remove();

			const initResponse = typeof clientInit.init == "function" ? clientInit.init(buildProps()) || {} : {};
	
			let page0 = new Page0();
let made0 = page0.build(buildProps({init: initResponse, page: null}));
let page1 = new Page1();
let made1 = page1.build(buildProps({init: initResponse, page: made0}));
	
			
made1.to(document.body)
	
			if(typeof page0.afterBuild == "function") page0.afterBuild(buildProps({page: made0}));
			if(typeof clientInit.after == "function") clientInit.after(buildProps({page: made0}));
			if(after && loaderOn) loader.remove();
		});
	