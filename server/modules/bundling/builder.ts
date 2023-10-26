import { route } from "../routing/routes";
import { bundle } from "./bundler";
import path from "node:path";

export default class Builder {
	route: route;

	constructor(route: route) {
		this.route = route;
	}

	async build(req: Request) {
		const { route } = this;
		if (route.type == "route") {
			const requests = await import(
				path.join(process.cwd(), route.correspondingFile)
			);
			const response = req.method.toUpperCase() in requests
			? await requests[req.method.toUpperCase()](req)
			: null;
			return {
				response,
				status: req.method.toUpperCase() in requests ? 200 : 400,
			};
		} else {
			return {
				status: 200,
				response: await bundle(route)
			}
		}
	}
}
