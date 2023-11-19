// @ts-ignore
import { plugin, type BunPlugin } from "bun";
import { loaderStyle } from "./loadstyle";
import { bundleCss } from "./cssfull";


export const bunTailwindLoader: BunPlugin = {
  name: 'Tailwindcss Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.tail\.css$/ }, async ({ path }: { path: string }) => {
			const result = await bundleCss(path);
			return { loader: 'js', contents: loaderStyle(path, result) };
    })
  },
}