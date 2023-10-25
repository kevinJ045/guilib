
export async function bundleBun(options = {}){
	let scriptText: string = "";

	const bundled = await Bun.build({
		entrypoints: ['./tmp/file.ts'],
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
		scriptText += (await result.text());
	}

	return scriptText;
}