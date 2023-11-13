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
		const paths = Array.from(this.routes.paths.entries()).map((key: any) => key[0] || "/");
		if (route.type == "route") {
			for(let i in require.cache) delete require.cache[i];
			const requests = require(path.join(process.cwd(), route.correspondingFile));
			const response = req.method.toUpperCase() in requests
			? await requests[req.method.toUpperCase()](req, route, paths)
			: null;
			return {
				response,
				status: req.method.toUpperCase() in requests ? 200 : 400,
			};
		} else {
			return {
				status: 200,
				response: await bundle(route, { port, env }, paths, Object.fromEntries(url.searchParams.entries()))
			}
		}
	}
}
