
import { spawn } from "node:child_process";
import path from "node:path";

let subcommand = process.argv.slice(2, process.argv.length);

if(subcommand[0]){
	
} else {
	console.log('Project location: '+process.cwd());

	const currentModuleUrl = new URL(import.meta.url);
  const currentModuleDirectory = path.dirname(currentModuleUrl.pathname);

  const serverScriptPath = path.join(currentModuleDirectory, "server", "server.ts");

	console.log('Server location: '+serverScriptPath);
	const child = spawn("bun", ["--watch", "run", serverScriptPath]);

  child.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  child.on("error", (error) => {
    console.error(`${error}`);
  });

  child.on("close", (code) => {
    process.exit(code);
  });
}