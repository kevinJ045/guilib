// @ts-ignore
import { plugin, type BunPlugin } from "bun";
import { loaderStyle } from "./loadstyle";
import { bundleCss } from "./cssfull";


export const bunSassLoader: BunPlugin = {
  name: 'Sass Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.(s|)css$/ }, async ({ path }: { path: string }) => {
      const processedCss = await bundleCss(path);
			return { loader: 'js', contents: loaderStyle(path, processedCss) };
    })
  },
}