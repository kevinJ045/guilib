

export function GET(req: Request, route: object, paths: string[]){
	return JSON.stringify({route, paths});
}