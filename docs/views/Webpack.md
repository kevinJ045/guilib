# Webpack
Rayous is completely made with typescript, as a result, it might be difficult to include it outside it's [bun](https://bun.sh) environment.

That's why `rayous/bundle` exists, the `rayous/bundle` has every module built into javascript, making it convinient to include the bundles and work with them.

```ts
import { Text } from "rayous/bundle";
```

Keep in mind though as you import the bundles, because they are built separately, Controllers and such classes won't work.

### Building
Webpack has a `ts-loader` library that can be used to bundle typescript into your files, since rayous is typescript, you can just include it if you're using ts-loader.

In your webpack config, just add:
```json
"resolve": {
	"modules": [..., path.resolve('./node_modules')],
	"extensions": [".ts", ".tsx", ".js", ".jsx"],
}
```
and this to your `module.rules`:
```json
{
	"test": /\.ts$/,
	"use": {
		"loader": "ts-loader",
		"options": {
			"allowTsInNodeModules": true
		},
	},
}
```

