
import Page0 from "../app/test/animation/page";


import Page1 from "../app/layout";

import * as clientInit from "../app/init.client";


let cscript = document.currentScript;
const pages = window.pages || [];
if(!window.pages) window.pages = pages;

if(typeof Page0.title === "string") document.title = Page0.title;

const otherPaths = ["/","/someapifolder","/home","/test/route","/test/route/:id","/test/promise","/test/props","/test/grid","/test/tailwind","/test/navigate","/test/navigate/target","/test/route.json","/test/ref","/test/model","/test/loading","/test/loading/widget","/test/layout","/test/animation","/test/select","/test/live","/test/table","/lll","/posts/:id"];

const _navigate = (path, options = {}) => {
	let pathname = path;
	if(typeof options !== "object") options = {};

	if(path.startsWith('./')) pathname = path.replace('./', location.pathname+'/');

	pathname = pathname.replace(/\/\//g, '/');

	if(options.refresh == true){
		return location.pathname = pathname;
	}

	document.getElementById('current_script')?.remove();

	let script = document.createElement('script');
	script.src = pathname+'?onlyjs=true';
	script.id = "current_script";
	script.onload = () => {
		cscript.remove();
		document.body.innerHTML = '';
		window.loadFunction();
		if(options.push !== false) history.pushState(null, false, pathname);
	}

	if(options.inherit == false){
		delete window.lastPage;
	}

	if(options.reinit == true){
		delete window.initted;
		delete window.initResponse;
	}

	window.previousPathname = location.pathname;
	document.head.appendChild(script);
}

const buildProps = (props: any) => (
	{ router: { paths: otherPaths, assign: function(path){ location.assign(path) }, navigate: function(path, options){ _navigate(path, options) }, back: function(){ location.back() } }, route: {path: "/test/animation", params: {} }, ...props}
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
		document.head.appendChild(script);
	});
}

window.loadFunction = () => {
	if(!window.after && window.loaderOn) window.loader.remove();	
	const initResponse = window.initResponse ? window.initResponse : typeof clientInit.init == "function" ? clientInit.init(buildProps()) || {} : {};
	if(!window.initResponse) window.initResponse = initResponse;

	let page0 = new Page0();
page0._beforeInit();
page0.initState(buildProps());
let page1 = new Page1();
page1._beforeInit();
page1.initState(buildProps());
	

	if(window.lastPage && Page0.inheritState !== false) page0._inheritState(window.lastPage);

	let made0 = page0.make(buildProps({init: initResponse, page: null}));
let made1 = page1.make(buildProps({init: initResponse, page: made0}));

	if(Page0.layouts === false){
		made0.to(document.body);
		page0.afterBuild(buildProps({page: made0}));
	} else {
		page0.afterBuild(buildProps({page: made0}));
made1.to(document.body)
	}

	

	pages.push(page0)
pages.push(page1);
	window.lastPage = page0;

	if(typeof clientInit.after == "function" && !window.initted) clientInit.after(buildProps({page: made0}));
	if(window.after && window.loaderOn) window.loader.remove();
	window.initted = true;
}

window.popStateListener = (e) => {
	if(window.previousPathname){
		_navigate(window.previousPathname, { push: false });
	} else {
		_navigate(location.pathname, { push: false });
	}
};
if(!window.popStateListenerListening) window.addEventListener('popstate', window.popStateListener);
window.popStateListenerListening = true;

window.addEventListener('load', window.loadFunction);
	