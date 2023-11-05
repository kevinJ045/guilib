import { webpack } from "webpack";
import { route } from "../routing/routes";
import path from "node:path";
import { existsSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { WebpackBuild } from "./webpack";
import { bundleBun } from "./bun";

export type portAndEnv = { port: number, env: 'dev' | 'prod' };

function makeImportFile(route: route, paths: any, ...filepath: string[]){
	const script = `${filepath.map((filepath, index) => 
		`import Page${index} from "../${filepath.replace(/\.ts$/, '')}";\n`).join('\n')}
		${existsSync('./app/init.client.ts') || existsSync('./app/init.client.js') ? `import * as clientInit from "../app/init.client";\n` : 'const clientInit = { init: () => {}, after: () => {} };'}

		${route.loader ? 'import Loader from "../'+route.loader+'"' : ''}

		let loaderOn = ${route.loader ? `"${route.loader}"` : 'false'}, loader, after = false;

		const otherPaths = ${JSON.stringify(paths)};

		const buildProps = (props) => (
			{ router: { paths: otherPaths, assign: function(path){ location.assign(path) }, navigate: function(path){ location.pathname = path }, back: function(){ location.back() } }, route: {path: "${route.path}", params: ${JSON.stringify(route.params)} }, ...props}
		)

		if(loaderOn){
			try{
				if(typeof Loader == "function"){
					loader = Loader(buildProps());
					if(!loader.to){
						throw new TypeError('Loader from ${route.loader} is not a returning a function that returns a widget!');
					} else {
						if(loader.options.props?.removeAfterLoad) after = true;
						loader.to(document.body);
					}
				} else {
					throw new TypeError('Loader from ${route.loader} is not a returning a function that returns a widget!');
				}
			} catch(e){
				document.write()
				throw e;
			}
		}

		window.addEventListener('load', () => {
			if(!after && loaderOn) loader.remove();

			const initResponse = typeof clientInit.init == "function" ? clientInit.init(buildProps()) || {} : {};
	
			${filepath.map((filepath, index) => `let page${index} = new Page${index}();\npage${index}._beforeInit();\npage${index}.initState(buildProps());\nlet made${index} = page${index}.make(buildProps({init: initResponse, page: ${index > 0 && index < filepath.length-2 ? 'made'+(index-1) : 'null'}}));`).join('\n')}
	
			if(Page0.layouts === false){
				made0.to(document.body);
			} else {
				${filepath.map((file, index) => `${index+1 == filepath.length ? `made${index}.to(document.body)` : `page${index}.afterBuild(buildProps({page: made0}));`}`).join('\n')}
			}
	
			if(typeof page0.afterBuild == "function") page0.afterBuild(buildProps({page: made0}));
			if(typeof clientInit.after == "function") clientInit.after(buildProps({page: made0}));
			if(after && loaderOn) loader.remove();
		});
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
				console.log(data);
				if(imports.indexOf(data.path) > -1) location.reload();
			} catch(e){}
		});
	})();</script>`;
}

export async function bundle(route: route, {port, env}: portAndEnv, paths: Record<any, any>){
	const scripts: string[] = [];

	makeImportFile(route, paths, route.correspondingFile, ...(route.layouts ? route.layouts : []));

	let file = await bundleBun(env);

	scripts.push(file.result);

	return await templateHtml(scripts, env == 'dev' ? getListenerSocket(port, file) : '');
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
	return `<html ${await getAttrs('html')}>${await getHead()}<body ${await getAttrs('body')}>${scripts.map((script, index) => `<script type="module">${script}</script>`).join('')}${additional}</body></html>`
}