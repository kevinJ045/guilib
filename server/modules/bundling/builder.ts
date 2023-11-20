import Routes, { route } from "../routing/routes";
import { bundle, portAndEnv } from "./bundler";
import path from "node:path";


export default class Builder {
	route: route;
	routes: Routes;

	constructor(route: route, routes: Routes) {
		this.route = route;
		this.routes = routes;
	}

	async build(req: Request, { port, env }: portAndEnv ) {
		const { route } = this;
		let url = new URL(req.url);
		const paths = Object.fromEntries(this.routes.paths.entries());
		if (route.type == "route") {
			for(let i in require.cache) delete require.cache[i];
			const requests = require(path.join(process.cwd(), route.correspondingFile));
			const response = req.method.toUpperCase() in requests
			? await requests[req.method.toUpperCase()](req, route, Object.keys(paths))
			: null;
			return {
				response,
				status: req.method.toUpperCase() in requests ? 200 : 400,
			};
		} else {
			return {
				status: 200,
				response: await bundle(route, { port, env }, Object.keys(paths).map(path => ({ pathname: path, filename: paths[path].path })), Object.fromEntries(url.searchParams.entries()))
			}
		}
	}
}
