import Page0 from "../app/test/components/page";

import Page1 from "../app/layout";

		import * as clientInit from "../app/init.client";


		

		let loaderOn = false, loader, after = false;

		const buildProps = (props) => (
			{ route: {path: "/test/components", params: {} }, ...props}
		)

		if(loaderOn){
			try{
				if(typeof Loader == "function"){
					loader = Loader(buildProps());
					if(!loader.to){
						throw new TypeError('Loader from undefined is not a returning a function that returns a widget!');
					} else {
						if(loader.options.props?.removeAfterLoad) after = true;
						loader.to(document.body);
					}
				} else {
					throw new TypeError('Loader from undefined is not a returning a function that returns a widget!');
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
page0._beforeInit();
page0.initState(buildProps());
let made0 = page0.make(buildProps({init: initResponse, page: null}));
let page1 = new Page1();
page1._beforeInit();
page1.initState(buildProps());
let made1 = page1.make(buildProps({init: initResponse, page: made0}));
	
			if(Page0.layouts === false){
				made0.to(document.body);
			} else {
				page0.afterBuild(buildProps({page: made0}));
made1.to(document.body)
			}
	
			if(typeof page0.afterBuild == "function") page0.afterBuild(buildProps({page: made0}));
			if(typeof clientInit.after == "function") clientInit.after(buildProps({page: made0}));
			if(after && loaderOn) loader.remove();
		});
	