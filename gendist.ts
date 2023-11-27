import fs from "fs";

// @ts-ignore
Bun.build({
	entrypoints: ['./client/dist/index.ts'],
  outdir: './dist',
	minify: true
})
.then(() => {
	fs.writeFileSync('./dist/index.js', 
		`(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(global) :
typeof define === 'function' && define.amd ? define(factory) :
(global = global || self, global.Rayous = factory(global));
}(this, (function (global) { 'use strict';
	${fs.readFileSync('./dist/index.js').toString()}
})));
	`
	);
});

