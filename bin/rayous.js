
import { spawn } from "node:child_process";

let subcommand = process.argv.slice(2, process.argv.length);

if(subcommand[0]){
	
} else {
	console.log(process.cwd());

	const child = spawn("bun", ["--watch", "run", "server/server.ts"]);

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