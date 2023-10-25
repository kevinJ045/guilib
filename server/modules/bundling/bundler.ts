import { webpack } from "webpack";
import { route } from "../routing/routes";
import path from "node:path";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { WebpackBuild } from "./webpack";

export async function bundleOne(options: object, ...filepath: string[]){
	let scriptText = "";

	console.log(filepath);

	const script = `${filepath.map((filepath, index) => `import page${index} from "../${filepath}";`).join('\n')}\n${readFileSync(existsSync('./app/init.ts') ? './app/init.ts' : './app/init.js').toString()};`;
	if(!existsSync('./tmp')) mkdirSync('./tmp');
	console.log(script);
	let file = await Bun.write('./tmp/file.ts', script);

	// console.log(readFileSync(route.correspondingFile).toString())

	const bundled = await Bun.build({
		entrypoints: ['./tmp/file.ts', ...filepath],
		// external: ['*'],
		root: ".",
		...options
	});
	
	if (!bundled.success) {
		console.error("Build failed");
		for (const message of bundled.logs) {
			// Bun will pretty print the message object
			console.error(message);
		}
	}
	
	for (const result of bundled.outputs) {
		// Can be consumed as blobs
		scriptText += await result.text();
	}

	return scriptText;
}

export async function bundle(route: route){
	const scripts: string[] = [];

	scripts.push(await WebpackBuild('./'+route.correspondingFile, {}) as string);

	return await templateHtml(scripts);
}

export async function templateHtml(scripts: string[]){
	return `<html><body><div id="root"></div>${scripts.map(script => `<script>${script}</script>`).join('')}</body></html>`
}