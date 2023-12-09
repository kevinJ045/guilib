#!/usr/bin/env node

import { spawn, execSync, exec } from "node:child_process";
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

function printHelp(){
	console.log('╭───────────────┬───────────────────╮');
	console.log('│   Command     │   Description     │');
	console.log('├───────────────┼───────────────────┤');
	console.log('│   \x1b[38;5;208mserve\x1b[0m       │   Starts Server   │');
	console.log('│   \x1b[38;5;48mbuild\x1b[0m       │   Starts Build    │');
	console.log('│   \x1b[38;5;38mcreate\x1b[0m      │ Creates a Project │');
	console.log('│   \x1b[38;5;210mroute\x1b[0m       │  Creates a route  │');
	console.log('│   \x1b[38;5;201mpage\x1b[0m        │  Creates a page   │');
	console.log('╰───────────────┴───────────────────╯');
}

function resolvePath(routePath){
	if(!routePath.startsWith('/')) routePath = '/'+routePath;
	return 'app'+routePath.replace(/(\:(\w+))/g, '[$2]');
}

function createFile(filename, filecontent){
	console.log('├ \x1b[38;5;208m'+(filecontent ? '' : '')+' \x1b[38;5;38mCreate File:\x1b[1;33m', filename, '\x1b[0m');
	if(fs.existsSync(filename)) return console.log('├ \x1b[31m✗ Exists:\x1b[1;33m', filename, '\x1b[0m');
	if(filecontent){
		fs.writeFileSync(filename, filecontent);
	} else {
		fs.mkdirSync(filename);
	}
}

function startServe(){
	rl.close();
	console.log('╭ \x1b[38;5;38mStarting\x1b[0m [\x1b[33m'+(path.basename(path.dirname(process.cwd()))+'/'+path.basename(process.cwd()))+'\x1b[0m]');

	const child = spawn(buncommand, rbun(["run", serverScriptPath]));

  startedChild(child);

	let exitted = false;
	const exitHandler = (e) => {
		process.stdout.write('\r  ')
		process.stdout.write('\r')
		exitted = true;
	}

	process.on('exit', exitHandler);	

	process.on('SIGINT', exitHandler.bind(null, {exit:true}));
}

function startedChild(child){
	child.stdout.on("data", (data) => {
		if(!data.toString().trim()) return '';
		console.log('│');
		console.log('├', data.toString().trim().replace(/\n/g, '\n├ '));
	});

	child.on("error", (error) => {
		console.error(`├ \x1b[31m✗\x1b[0m'${error}`.trim());
	});
	child.on("close", (code) => {
		console.log('│');
		console.log('╰ Done');
		process.exit(code);
	});
}

