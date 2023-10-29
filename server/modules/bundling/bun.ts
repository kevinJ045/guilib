import { bunSassLoader } from "./bun.loader.sass";

export async function bundleBun(env: string, options = {}){
	let scriptText: string = "";

	const imports: string[] = [];

	// @ts-ignore
	const bundled = await Bun.build({
		entrypoints: ['./tmp/file.ts'],
		// external: ['*'],
		root: ".",
		plugins: [bunSassLoader, {
			name: 'Import Loader',
			setup(build: any) {
				build.onLoad({ filter: /.*/ }, async ({ path }: { path: string }) => {
					imports.push(path);
				})
			},
		}],
		...options
	});

	if (!bundled.success) {
		console.error("Build failed");
		for (const message of bundled.logs) {
			// Bun will pretty print the message object
			scriptText += `var message = \`${message}\`;document.body.innerHTML = (message);throw new Error(message);`;
			console.error(message);
		}
	}
	
	for (const result of bundled.outputs) {
		// Can be consumed as blobs
		scriptText += (await result.text());
	}

	return {result: scriptText, imports };
}