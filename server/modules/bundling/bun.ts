import { bunImageLoader } from "./bun.loader.image";
import { bunSassLoader } from "./bun.loader.sass";
import { bunTailwindLoader } from "./bun.loader.tailwind";

export async function bundleBun(env: string, options: any = {}){
	let scriptText: string = "";

	const imports: string[] = [];

	const plugins = [bunSassLoader, bunTailwindLoader, bunImageLoader, {
		name: 'Import Loader',
		setup(build: any) {
			build.onLoad({ filter: /.*/ }, async ({ path }: { path: string }) => {
				imports.push(path);
			})
		},
	}];

	if(options.nocss){
		plugins.shift();
	}

	// @ts-ignore
	const bundled = await Bun.build({
		entrypoints: [(options.file || './tmp/build.js')],
		// external: ['*'],
		root: ".",
		minify: options.minify || env == 'prod',
		plugins,
		...options
	});

	if (!bundled.success) {
		console.error("Build failed");
		for (const message of bundled.logs) {
			// Bun will pretty print the message object
			scriptText += `var message = \`${message}\`;document.write(message);throw new Error(message);`;
			console.error(message);
		}
	}
	
	for (const result of bundled.outputs) {
		// Can be consumed as blobs
		scriptText += (await result.text());
	}

	return {result: scriptText, imports };
}