if(subcommand[0]){
	if(subcommand[0] == 'create'){
		console.log('╭ \x1b[38;5;38mStarting Create...\x1b[0m');
		let options = {
			ts: true,
			tailwind: true,
			name: "App",
			author: "",
			envprod: false,
			jsx: false,
			installDeps: false
		};
		let currentPath = path.resolve(subcommand[1] || '.');

		const p = (s) => path.join(currentPath, s);

		function createFiles(){
			createFile(p('app'));
			createFile(p('static'));
			createFile(p('styles'));
			createFile(p('app/page.'+(options.ts ? (options.jsx ? 'tsx' : 'ts') : (options.jsx ? 'jsx' : 'js'))), `import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
${options.jsx ? `import { React } from "rayous/react";\n` : ''}
export default class extends Component {
	build(props${options.ts ? ': buildProps':''}) {
		return new Widget({
			children: [
				${options.jsx ? `<Text>Hello, Rayous!</Text>` : `new Text("Hello, Rayous!")`}
			]
		});
	}
}`);
			createFile(p('rayous.json'), JSON.stringify({
				title: options.name,
				meta: { author: options.author },
				links: [],
				scripts: [],
				envprod: options.envprod
			}, null, 2));
			if(options.ts) createFile(p('tsconfig.json'), JSON.stringify({
				"compilerOptions": {
					"esModuleInterop": true,
					"paths": {
						"@/*": ["./*"]
					},
					"jsx": options.jsx ? "react" : "preserve"
				}
			}, null, 2));
			if(options.tailwind) createFile(p('tailwind.config.js'), `/** @type {import('tailwindcss').Config} */\nmodule.exports = `+JSON.stringify({
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
			if(options.jsx) createFile(p('app/jsx.d.ts'), `declare namespace JSX {
	interface IntrinsicElements {
		[elementName: string]: any;
	}
};`);
		}

		let defname = "", defauth = "";
		let json = {};

		if(currentPath !== '.' && !fs.existsSync(p(''))){
			fs.mkdirSync(p(''));
		}

		if(!fs.existsSync(p('package.json'))){
			execSync('cd '+p('') + ' && npm init -y');
			options.installDeps = true;
		}
		try{
			json = JSON.parse(fs.readFileSync(p('package.json'), { encoding: 'utf-8' }))
		} catch(e) {}
		defname = json.name;
		defauth = json.author;

		console.log('│');

		console.log("├ \x1b[38;5;38mCreate Path:\x1b[1;33m", p(''), '\x1b[0m');

		console.log('│');

		rl.question("├  \x1b[1mDo you want to use \x1b[1;34mTypeScript\x1b[0m(yes by default)? (y/n): ", (answer) => {
			if (answer.toLowerCase() === 'yes' || answer.toLowerCase() == 'y') {
				options.ts = true;
			} else {
				options.ts = false;
			}
			console.log('│');
			rl.question("├  \x1b[1mDo you want to use \x1b[1;34mtailwindcss\x1b[0m(yes by default)? (y/n): ", (answer) => {
				if (answer.toLowerCase() === 'yes' || answer.toLowerCase() == 'y') {
					options.tailwind = true;
				} else {
					options.tailwind = false;
				}
				console.log('│');
				rl.question("├  \x1b[1mDo you want to use \x1b[38;5;208mjsx\x1b[0m(no by default)? (y/n): ", (answer) => {
					if (answer.toLowerCase() === 'yes' || answer.toLowerCase() == 'y') {
						options.jsx = true;
					} else {
						options.jsx = false;
					}

					console.log('│');
					rl.question('├  ◯ \x1b[1mEnter the project name'+(defname ? ' ('+defname+')' : '')+': ', (name) => {
						options.name = name || defname;
						
						console.log('│');
						rl.question('├  ◯ \x1b[1mEnter the author name'+(defauth ? ' ('+defauth+')' : '')+': ', (author) => {
							options.author = author || defauth;
							
							console.log('│');
							
							createFiles();

							console.log('│');
							rl.question("├  \x1b[1mDo you want to use \x1b[38;5;208mgit\x1b[0m \x1b[1mfor version management? (y/n): ", (answer) => {
								if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
									//  
									execSync('cd '+p('') + ' && git init');
								}

								const done = () => {
									rl.close();
									console.log('│');
									console.log('╰ Run \x1b[38;5;208m$ \x1b[38;5;48mnpx rayous\x1b[0m to start dev server.');
								}

								if(options.installDeps){
									console.log('│');
									console.log('├ \x1b[38;5;38m Installing Dependencies...\x1b[0m');

									exec(`cd ${p('')} && npm i rayous`, (err) => {
										if(err){
											console.error(err);
											process.exit(0);
										} else {
											done();
										}
									});
								} else {
									done();
								}
							});
						});
					});

				});
			});
		});
	} else if(subcommand[0] == 'build') {
		console.log('╭ \x1b[38;5;38mStarting build...\x1b[0m');
		const child = spawn(buncommand, rbun(["run", builderScriptPath, ...subcommand.splice(1)]));
		startedChild(child);
	} else if(subcommand[0] == 'route'){
		let routePath = path.join(resolvePath(subcommand[1]), 'route.ts');
		let folder = path.dirname(routePath);
		if(!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true});
		if(!fs.existsSync(routePath)) fs.writeFileSync(routePath, `async function GET(){ return "empty"; }`);
		process.exit();
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
		process.exit();
	} else if(subcommand[0] == 'serve') {
		startServe();
	} else {
		printHelp();
		process.exit(0);
	}
}  else {
	startServe();
}
