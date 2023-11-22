import { webpack } from "webpack";
import { route } from "../routing/routes";
import path from "node:path";
import { existsSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { WebpackBuild } from "./webpack";
import { bundleBun } from "./bun";

export type portAndEnv = { port: number, env: 'dev' | 'prod' };

function makeImportFile(options: Record<string, any>, env: portAndEnv, route: route, paths: any, ...files: string[]){
	const filepath = Array.from(files);
	const script = `${filepath.map((filepath, index) => 
		`
import Page${index} from "../${filepath.replace(/\.ts$/, '')}";\n`).join('\n')}
${existsSync('./app/init.client.ts') || existsSync('./app/init.client.js') ? `import * as clientInit from "../app/init.client";\n` : 'const clientInit = { init: () => {}, after: () => {} };'}


const otherPaths = ${JSON.stringify(paths)};
let base_props = { router: { paths: otherPaths, assign: function(path){ location.assign(path) }, navigate: function(path, options){ _navigate(path, options) }, back: function(){ location.back() } }, route: {path: "${route.path}", params: ${JSON.stringify(route.params)} }}

function start(){
let cscript = document.currentScript;
const pages = window.pages || [];
if(!window.pages) window.pages = pages;

if(typeof Page0.title === "string") document.title = Page0.title;

const _navigate = (path, options = {}) => {
	let pathname = path;
	if(typeof options !== "object") options = {};

	if(path.startsWith('./')) pathname = path.replace('./', location.pathname+'/');

	pathname = pathname.replace(/\\/\\//g, '/');

	if(options.refresh == true){
		return location.pathname = pathname;
	}

	let tries = 0;
	const _startScriptLoad = (notIndex) => {
		tries++;
		document.getElementById('current_script')?.remove();

		let script = document.createElement('script');
		let onlyjs = pathname+'?onlyjs=true';
		let index = pathname+"/index.js".replace(/\\/\\//g, '/');
		script.src = ${env.env == 'prod' ? `notIndex ? onlyjs : index` : `onlyjs`};
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

	${filepath.map((file, index) => `if(typeof Page${(filepath.length-1) - index}.beforeBuildStart == "function") Page${(filepath.length-1) - index}.beforeBuildStart(buildProps());`).join('\n')}
	
	${filepath.map((filepath, index) => `let page${index} = new Page${index}();\npage${index}._beforeInit();\npage${index}.initState(buildProps());`).join('\n')}

	if(window.lastPage && Page0.inheritState !== false) page0._inheritState(window.lastPage);

	${filepath.map((filepath, index) => `let made${index} = page${index}.make(buildProps({init: initResponse, page: ${index > 0 && index < filepath.length-2 ? 'made'+(index-1) : 'null'}}));`).join('\n')}

	if(Page0.layouts === false){
		made0.to(document.body);
		page0.afterBuild(buildProps({page: made0}), ...(Array.isArray(buildProps().args) ? buildProps().args : []));
	} else {
		${filepath.map((file, index) => `${index+1 == filepath.length ? `made${index}.to(document.body)` : `page${index}.afterBuild(buildProps({page: made0}), ...(Array.isArray(buildProps().args) ? buildProps().args : []));`}`).join('\n')}
		${filepath.length == 1 ? 'page0.afterBuild(buildProps({page: made0}), ...(Array.isArray(buildProps().args) ? buildProps().args : []));' : ''}
	}

	

	${filepath.map((file, index) => `pages.push(page${index})`).join('\n')};
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
${options.export ? `(() => {
	if(!window.__rayous_exports) window.__rayous_exports = {};
	window.__rayous_exports['${route.correspondingFile}'] = {
		component: Page0,
		layouts: ${route.layouts ? JSON.stringify(route.layouts) : '[]'},
		path: "${route.path}",
		props: base_props
	};
})()` : 'start()'}
	`;
	if(!existsSync('./tmp')) mkdirSync('./tmp');
	writeFileSync('./tmp/file.ts', script);
	return script;
}

export function getListenerSocket(port: number, file : { imports: string[] }){
	return `<script>(function(){
		const imports = ${JSON.stringify(file.imports)};
		const origin = location.hostname+(location.port ? ':'+location.port : '');
		const socket = new WebSocket("ws://"+origin);
		socket.addEventListener('message', event => {
			try{
				const data = JSON.parse(event.data);
				if(imports.indexOf(data.path) > -1) return location.reload();
				else {
					let styles = document.head.getElementsByTagName('style');
					Array.from(styles).forEach(style => {
						if(style.pathname == data.path){
							fetch('/__css__?path='+data.path)
							.then(r => r.text())
							.then(css => {
								style.textContent = css;
							});
						}
					});
				}
			} catch(e){
				console.log(e);
			}
		});
	})();</script>`;
}

function makeLoaderFile(route: route){
	 let script = `
	${route.loader ? 'import Loader from "../'+route.loader+'"' : ''}
	(function(){

let loaderOn = ${route.loader ? `"${route.loader}"` : 'false'}, loader, after = false;


if(loaderOn){
	try{
		if(typeof Loader == "function"){
			loader = Loader({ route: {path: "${route.path}", params: ${JSON.stringify(route.params)} }});
			if(typeof loader.to == "function"){
				loader.to(document.body);
			} else if(!loader instanceof HTMLElement){
				throw new TypeError('Loader from ${route.loader} is not a returning a function that returns a widget!');
			} else {
				if(loader?.removeAfterLoad) after = true;
				(document.body || document.rootElement || document)
				.appendChild(loader);
			}
		} else {
			throw new TypeError('Loader from ${route.loader} is not a returning a function that returns a widget!');
		}
	} catch(e){
		document.write(e);
		throw e;
	}
}
window.loader = loader;
window.loaderAfter = after;
window.loaderOn = loaderOn;
})();`;
	if(!existsSync('./tmp')) mkdirSync('./tmp');
	writeFileSync('./tmp/loader.ts', script);
	return script;
}

export async function bundle(route: route, {port, env}: portAndEnv, paths: Record<any, any>, params: Record<string, any> = {}){
	const scripts: string[] = [];

	makeImportFile({export: params.export == 'true'}, {port, env}, route, paths, route.correspondingFile, ...(route.layouts ? route.layouts : []));

	let file = await bundleBun(env, {minify: params.minify == 'true'});

	if(route.loader) makeLoaderFile(route);
	let loader = route.loader ? `body::(function(){${(await bundleBun(env, {minify: params.minify == 'true', file: './tmp/loader.ts'})).result}})();` : '';

	scripts.push(`(function(){${file.result}})();`);
	let origin = params.origin, otherOrigin = null;
	if(origin && origin.match('|')){
		otherOrigin = origin.split('|')[1];
		origin = origin.split('|')[0];
	}
	return params.onlyjs == 'true' ? scripts.join('\n') : await templateHtml(params.script == 'true' ? [loader, ...scripts] : [loader], (params.script == 'true' ? '' : '<script src="'+(origin || '?onlyjs=true'+(params.minify == 'true' ? '&minify=true' : ''))+'" '+(otherOrigin ? ` onerror="let s=document.createElement(\'script\');s.src='${otherOrigin}';document.head.appendChild(s);this.remove();"` : '')+'></script>')+(env == 'dev' ? getListenerSocket(port, file) : ''));
}

export async function getHead() {
	let html = "<head>";
	// @ts-ignore
	const config = await import(path.join(process.cwd(), 'rayous.json'));
	
	if(config.title){
		html += '<title>'+config.title+'</title>';
	}

	if(config.meta){
		for(let i in config.meta){
			html += '<meta name="'+i+'" content="'+config.meta[i]+'">';
		}
	}

	if(config.links){
		for(let link of config.links){
			let type = "stylesheet", href = link;
			if(typeof link == "object"){
				type = link.type;
				href = link.link;
			}
			html += `<link rel="${type}" href="${href}" />`;
		}
	}

	if(config.scripts){
		for(let script of config.scripts){
			html += `<script src="${script}"></script>`;
		}
	}

	html += "</head>";

	return html;
}

async function getAttrs(el: string){
	const config = await import(path.join(process.cwd(), 'rayous.json'));
	let attrs: string[] = [];
	if(config[el]){
		for(let i in config[el]){
			let q = '"';
			if(config[el][i].match('"')) q = "'";
			attrs.push(`${i}=${q}${config[el][i]}${q}`);
		}
	}
	return attrs.join(' ');
}

export async function templateHtml(scripts: string[], additional: string = ""){
	return `<html ${await getAttrs('html')}>${await getHead()}${scripts.filter(item => !item.startsWith('body::')).map((script, index) => `<script _type="base">${script}</script>`).join('')}${additional}<body ${await getAttrs('body')}>${scripts.filter(item => item.startsWith('body::')).map((script, index) => `<script _type="base">${script.replace('body::', '')}</script>`).join('')}</body></html>`
}