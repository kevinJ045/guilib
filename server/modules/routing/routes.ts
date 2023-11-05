import fs from 'fs';
import path from 'path';
import { fileTypes } from '../../constant/files';

type pathmap = {
	regex: RegExp,
	path: string,
	keys: string[],
  dynamic: boolean
}

export interface route {
	path: string,
	mappedPath: string,
	correspondingFile: string,
	type: 'route' | 'page',
	params: Record<string, any>,
	layouts?: string[]
	loader?: string
}

function fixFilePath(string: string) {
	if(!string) return "";
  let fixedPath = string.split('/').slice(1).map((segment) => {
    let segmentString = segment;

    if (segment.startsWith('[') && segment.endsWith(']')) {
      segmentString = ':' + segment.split('[')[1].split(']')[0];
    }

    return segmentString;
  }).filter(Boolean);
  fixedPath.unshift('');
  fixedPath.pop();
  return fixedPath.join('/');
}

function pathToRegex(path: string): { regex: RegExp; keys: string[] } {
  const keys: string[] = [];

  // Convert route path to a regular expression.
  const regex = new RegExp(
    '^' +
      (path
        .replace(/\\/g, '\\/')
        .replace(/:(\w+)/g, (_, key) => {
          keys.push(key);
          return '(.+)';
        }) || '\\/') +
      '$'
  );

  return { regex, keys };
}


function getParams(match: RegExpMatchArray, keys: string[]): Record<string, any> {
  const values = match.slice(1);
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
}

function sanitizePath(path: string): string {
  if(path.endsWith('/')) path = path.replace(/\/$/, '');
  return path || '/';
}

export default class Routes {
  basePath: string;
  paths: Map<string, pathmap>;

  constructor() {
    // The base path for your routes.
    this.basePath = './app';
    this.paths = new Map();

    this.registerMaps();
  }

  registerMaps(pathName: string | null = null) {
    let currentPath = pathName || this.basePath;
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        this.registerMaps(filePath);
      } else {
        const fixedPath = fixFilePath(filePath);
				let pathRegex = pathToRegex(fixedPath);
				if(fileTypes.includes(file)) this.paths.set(fixedPath, { regex: pathRegex.regex, keys: pathRegex.keys, dynamic: pathRegex.keys.length > 0, path: filePath});
      }
    });
  }

  findPath(pathRequested: string) {
    this.registerMaps();

    let requestedPath = sanitizePath(pathRequested);
    
    for (const [pathName, { regex, path, keys }] of this.paths.entries()) {
      const match = requestedPath.match(regex);
      if (match) {
        return {
					path: pathRequested,
					mappedPath: pathName,
					correspondingFile: path,
					type: path.endsWith('route.ts') || path.endsWith('route.js') ? 'route' : 'page',
					params: getParams(match, keys),
				};
      }
    }

    return null; // Path not found.
  }

  find404(pathRequested: string) : route | null {
    this.registerMaps();

    let requestedPath = sanitizePath(pathRequested);
    let pathname = path.join('./app', requestedPath, '404.ts');
    let pathname_js = path.join('./app', requestedPath, '404.ts');
    let p;

    if(fs.existsSync(pathname)){
      p = pathname;
    } else if(fs.existsSync(pathname_js)){
      p = pathname_js;
    }

    if(p){
      return {
        path: pathRequested,
        mappedPath: requestedPath,
        correspondingFile: p,
        type: 'page',
        params: {},
      }
    } else {
      return this.find404(path.join(pathRequested, '../'));
    }
  }

	findLayouts(route: route){
		const layouts: string[] = [];
		
		const filePath = route.correspondingFile;
		const segments = filePath.split('/');
		
		for (let i = segments.length; i > 0; i--) {
			const currentPath = segments.slice(0, i).join('/');
			const layoutPath = path.join(currentPath, 'layout.ts');
			const layoutPathJs = path.join(currentPath, 'layout.js');
	
			if (fs.existsSync(layoutPath)) {
				layouts.push(layoutPath);
			} else if (fs.existsSync(layoutPathJs)) {
				layouts.push(layoutPathJs);
			}
		}

		route.layouts = layouts;
		return layouts;
	}

  findLoader(route: route){
    const loadings: string[] = [];
		
		const filePath = route.correspondingFile;
		const segments = filePath.split('/');
		
		for (let i = segments.length; i > 0; i--) {
			const currentPath = segments.slice(0, i).join('/');
			const loadingPath_ts = path.join(currentPath, 'loading.ts');
			const loadingPath_js = path.join(currentPath, 'loading.js');
	
			if (fs.existsSync(loadingPath_ts)) {
				loadings.push(loadingPath_ts);
			} else if(fs.existsSync(loadingPath_js)){
        loadings.push(loadingPath_js);
      }
		}

    let loader = loadings.pop();
    
		if(loader) route.loader = loader;
		return loader;
  }

  findFile(pathname: string){
    if (fs.existsSync(path.join('./static', pathname))) {
      return path.join('./static', pathname);
    }
    return null;
  }
}
