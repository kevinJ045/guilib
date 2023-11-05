import { Application, NextFunction, Request, Response } from "express";
import Routes, { route } from "../routing/routes";
import Builder from "../bundling/builder";



export default class Serving {
	routes: Routes;

	constructor(app: Application){
		this.routes = new Routes();
		app.use('*', (req: Request, res: Response, next: NextFunction) => this.serve(req, res, next));
	}

	async serve(req: Request, res: Response, next: NextFunction){
		let route = this.routes.findPath(req.baseUrl);
		if(!route){
			res.send(this.error(404));
		} else {
			if(route?.type == 'page') this.routes.findLayouts(route as route);
			
			let builder = new Builder(route as route, this.routes);
			const built = await builder.build(req);
			
			if(built.status == 404) res.send(this.error(404));
			else res.send(built.response);
		}
	}

	error(num: number){
		return "404";
	}

	static init(app: Application){
		return new Serving(app);
	}

}