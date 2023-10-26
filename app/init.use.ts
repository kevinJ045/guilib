import { RouterType } from "itty-router";


export function middleware(server: any, router: RouterType){
	router.get('/hello/man', () => new Response('Hi'));
}