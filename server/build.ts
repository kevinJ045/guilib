import Routes, { route } from "./modules/routing/routes";
import fs from "fs";
import path from "path";
import Builder from "./modules/bundling/builder";
import ts from "typescript";

function _public(p: string){
	return path.join(process.cwd(), 'public', p);
}

function dirname(p: string){
	return path.dirname(p);
}

const copyDir = (source: string, target: string) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const entries = fs.readdirSync(source);

  entries.forEach((entry) => {
    const sourcePath = path.join(source, entry);
    const targetPath = path.join(target, entry);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
};

function buildParamsPathFor(file: string, ext: string){
	return path.join(path.dirname(file), 'params.'+ext);
}

async function buildDynamicWithPathMap(route: route, paramsPath: string){
	let paramKeys: string[] = [];
	route.path.replace(/(\:(\w+))/g, (a, b, c) => {
		paramKeys.push(c);
		return a;
	});
	let paramsGetter = await import('../'+paramsPath);
	if(typeof paramsGetter.params == "function"){
		let params = await paramsGetter.params(route);
		if(Array.isArray(params)){
			params.forEach((item, index) => {
				paramKeys.forEach(key => {
					if(!item[key]) throw new Error('Returned param at '+index+' lacks param key '+key);
				})
			});
			for(let param of params){
				await build(route.path.replace(/(\:(\w+))/g, (a, b, c) => {
					return param[c];
				}));
			}
		} else {
			console.log("The params function is not returning an array.");
		}
	} else {
		console.log("params.ts doesn't export a proper params function.")
	}
}

function runthroughAppGetUses(pathName: string | null = null) {
	const _files: string[] = [];
	let currentPath = pathName || './app';
	const files = fs.readdirSync(currentPath);

	files.forEach((file) => {
		const filePath = path.join(currentPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			_files.push(...runthroughAppGetUses(filePath));
		} else {
			if(file.endsWith('use.js')){
				_files.push(filePath);
			}
		}
	});
	return _files;
}

async function build(path: string){
	try{
		if(!fs.existsSync(_public(''))) fs.mkdirSync(_public(''));
		const routes = new Routes();
		routes.registerMaps();
		const route = routes.findPath(path);
		if(path.match(/\:(\w+)/) && route) {
			let buildParamsPath_ts = buildParamsPathFor(route.correspondingFile, 'ts');
			let buildParamsPath_js = buildParamsPathFor(route.correspondingFile, 'js');
			if(fs.existsSync(buildParamsPath_ts)){
				await buildDynamicWithPathMap(route as route, buildParamsPath_ts);
			} else if(fs.existsSync(buildParamsPath_js)) {
				await buildDynamicWithPathMap(route as route, buildParamsPath_js);
			} else {
				console.log('Path is dynamic: ', path);
			}
		} else if(route){
			console.log('Building', path);
			if(route.type == 'page'){
				if(!fs.existsSync(_public('client/'+route.path))) fs.mkdirSync(_public('client/'+route.path), { recursive: true });
				routes.findLayouts(route as route);
				routes.findLoader(route as route);
				let builder = new Builder(route as route, routes);
				const built = await builder.build({} as Request, {port: 1001, env: 'prod'});
				if (built.status == 404) return;
				else {
					fs.writeFileSync(_public('client/'+route.path+'/index.html'), built.response);
				}
			} else {
				const config = JSON.parse(fs.readFileSync('./rayous.json').toString());
				let port = config.port || 3000;
				ts.createProgram([route.correspondingFile], {
					target: ts.ScriptTarget.ES2022,
					module: ts.ModuleKind.CommonJS,
				}).emit(undefined, (fileName: string, data: string) => {
					if(!fs.existsSync(_public('server/'+route.path))) fs.mkdirSync(_public('server/'+route.path), { recursive: true });
					fs.writeFileSync(_public('server/'+path+'/index.js'), data);
					fs.writeFileSync(_public('server/'+path+'/pathname.js'), `exports.pathname = "${route.path}"`);
				});
				let uses = runthroughAppGetUses();
				uses.forEach(use => {
					ts.createProgram([use], {
						target: ts.ScriptTarget.ES2022,
						module: ts.ModuleKind.CommonJS,
					}).emit(undefined, (fileName: string, data: string) => {
						let usePath = dirname(use);
						if(!fs.existsSync(_public('server/'+usePath))) fs.mkdirSync(_public('server/'+usePath), { recursive: true });
						fs.writeFileSync(_public('server/'+usePath+'/'+fileName), data);
					});
				});
				fs.writeFileSync(_public('package.json'), JSON.stringify({name: config.title || "none", main: "./server/index.js", version: config.version || "1.0.0", "type": "commonjs", "scripts": {"start": "node ./server/index.js" }, "dependencies": {"express": "^4.18.2", "express-ws": "^5.0.2"}}, null, 2));
				if(!fs.existsSync(_public('server/index.js'))) fs.writeFileSync(_public('server/index.js'), `
				const fs = require('fs');
				const path = require('path');
				const express = require('express');
				const expressWs = require('express-ws');

				const app = express();
				app.use('/', express.static(path.join(__dirname, '../client')));

				let pathname = __dirname;

				function runthroughApp(pathName = null) {
					const _files = [];
					let currentPath = pathName || './app';
					const files = fs.readdirSync(currentPath);
				
					files.forEach((file) => {
						const filePath = path.join(currentPath, file);
						const stats = fs.statSync(filePath);
				
						if (stats.isDirectory()) {
							_files.push(...runthroughApp(filePath));
						} else {
							if(file.endsWith('use.js')){
								_files.push(filePath);
							}
						}
					});
					return _files;
				}

				const openListeners = [];
				const closeListeners = [];
				const messageListeners = [];

				const useFile = async (filename) => {
					const file = require(path.join(process.cwd(), filename));
					if(typeof file.socket == "object"){
						for(let i in file.socket){
							if(i == 'open' && typeof file.socket[i] == 'function') openListeners.push(file.socket[i])
							if(i == 'close' && typeof file.socket[i] == 'function') closeListeners.push(file.socket[i])
							if(i == 'message' && typeof file.socket[i] == 'function') messageListeners.push(file.socket[i])
						}
					}
					if(typeof file.middleware == "function"){
						file.middleware(app, app);
					}
				}

				const useFiles = async () => {
					let files = runthroughApp();
					for(let file of files){
						await useFile(file);
					}
				}

				expressWs(app);

				app.ws('/', (ws, req) => {
					// Handle WebSocket connections here
					ws.on('open', () => {
						openListeners.forEach((fn) => fn(ws, app));
					});
					ws.on('message', (message) => {
						messageListeners.forEach((fn) => fn(ws, message, app));
					});
					ws.on('close', () => {
						closeListeners.forEach((fn) => fn(ws, app));
					});
				});

				async function requireIndexFiles(dir) {
					// Get a list of all files and directories in the current directory
					const entries = fs.readdirSync(dir);
				
					// Look for an "index.js" file in the current directory
					if (entries.includes('index.js') && dir !== pathname) {
						let index = require(path.join(dir, 'index.js'));
						let { pathname } = require(path.join(dir, 'pathname.js'));
						for(let i in index){
							if(app[i.toLowerCase()]){
								app[i.toLowerCase()](pathname, async (req, res) => {
									res.send(await index[i]());
								});
							}
						}
					}
				
					// Recursively process subdirectories
					entries.forEach(entry => {
						const entryPath = path.join(dir, entry);
						if (fs.statSync(entryPath).isDirectory()) {
							requireIndexFiles(entryPath);
						}
					});
				}

				requireIndexFiles(pathname);

				app.listen(${port}, () => console.log('localhost:${port}'));
				`);
				console.log('Warning: server building still in experiment stage')
			}
		}	else {
			if(path == '*'){
				let all = [...routes.paths.keys()].map(item => item || '/');
				for(var i of all){
					await build(i);
				}
			} else if(path == 'static'){
				copyDir('./static', './public/client');
			} else {
				console.log('route '+path+' does not exist');
				console.log('routes:');
				console.log([...routes.paths.keys()]);
			}
		}
	} catch(e){
		console.error(e);
	}
}

let args = process.argv.splice(2, process.argv.length);

async function buildAll(){
	for(let i of args){
		await build(i);
	}
}

if(args.length) buildAll();