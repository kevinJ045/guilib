
import Page0 from "../app/test/loading/page";


import Page1 from "../app/layout";

import * as clientInit from "../app/init.client";


let cscript = document.currentScript;
const pages = [];

if(typeof Page0.title === "string") document.title = Page0.title;

const otherPaths = ["/","/someapifolder","/home","/test/route","/test/route/:id","/test/promise","/test/props","/test/grid","/test/tailwind","/test/ref","/test/model","/test/loading","/test/layout","/test/animation","/test/select","/test/live","/test/table","/lll","/posts/:id"];

const buildProps = (props: any) => (
	{ router: { paths: otherPaths, assign: function(path){ location.assign(path) }, navigate: function(path){ location.pathname = path; }, back: function(){ location.back() } }, route: {path: "/test/loading", params: {} }, ...props}
)


if(typeof Page0.title === "function") document.title = Page0.title(buildProps({page: made0}));
if(Array.isArray(Page0.links)){
	Page0.links.forEach(url => {
		let link = document.createElement('link');
		if(typeof url == 'string'){
			link.rel = 'stylesheet';
			link.href = url
		} else {
			if(url.rel) link.rel = url.rel;
			if(url.href) link.href = url.href;
		}
		document.head.appendChild(link);
	});
}

if(Array.isArray(Page0.scripts)){
	Page0.scripts.forEach(url => {
		let script = document.createElement('script');
		script.src = url;
		document.body.appendChild(script);
	});
}

window.loadFunction = () => {
	if(!window.after && window.loaderOn) window.loader.remove();	
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

	pages.push(page0)
pages.push(page1)

	if(typeof clientInit.after == "function") clientInit.after(buildProps({page: made0}));
	if(window.after && window.loaderOn) window.loader.remove();
}

window.addEventListener('load', window.loadFunction);
	