
import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

let subcommand = process.argv.slice(2, process.argv.length);

if(subcommand[0]){
	if(subcommand[0] == 'create'){
		fs.mkdirSync('./app');
		fs.mkdirSync('./static');
		fs.mkdirSync('./styles');
		fs.writeFileSync('./app/page.ts', `// add basic component here`);
	}
} else {
	console.log('Project location: '+process.cwd());

	const currentModuleUrl = new URL(import.meta.url);
  const currentModuleDirectory = path.dirname(currentModuleUrl.pathname);

  const serverScriptPath = path.join(currentModuleDirectory, "../", "server", "server.ts");

	console.log('Server location: '+serverScriptPath);
	const child = spawn("bun", ["--watch", "run", serverScriptPath]);

  child.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  child.on("error", (error) => {
    console.error(error.toString());
  });

  child.on("close", (code) => {
    process.exit(code);
  });
}