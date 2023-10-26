import Routes, { route } from "./modules/routing/routes";
import Builder from "./modules/bundling/builder";
import { error, Router } from "itty-router";
import { middleWare } from "./modules/middleware/middleware";

async function serve(req: Request) {
	const { pathname } = new URL(req.url);
	let route = routes.findPath(pathname);
	console.log(req.method+": "+pathname);
	if (!route) {
		let file = routes.findFile(pathname);
		if(file) {
			// @ts-ignore
			return new Response(Bun.file(file));
		} else {
			return error(404);
		}
	} else {
		if (route?.type == "page") routes.findLayouts(route as route);

		let builder = new Builder(route as route);
		const built = await builder.build(req);

		if (built.status == 404) return error(404);
		else return built;
	}
}

const routes = new Routes();

const router = Router();

const { sockets, connectServer } = middleWare(router);

router.all("*", (req: Request) => serve(req));

// @ts-ignore
const server = Bun.serve({
	port: 3000,
	fetch: (request: Request) => router.handle(request).catch(error),
	websocket: sockets
});
connectServer(server);