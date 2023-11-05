
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

				app.listen(2345, () => console.log('localhost:2345'));
				