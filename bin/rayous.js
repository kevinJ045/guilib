#!/usr/bin/node

import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

let subcommand = process.argv.slice(2, process.argv.length);

if(subcommand[0]){
	if(subcommand[0] == 'create'){
		fs.mkdirSync('./app');
		fs.mkdirSync('./static');
		fs.mkdirSync('./styles');
		fs.writeFileSync('./app/page.ts', `import { Component, Text, Widget } from "rayous";
import * as Extra from "rayous/extra";

export default class extends Component {
	build({ route: {} }) {
		return new Widget({ children: [new Text("/ folder")] });
	}
}`);
		fs.writeFileSync('./rayous.json', JSON.stringify({
			title: "App",
			meta: { author: "" },
			links: [{type: "", link: ""}],
			scripts: [""],
			envprod: false
		}, null, 2));
		fs.writeFileSync('./tailwind.config.js', `/** @type {import('tailwindcss').Config} */\nmodule.exports = `+JSON.stringify({
			content: [
				'./app/**/*.{js,ts,jsx,tsx,mdx}'
			],
			theme: {
				extend: {},
			},
			plugins: [],
		}, null, 2));
	}
} else {
	console.log('Project location: '+process.cwd());

	const currentModuleUrl = new URL(import.meta.url);
  const currentModuleDirectory = path.dirname(currentModuleUrl.pathname);

  const serverScriptPath = path.join(currentModuleDirectory, "../", "server", "server.ts");

	console.log('Server location: '+serverScriptPath);
	const child = spawn("bun", ["run", serverScriptPath]);

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