import { error, Router } from "itty-router";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { middleWare } from "./modules/middleware/middleware";
import { serve } from "./modules/serving/server.bun";


async function startServer(){
	let port = 3000;
	
	if(existsSync('./rayous.json')){
		const json = JSON.parse(readFileSync('./rayous.json').toString());
		if(json.port) port = parseInt(json.port) || 3000;
	} else {
		writeFileSync('./rayous.json', '{}');
	}
	

	const router = Router();

	const { sockets, connectServer } = await middleWare(router);

	router.all("*", (req: Request) => serve(req));

	console.log('localhost:'+port);
	// @ts-ignore
	const server = Bun.serve({
		port,
		fetch: (request: Request) => router.handle(request).catch(error),
		websocket: sockets
	});
	connectServer(server);
}

startServer();
