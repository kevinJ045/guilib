
import Page0 from "../app/test/async/page";


import Page1 from "../app/layout";

import * as clientInit from "../app/init.client";



const otherPaths = [{"pathname":"/","filename":"app/page.ts"},{"pathname":"/someapifolder","filename":"app/someapifolder/route.ts"},{"pathname":"/home","filename":"app/home/page.ts"},{"pathname":"/test/route","filename":"app/test/route/route.ts"},{"pathname":"/test/route/:id","filename":"app/test/route/[id]/route.ts"},{"pathname":"/test/events","filename":"app/test/events/page.ts"},{"pathname":"/test/promise","filename":"app/test/promise/page.ts"},{"pathname":"/test/props","filename":"app/test/props/page.ts"},{"pathname":"/test/grid","filename":"app/test/grid/page.ts"},{"pathname":"/test/tailwind","filename":"app/test/tailwind/page.ts"},{"pathname":"/test/navigate","filename":"app/test/navigate/page.ts"},{"pathname":"/test/navigate/target","filename":"app/test/navigate/target/page.ts"},{"pathname":"/test/route.json","filename":"app/test/route.json/page.ts"},{"pathname":"/test/ref","filename":"app/test/ref/page.ts"},{"pathname":"/test/model","filename":"app/test/model/page.ts"},{"pathname":"/test/loading","filename":"app/test/loading/page.ts"},{"pathname":"/test/loading/widget","filename":"app/test/loading/widget/page.ts"},{"pathname":"/test/resolve","filename":"app/test/resolve/page.ts"},{"pathname":"/test/building","filename":"app/test/building/page.ts"},{"pathname":"/test/args","filename":"app/test/args/page.ts"},{"pathname":"/test/dev","filename":"app/test/dev/page.ts"},{"pathname":"/test/layout","filename":"app/test/layout/page.ts"},{"pathname":"/test/animation","filename":"app/test/animation/page.ts"},{"pathname":"/test/select","filename":"app/test/select/page.ts"},{"pathname":"/test/live","filename":"app/test/live/page.ts"},{"pathname":"/test/table","filename":"app/test/table/page.ts"},{"pathname":"/lll","filename":"app/lll/page.ts"},{"pathname":"/posts/:id","filename":"app/posts/[id]/page.ts"},{"pathname":"/test/async","filename":"app/test/async/page.ts"}];
let cscript = document.currentScript;
const _navigate = (path, options = {}) => {
	let pathname = path;
	if(typeof options !== "object") options = {};

	if(path.startsWith('./')) pathname = path.replace('./', location.pathname+'/');

	pathname = pathname.replace(/\/\//g, '/');

	if(options.refresh == true){
		return location.pathname = pathname;
	}

	let tries = 0;
	const _startScriptLoad = (notIndex) => {
		tries++;
		document.getElementById('current_script')?.remove();

		let script = document.createElement('script');
		let onlyjs = pathname+'?onlyjs=true';
		let index = pathname+"/index.js".replace(/\/\//g, '/');
		script.src = onlyjs;
		script.id = "current_script";
		script.onload = () => {
			cscript.remove();
			document.body.innerHTML = '';
			window.loadFunction();
			if(options.push !== false) history.pushState(null, false, pathname);
		}
		script.onerror = (e) => {
			e.preventDefault();
			if(tries < 5) _startScriptLoad(true);
		}
		document.head.appendChild(script);
	}

	if(options.inherit == false){
		delete window.lastPage;
	}

	if(options.reinit == true){
		delete window.initted;
		delete window.initResponse;
	}

	window.previousPathname = location.pathname;
	_startScriptLoad();
}
let base_props = { router: { paths: otherPaths, assign: function(path){ location.assign(path) }, navigate: function(path, options){ _navigate(path, options) }, back: function(){ location.back() } }, route: {path: "/test/async", params: {} }}
if(!window.all_possible_paths) window.all_possible_paths = otherPaths;
function start(){
const pages = window.pages || [];
if(!window.pages) window.pages = pages;

if(typeof Page0.title === "string") document.title = Page0.title;

const buildProps = (props: any) => (
	{ ...base_props, wrap(object){ return {...this, ...object}; }, addArgument(...args){if(!Array.isArray(base_props.args)) base_props.args = [];base_props.args.push(...args);return buildProps();}, add(prop, value){base_props[prop] = value; return buildProps();}, ...props }
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

	if(typeof Page1.beforeBuildStart == "function") Page1.beforeBuildStart(buildProps());
if(typeof Page0.beforeBuildStart == "function") Page0.beforeBuildStart(buildProps());
	
	let page0 = new Page0();
let page1 = new Page1();

	if(window.lastPage && Page0.inheritState !== false) page0._inheritState(window.lastPage);

	page0._beforeInit();
page0.emit('beforeInit', { component: page0, props: buildProps() });
page0.initState(buildProps());
page1._beforeInit();
page1.emit('beforeInit', { component: page1, props: buildProps() });
page1.initState(buildProps());

	page0.emit('initState', { component: page0, props: buildProps() });
let made0 = page0.make(buildProps({init: initResponse, page: null}));
page0.emit('buildStart', { widget: made0, component: page0, props: buildProps() });
page1.emit('initState', { component: page1, props: buildProps() });
let made1 = page1.make(buildProps({init: initResponse, page: made0}));
page1.emit('buildStart', { widget: made1, component: page1, props: buildProps() });

	if(Page0.layouts === false){
		made0.to(document.body);
		page0.afterBuild(buildProps({page: made0}), ...(Array.isArray(buildProps().args) ? buildProps().args : []));
		page0.emit('buildEnd', { widget: made0, component: page0, props: buildProps() });
	} else {
		;page0.afterBuild(buildProps({page: made0}), ...(Array.isArray(buildProps().args) ? buildProps().args : []));page0.emit('buildEnd', { widget: made0, component: page0, props: buildProps() });
made1.to(document.body);page1.afterBuild(buildProps({page: made0}), ...(Array.isArray(buildProps().args) ? buildProps().args : []));page1.emit('buildEnd', { widget: made1, component: page1, props: buildProps() });
		
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
}
start()
	