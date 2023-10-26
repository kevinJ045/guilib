
import child_process from "node:child_process";

let subcommand = process.argv.slice(2, process.argv.length);
if(subcommand[0]){
	if(subcommand[0] == 'create'){
	}
} else {
	child_process.spawn('bun --watch run ./server/server.ts');
}