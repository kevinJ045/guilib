# Project Structure

When you run `npx rayous create` it will create the following folders:
```
project/
	app/
		page.ts
	styles/
	static/
	package.json
	rayous.json
``` 

This is the basic simple project structure for a rayous app. Here's the breakdown.

### app/
The `app` folder is where all your pages and components sit, it is the routable folder. with file names indicating a certain route.
for example app/page.ts or app/page.js will be rendered to `hostname:port/` and for example `app/home/page.ts` will be rendered in `hostname:port/home` as a page.

#### Here are the file names to make routes:
+ page.ts | page.js renders path as a page
+ route.ts | route.js uses it as request path for any method
+ layout.ts | container for any page 
+ loading.ts | loader for pages

You can see the [github repo](https://github.com/kevinj045/guilib) for examples.

### styles/
This folder holds the css/scss files that can be imported to the pages.


### static/
This folder is meant as a place to store static files, such as images and whatnot




