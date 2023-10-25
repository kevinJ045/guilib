import { webpack } from "webpack";
import { route } from "../routing/routes";
import path from "node:path";
import { existsSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { WebpackBuild } from "./webpack";

function makeImportFile(...filepath: string[]){
	const script = `${filepath.map((filepath, index) => `import page${index} from "../${filepath.replace(/\.ts$/, '')}";\n`).join('\n')}\nlet make = new page0().build({}, { route: {} });make.to(document.body)`;
	if(!existsSync('./tmp')) mkdirSync('./tmp');
	let file = writeFileSync('./tmp/file.ts', script);
}


export async function bundle(route: route){
	const scripts: string[] = [];

	makeImportFile(route.correspondingFile);

	scripts.push(await WebpackBuild('./tmp/file.ts', {})  as string);

	return await templateHtml(scripts);
}

export async function templateHtml(scripts: string[]){
	return `<html><body>${scripts.map((script, index) => `<script type="module">${script}</script>`).join('')}</body></html>`
}