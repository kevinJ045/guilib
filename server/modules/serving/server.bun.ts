import Routes, { route } from "../routing/routes";
import Builder from "../bundling/builder";
import { error } from "itty-router";
import { portAndEnv } from "../bundling/bundler";

const routes = new Routes();

export async function serve({port,env}: portAndEnv, req: Request) {
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
		if (route?.type == "page") routes.findLoader(route as route);

		let builder = new Builder(route as route);
		const built = await builder.build(req, {port,env});

		if (built.status == 404) return error(404);
		else return route.type == 'page' ? new Response(built.response, {
			headers: { "Content-Type": "text/html" },
		}) : (built.response instanceof Response ? built.response : new Response(built.response));
	}
}
