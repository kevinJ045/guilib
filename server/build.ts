import Routes, { route } from "./modules/routing/routes";
import fs from "fs";
import path from "path";
import Builder from "./modules/bundling/builder";

function _public(p: string){
	return path.join(process.cwd(), 'public', p);
}

const copyDir = (source: string, target: string) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const entries = fs.readdirSync(source);

  entries.forEach((entry) => {
    const sourcePath = path.join(source, entry);
    const targetPath = path.join(target, entry);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
};

async function build(path: string){
	try{
		if(!fs.existsSync(_public(''))) fs.mkdirSync(_public(''));
		const routes = new Routes();
		routes.registerMaps();
		const route = routes.findPath(path);
		if(path.match(/\:(\w+)/)) {
			console.log('Path is dynamic!', path);
		} if(route){
			if(!fs.existsSync(_public(route.path))) fs.mkdirSync(_public(route.path), { recursive: true });
			if(route.type == 'page'){
				console.log('Building', path);
				let builder = new Builder(route as route);
				const built = await builder.build({} as Request, {port: 1001, env: 'prod'});
				if (built.status == 404) return;
				else {
					fs.writeFileSync(_public(route.path+'/index.html'), built.response);
				}
			}
		}	else {
			if(path == '*'){
				let all = [...routes.paths.keys()].map(item => item || '/');
				for(var i of all){
					await build(i);
				}
			} else if(path == 'static'){
				copyDir('./static', './public');
			} else {
				console.log('route '+path+' does not exist');
				console.log('routes:');
				console.log([...routes.paths.keys()]);
			}
		}
	} catch(e){
		console.error(e);
	}
}

let args = process.argv.splice(2, process.argv.length);

async function buildAll(){
	for(let i of args){
		await build(i);
	}
}

if(args.length) buildAll();