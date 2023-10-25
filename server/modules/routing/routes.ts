import fs from 'fs';
import path from 'path';
import { fileTypes } from '../../constant/files';

type pathmap = {
	regex: RegExp,
	path: string,
	keys: string[]
}

export interface route {
	path: string,
	mappedPath: string,
	correspondingFile: string,
	type: 'route' | 'page',
	params: Record<string, any>,
	layouts?: string[]
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
      path
        .replace(/\\/g, '\\/')
        .replace(/:(\w+)/g, (_, key) => {
          keys.push(key);
          return '(.+)';
        }) +
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
				if(fileTypes.includes(file)) this.paths.set(fixedPath, { regex: pathRegex.regex, keys: pathRegex.keys, path: filePath});
      }
    });
  }

  findPath(requestedPath: string) {
    this.registerMaps();

    for (const [pathName, { regex, path, keys }] of this.paths.entries()) {
      const match = requestedPath.match(regex);
      if (match) {
        return {
					path: requestedPath,
					mappedPath: pathName,
					correspondingFile: path,
					type: path.endsWith('route.ts') || path.endsWith('route.js') ? 'route' : 'page',
					params: getParams(match, keys),
				};
      }
    }

    return null; // Path not found.
  }

	findLayouts(route: route){
		const layouts: string[] = [];
		
		const filePath = route.correspondingFile;
		const segments = filePath.split('/');
		
		for (let i = segments.length; i > 0; i--) {
			const currentPath = segments.slice(0, i).join('/');
			const layoutPath = path.join(currentPath, 'layout.ts');
	
			if (fs.existsSync(layoutPath)) {
				layouts.push(layoutPath);
			}
		}

		route.layouts = layouts;
		return layouts;
	}
}
