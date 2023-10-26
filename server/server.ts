import { error, Router } from "itty-router";
import { middleWare } from "./modules/middleware/middleware";
import { serve } from "./modules/serving/server.bun";


async function startServer(){

	const router = Router();

	const { sockets, connectServer } = await middleWare(router);

	router.all("*", (req: Request) => serve(req));

	console.log('localhost:3000');
	// @ts-ignore
	const server = Bun.serve({
		port: 3000,
		fetch: (request: Request) => router.handle(request).catch(error),
		websocket: sockets
	});
	connectServer(server);
}

startServer();