# Building

You can build rayous's pages into normal htmls in your `public` folder if they're not a dynamic route, you can also include your static files if you want.
```bash
npx rayous build / /home /posts
```

You can also build all pages with this:
```bash
npx rayous build "*"
```

You can include your static files from the `static` folder like this:
```bash
npx rayous build static
```

To make a complete build, you can:
```bash
npx rayous build "*" static
```

## Dynamic routes
When building dynamic pages, since it will be making static pages, it can't actually have the server dynamic functionality, so if you want to render a dynamic page, you have to make a `params.ts` file in which will export a function that will return an array of params.

For example if the only parameter available in the path is `id`, it is required to export an array of objects with property `id`.

The function can also be async, meaning you can fetch data from somewhere on building into a static site.

example:
```ts
export function params(){
  return [
    {
      id: "1"
    },
    {
      id: "2"
    },
    {
      id: "3"
    }
  ];
}
```



