import { error, Router } from "itty-router";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { middleWare } from "./modules/middleware/middleware";
import { serve } from "./modules/serving/server.bun";
import chokidar from "chokidar";
import { resolve as resolvePath } from "node:path";


async function startServer(){
	let port = 3000;
	let env: 'dev' | 'prod' = 'dev';
	
	if(existsSync('./rayous.json')){
		const json = JSON.parse(readFileSync('./rayous.json').toString());
		if(json.port) port = parseInt(json.port) || 3000;
		if(json.envprod === true) env = 'prod';
	} else {
		writeFileSync('./rayous.json', '{}');
	}

	const router = Router();

	const { sockets, connectServer } = await middleWare(router);

	router.all("*", (req: Request) => serve({port, env}, req));

	console.log('localhost:'+port);
	// @ts-ignore
	const server = Bun.serve({
		port,
		fetch: (request: Request) => {
			if (server.upgrade(request)) {
				return; // do not return a Response
			}
			else return router.handle(request).catch(error)
		},
		websocket: {
			open(ws: any){
				ws.subscribe("file-change-listeners");
				sockets?.open?.(ws);
			},
			message(ws: any, message: any){
				sockets?.message?.(ws, message);
			},
			close(ws: any){
				ws.unsubscribe("file-change-listeners");
				sockets?.close?.(ws);
			}
		}
	});

	if(env === 'dev') chokidar.watch('./app')
	.on('all', (event, path) => {
		server.publish('file-change-listeners', JSON.stringify({
			type: 'file-change',
			event: event,
			relativePath: 'app/'+path,
			path: resolvePath(path)
		}));
	});

	connectServer(server);
}

startServer();
