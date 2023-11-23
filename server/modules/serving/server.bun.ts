import Routes, { route } from "../routing/routes";
import Builder from "../bundling/builder";
import { error } from "itty-router";
import { portAndEnv } from "../bundling/bundler";

const routes = new Routes();

async function _err(req: Request, pathname: string, {port,env}: portAndEnv) : Promise<any> {
	let route = routes.find404(pathname);
	if(route) return await buildPageRoute(route as route, req, pathname, {port,env});
	return error(404);
}

async function buildPageRoute(route: route, req: Request, pathname: string, {port,env}: portAndEnv){
	if (route?.type == "page") routes.findLayouts(route);
	if (route?.type == "page") routes.findLoader(route);

	let builder = new Builder(route as route, routes);
	const built = await builder.build(req, {port,env});

	if (built.status == 404) return await _err(req, pathname, {port,env});
	else return route.type == 'page' ? new Response(built.response, {
		headers: { "Content-Type": "text/html" },
	}) : (built.response instanceof Response ? built.response : new Response(built.response));
}

export async function serve({port,env}: portAndEnv, req: Request) {
	let { pathname } = new URL(req.url);
	if(pathname.endsWith('/') && pathname !== "/") pathname = pathname.replace(/\/$/, '');
	let route = routes.findPath(pathname);
	console.log(req.method+": "+pathname);
	if (!route) {
		let file = routes.findFile(pathname);
		if(file) {
			// @ts-ignore
			return new Response(Bun.file(file));
		} else {
			return await _err(req, pathname, {port,env});
		}
	} else {
		return await buildPageRoute(route as route, req, pathname, {port,env})
	}
}
