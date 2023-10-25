import Routes, { route } from "./modules/routing/routes";
import Builder from "./modules/bundling/builder";
import { error, Router } from "itty-router";

async function serve(req: Request) {
	let route = routes.findPath(new URL(req.url).pathname);
	console.log(new URL(req.url).pathname);
	console.log(route);
	if (!route) {
		return error(404);
	} else {
		if (route?.type == "page") routes.findLayouts(route as route);

		let builder = new Builder(route as route);
		const built = await builder.build(req);

		if (built.status == 404) return error(404);
		else return built.response;
	}
}

const routes = new Routes();

const router = Router();
router.all("*", (req: Request) => serve(req));
// @ts-ignore
Bun.serve({
	port: 3000,
	fetch: (request: Request) => router.handle(request).catch(error),
});
