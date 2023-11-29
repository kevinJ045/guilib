// @ts-ignore
import { plugin, type BunPlugin } from "bun";
import fs from "node:fs";

export const bunImageLoader: BunPlugin = {
  name: 'Image Loader',
  setup(build: any) {
    build.onLoad({ filter: /\.(png|jpg|webm|jpeg)$/ }, async ({ path }: { path: string }) => {
			let file = fs.readFileSync(path).toString('base64');
			return { loader: 'js', contents: `function dataURLtoBlob(dataUrl) {
	var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type: mime});
}
const image = dataURLtoBlob(\`data:image/${path.split('.').pop()};base64,${file}\`);export default image;` };
    })
  },
}