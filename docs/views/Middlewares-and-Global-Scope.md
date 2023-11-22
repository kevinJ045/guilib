# Middlewares and Global-Scope

Any file that ends with .use.ts in the app folder is imported to the server and used as a middleware.

for example:
in app/init.use.ts
```ts
export function middleware(server:  any,  router:  any){
router.get('/anypath',  () => new Response('Hi'));
}

export const socket = {
	open(ws) => {},
	close(ws) => {},
	message(ws) => {}
}
```

## in client
In the client, if you make a `app/init.client.ts` you can export a init function and after function, and they will be called before a page init and after a page init, like this:
```ts
export function init(props: buildProps){
	return {...}; 
}
export function after(props: buildProps){
	...
}
```

> Note: Anything returned from the init function is passed to buildProps in all components.