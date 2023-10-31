// @ts-ignore
import { plugin, type BunPlugin } from "bun";
const sass = require('sass');



export const bunSassLoader: BunPlugin = {
  name: 'Sass Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.(s|)css$/ }, async ({ path }: { path: string }) => {
      const result = sass.compile(path);
			return { loader: 'js', contents: `(() => {
        const style = document.createElement('style');
        style.pathname = '${path}';
        style.textContent = \`${result.css.toString().replace(/`/g, '\\`')}\`
        document.head.appendChild(style);
      })()` };
    })
  },
}