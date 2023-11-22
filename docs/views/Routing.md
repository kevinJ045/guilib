# Routing

The `route` file can be used as a middleware for your requests,
here is an example:

in `app/route.ts` write:
```ts
export function GET(req: Request, route: object){
    return "Hello!";
}
```
Now if there is no `app/page.ts`, it will use this as a route and use the method name to call the corresponding function.
