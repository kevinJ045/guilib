import { plugin, type BunPlugin } from "bun";
const sass = require('sass');



export const bunSassLoader: BunPlugin = {
  name: 'Sass Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.scss$/ }, async ({ path }: { path: string }) => {
      const result = sass.compile(path);
			return { loader: 'js', contents: `(() => {
        const style = document.createElement('style');
        style.pathname = '${path}';
        style.textContent = \`${result.css.toString()}\`
        document.head.appendChild(style);
      })()` };
    })
  },
}