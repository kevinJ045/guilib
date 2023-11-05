#!/usr/bin/env node

import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

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
			title: "App",
			meta: { author: "" },
			links: [{type: "", link: ""}],
			scripts: [""],
			envprod: false
		}, null, 2));
		createFile('./tailwind.config.js', `/** @type {import('tailwindcss').Config} */\nmodule.exports = `+JSON.stringify({
			content: [
				'./app/**/*.{js,ts,jsx,tsx,mdx}'
			],
			theme: {
				extend: {},
			},
			plugins: [],
		}, null, 2));
	} else if(subcommand[0] == 'build') {
		console.log('Starting build...');
		const child = spawn(buncommand, rbun(["run", builderScriptPath, ...subcommand.splice(0)]));
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
