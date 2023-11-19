
import * as sass from "sass";
// @ts-ignore
import postcssUrl from "postcss-url";
import tailwindcss from "tailwindcss";
import postcss from "postcss";

export async function bundleCss(path: string){
	const result = sass.compile(path!);
	let plugins = [];
	if(path?.endsWith('.tail.css')) plugins.unshift(tailwindcss);
	const processedCss = await (postcss(plugins)
	.use(
		postcssUrl({
			url: 'inline',
			encodeType: 'base64',
			maxSize: 10
		})
	).process(result.css.toString(), { from: path })
	// @ts-ignore
	.then((processedResult) => {
		return processedResult.css;
	}));
	return processedCss;
}