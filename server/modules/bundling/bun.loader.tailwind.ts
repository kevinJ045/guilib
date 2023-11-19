// @ts-ignore
import { plugin, type BunPlugin } from "bun";
import { loaderStyle } from "./loadstyle";
const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const { readFileSync } = require('fs');


export const bunTailwindLoader: BunPlugin = {
  name: 'Tailwindcss Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.tail\.css$/ }, async ({ path }: { path: string }) => {
			const result = await postcss([tailwindcss])
				.process(readFileSync(path), { from: undefined });

			return { loader: 'js', contents: loaderStyle(path, result.css) };
    })
  },
}