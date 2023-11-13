#!/usr/bin/env node

import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let subcommand = process.argv.slice(2, process.argv.length);

const currentModuleUrl = new URL(import.meta.url);
const currentModuleDirectory = path.dirname(currentModuleUrl.pathname);

const serverScriptPath = path.join(currentModuleDirectory, "../", "server", "server.ts");
const builderScriptPath = path.join(currentModuleDirectory, "../", "server", "build.ts");

let buncommand = 'npx';
let buncommand_1 = 'bun';
if(process.env.BUN_INSTALL || fs.existsSync('/bin/bun') || fs.existsSync('/usr/bin/bun')){
	buncommand = 'bun';
	buncommand_1 = '';
}
const rbun = (array) => buncommand_1.length ? [buncommand_1].concat(array) : array;

function resolvePath(routePath){
	if(!routePath.startsWith('/')) routePath = '/'+routePath;
	return 'app'+routePath.replace(/(\:(\w+))/g, '[$2]');
}

function createFile(filename, filecontent){
	console.log('Creating file:', filename);
	if(filecontent){
		fs.writeFileSync(filename, filecontent);
	} else {
		fs.mkdirSync(filename);
	}
}

if(subcommand[0]){
	if(subcommand[0] == 'create'){
		console.log('Starting create...');
		let options = {
			ts: true,
			tailwind: true,
			name: "App",
			author: "",
			envprod: false
		};

		function createFiles(){
			createFile('./app');
			createFile('./static');
			createFile('./styles');
			createFile('./app/page.ts', `import { Component, Text, Widget } from "rayous";
	import { buildProps } from "rayous/extra";

	export default class extends Component {
		build(props: buildProps) {
			return new Widget({ children: [new Text("/ folder")] });
		}
	}`);
			createFile('./rayous.json', JSON.stringify({
				title: options.name,
				meta: { author: options.author },
				links: [],
				scripts: [],
				envprod: options.envprod
			}, null, 2));
			if(options.ts) createFile('./tsconfig.json', JSON.stringify({
				"compilerOptions": {
					"esModuleInterop": true,
					"paths": {
						"@/*": ["./*"]
					}
				}
			}, null, 2));
			if(options.tailwind) createFile('./tailwind.config.js', `/** @type {import('tailwindcss').Config} */\nmodule.exports = `+JSON.stringify({
				content: [
					'./app/**/*.{js,ts,jsx,tsx,mdx}',
					'./components/**/*.{js,ts,jsx,tsx,mdx}',
					'./ui/**/*.{js,ts,jsx,tsx,mdx}'
				],
				theme: {
					extend: {},
				},
				plugins: [],
			}, null, 2));
		}

		let defname = "", defauth = "";
		let json = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));
		defname = json.name;
		defauth = json.author;

		rl.question("Do you want to use TypeScript(yes by default)? (y/n): ", (answer) => {
			if (answer.toLowerCase() === 'yes' || answer.toLowerCase() == 'y') {
				options.ts = true;
			} else {
				options.ts = false;
			}
			rl.question("Do you want to use tailwindcss(yes by default)? (y/n): ", (answer) => {
				if (answer.toLowerCase() === 'yes' || answer.toLowerCase() == 'y') {
					options.tailwind = true;
				} else {
					options.tailwind = false;
				}
				rl.question('Enter the project name'+(defname ? ' ('+defname+')' : '')+': ', (name) => {
					options.name = name || defname;
		
					rl.question('Enter the author name'+(defauth ? ' ('+defauth+')' : '')+': ', (author) => {
						options.author = author || defauth;
		
						rl.question('Do you want to set project to production environment(no by default)? (y/n): ', (answer) => {
							if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
								options.envprod = true;
							}
							rl.close();
							createFiles();
						});
					});
				});
			});
		});
	} else if(subcommand[0] == 'build') {
		console.log('Starting build...');
		const child = spawn(buncommand, rbun(["run", builderScriptPath, ...subcommand.splice(1)]));
		child.stdout.on("data", (data) => {
			console.log(data.toString().trim());
		});
	
		child.on("error", (error) => {
			console.error(`${error}`.trim());
		});
		child.on("close", (code) => {
			process.exit(code);
		});
	} else if(subcommand[0] == 'route'){
		let routePath = path.join(resolvePath(subcommand[1]), 'route.ts');
		let folder = path.dirname(routePath);
		if(!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true});
		if(!fs.existsSync(routePath)) fs.writeFileSync(routePath, `async function GET(){ return "empty"; }`);
	} else if(subcommand[0] == 'page'){
		let routePath = path.join(resolvePath(subcommand[1]), 'page.ts');
		let folder = path.dirname(routePath);
		if(!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true});
		if(!fs.existsSync(routePath)) fs.writeFileSync(routePath, `import { Component, Widget } from "rayous";
import { buildProps } from "rayous/extra";

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [

			]
		});
	}
}`);
	}
} else {
	console.log('Project location: '+process.cwd());

	console.log('Server location: '+serverScriptPath);
	const child = spawn(buncommand, rbun(["run", serverScriptPath]));

  child.stdout.on("data", (data) => {
    console.log(data.toString().trim());
  });

  child.on("error", (error) => {
    console.error(`${error}`.trim());
  });

  child.on("close", (code) => {
    process.exit(code);
  });
}
