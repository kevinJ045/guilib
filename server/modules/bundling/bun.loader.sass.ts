// @ts-ignore
import { plugin, type BunPlugin } from "bun";
import { loaderStyle } from "./loadstyle";
const sass = require('sass');
const postcss = require('postcss');
const postcssUrl = require('postcss-url');



export const bunSassLoader: BunPlugin = {
  name: 'Sass Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.(s|)css$/ }, async ({ path }: { path: string }) => {
      const result = sass.compile(path);
      const processedCss = await (postcss([
        postcssUrl({
            url: 'inline',
            encodeType: 'base64',
            maxSize: 10
        })
      ]).process(result.css.toString(), { from: undefined })
      // @ts-ignore
      .then((processedResult) => {
        return processedResult.css;
      }));
			return { loader: 'js', contents: loaderStyle(path, processedCss) };
    })
  },
}