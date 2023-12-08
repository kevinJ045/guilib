
function getAllPaths(){
	return (window as Record<string, any>).all_possible_paths as {pathname: string}[];
}

function pathToRegex(path: string): RegExp {
	if (path === '/') return /\/$/;
	return new RegExp(`${path.replace(/\/$/, '').replace(/\:([\w]+)/g, '(.+)')}`);
}

export function getRootPath(){
	let rootPath = "";
	let current = location.pathname;
	if(current.endsWith('/') && current !== '/') current = current.replace(/\/$/, '');
	const allPaths = getAllPaths();
	const foundPath = allPaths.filter(path => path.pathname.length)
	.find(path => path.pathname == '/' ? current == '/' : current.match(pathToRegex(path.pathname)));

	if(foundPath){
		let path = current.replace(pathToRegex(foundPath.pathname), '');
		rootPath = path;
	}

	return rootPath;
}

export function resolve(pathname: string){
	let p = pathname;
	let root = getRootPath();
	if(p.startsWith('./')){
		if(location.pathname.endsWith('/') && location.pathname !== "/"){
			p = '.'+p;
		}
	}
	if(p.startsWith('/')){
		p = root + p;
	}
	return p;
}