import { webpack } from "webpack";
import { route } from "../routing/routes";
import path from "node:path";
import { existsSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { WebpackBuild } from "./webpack";
import { bundleBun } from "./bun";

function makeImportFile(route: route, ...filepath: string[]){
	const script = `${filepath.map((filepath, index) => 
		`import Page${index} from "../${filepath.replace(/\.ts$/, '')}";\n`).join('\n')}
		${existsSync('./app/init.client.ts') || existsSync('./app/init.client.js') ? `import * as clientInit from "../app/init.client";\n` : 'const clientInit = { init: () => {}, after: () => {} };'}

		window.addEventListener('load', () => {
			const buildProps = (props) => (
				{ route: {path: "${route.path}", params: ${JSON.stringify(route.params)} }, ...props}
			)

			const initResponse = typeof clientInit.init == "function" ? clientInit.init(buildProps) || {} : {};
	
			${filepath.map((filepath, index) => `let page${index} = new Page${index}();\nlet made${index} = page${index}.build(buildProps({init: initResponse, page: ${index > 0 && index < filepath.length-2 ? 'made'+(index-1) : 'null'}}));`).join('\n')}
	
			${filepath.map((file, index) => `${index+1 == filepath.length ? `made${index}.to(document.body)` : ``}`).join('\n')}
	
			if(typeof page0.afterBuild == "function") page0.afterBuild(buildProps({page: made0}));
			if(typeof clientInit.after == "function") clientInit.after(buildProps({page: made0}));
		});
	`;
	if(!existsSync('./tmp')) mkdirSync('./tmp');
	writeFileSync('./tmp/file.ts', script);
}


export async function bundle(route: route){
	const scripts: string[] = [];

	makeImportFile(route, route.correspondingFile, ...(route.layouts ? route.layouts : []));

	scripts.push(await bundleBun());

	return await templateHtml(scripts);
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

export async function templateHtml(scripts: string[]){
	return `<html>${await getHead()}<body>${scripts.map((script, index) => `<script type="module">${script}</script>`).join('')}</body></html>`
}