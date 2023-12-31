import { error, Router } from "itty-router";
import { readFileSync, readdirSync, statSync, watch, writeFileSync, existsSync } from "fs";
import { middleWare } from "./modules/middleware/middleware";
import { serve } from "./modules/serving/server.bun";

import { resolve as resolvePath, join as joinPath } from "node:path";
import { bundleCss } from "./modules/bundling/cssfull";


function watchFolder(dir: string, onchange: (path: string) => any) {
  watch(dir, (eventType, filename) => {
		if(!filename) return;
    const filePath = joinPath(dir, filename as string);

    if (eventType === 'rename') {
      if (existsSync(filePath)) {
        if (statSync(filePath).isDirectory()) {
          watchFolder(filePath, onchange);
        }
      }
    } else if (eventType === 'change') {
      onchange(filePath);
    }
  });

  readdirSync(dir).forEach((file) => {
    const filePath = joinPath(dir, file);
    if (statSync(filePath).isDirectory()) {
      watchFolder(filePath, onchange);
    }
  });
}


async function startServer(){
	let port = 3000;
	let env: 'dev' | 'prod' = 'dev';
	
	if(existsSync('./rayous.json')){
		const json = JSON.parse(readFileSync('./rayous.json').toString());
		if(json.port) port = parseInt(json.port) || 3000;
		if(json.envprod === true) env = 'prod';
	} else {
		writeFileSync('./rayous.json', '{}');
	}

	const router = Router();

	const { sockets, connectServer } = await middleWare(router);

	router.get('/__css__', async (req: Request) => {
		let url = new URL(req.url);
		let pathname = url.searchParams.get('path');
		if(!pathname) return new Response('');
		const processedCss = await bundleCss(pathname);
		return new Response(processedCss);
	});

	router.all("*", (req: Request) => serve({port, env}, req));

	console.log(`◯ \x1b[38;5;38mServer Started\x1b[0m [\x1b[33m127.0.0.1:${port}\x1b[0m]`);
	// @ts-ignore
	const server = Bun.serve({
		port,
		fetch: (request: Request) => {
			if (server.upgrade(request)) {
				return; // do not return a Response
			}
			else return router.handle(request).catch(error)
		},
		websocket: {
			open(ws: any){
				ws.subscribe("file-change-listeners");
				sockets?.open?.(ws);
			},
			message(ws: any, message: any){
				sockets?.message?.(ws, message);
			},
			close(ws: any){
				ws.unsubscribe("file-change-listeners");
				sockets?.close?.(ws);
			}
		}
	});
	
	if(env === 'dev') {
		watchFolder('./app', (filename: string) => {
			server.publish('file-change-listeners', JSON.stringify({
				type: 'file-change',
				relativePath: filename,
				path: resolvePath(filename)
			}));
		});
		watchFolder('./styles', (filename: string) => {
			server.publish('file-change-listeners', JSON.stringify({
				type: 'file-change',
				relativePath: filename,
				path: resolvePath(filename)
			}));
		});
	}

	connectServer(server);
}

startServer();
