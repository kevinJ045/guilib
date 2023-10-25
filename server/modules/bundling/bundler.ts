import { webpack } from "webpack";
import { route } from "../routing/routes";
import path from "node:path";
import { existsSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { WebpackBuild } from "./webpack";
import { bundleBun } from "./bun";

function makeImportFile(route: route, ...filepath: string[]){
	const script = `${filepath.map((filepath, index) => 
		`import page${index} from "../${filepath.replace(/\.ts$/, '')}";\n`).join('\n')}

		${filepath.map((filepath, index) => `let made${index} = new page${index}().build({ route: {path: "${route.path}", params: ${JSON.stringify(route.params)} }, page: ${index > 0 && index < filepath.length-2 ? 'made'+(index-1) : 'null'} });`).join('\n')}

		${filepath.map((file, index) => `${index+1 == filepath.length ? `made${index}.to(document.body)` : ``}`).join('\n')}
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

export async function templateHtml(scripts: string[]){
	return `<html><body>${scripts.map((script, index) => `<script type="module">${script}</script>`).join('')}</body></html>`
}