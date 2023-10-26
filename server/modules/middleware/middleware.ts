import { RouterType } from "itty-router";
import fs from "node:fs";
import path from "node:path";


function runthroughApp(pathName: string | null = null) {
	const _files: string[] = [];
	let currentPath = pathName || './app';
	const files = fs.readdirSync(currentPath);

	files.forEach((file) => {
		const filePath = path.join(currentPath, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			_files.push(...runthroughApp(filePath));
		} else {
			if(file.endsWith('use.ts')){
				_files.push(filePath);
			}
		}
	});
	return _files;
}

export function middleWare(router: RouterType){
	const openListeners: any[] = [];
	const closeListeners: any[] = [];
	const messageListeners: any[] = [];

	function emptyAll(){
		openListeners.splice(0, openListeners.length);
		closeListeners.splice(0, closeListeners.length);
		messageListeners.splice(0, messageListeners.length);
	}

	let svr = {};

	const useFile = async (filename: string) => {
		const file = await import(path.join(process.cwd(), filename));
		if(typeof file.socket == "object"){
			for(let i in file.socket){
				if(i == 'open' && typeof file.socket[i] == 'function') openListeners.push(file.socket[i])
				if(i == 'close' && typeof file.socket[i] == 'function') closeListeners.push(file.socket[i])
				if(i == 'message' && typeof file.socket[i] == 'function') messageListeners.push(file.socket[i])
			}
		}
		if(typeof file.middleware == "function"){
			file.middleware(svr, router);
		}
	}

	const useFiles = () => {
		emptyAll();
		let files = runthroughApp();
		files.forEach(file => useFile(file));
	}


	const open = (ws: any) => {
		openListeners.forEach((fn) => fn(ws, svr));
	};
	const close = (ws: any) => {
		closeListeners.forEach((fn) => fn(ws, svr));
	};
	const message = (ws: any, message: any) => {
		messageListeners.forEach((fn) => fn(ws, message, svr));
	};



	return {
		sockets: {
			open,
			message,
			close
		},
		connectServer: (server: any) => {
			svr = server;
			useFiles();
		}
	}
}