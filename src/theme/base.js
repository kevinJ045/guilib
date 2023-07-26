import $ from "jquery";
import { hRGB } from "../utils/color.js";

const defaultMap = {
	colors: {
		primary: '#eba0ac',
		red: '#f38ba8',
		green: '#a6e3a1',
		blue: '#74c7ec',
		pink: '#f5c2e7',
		yellow: '#f9e2af',
		orange: '#fab387',
		purple: '#9c27b0',
		deeppurple: '#673ab7',
		lightblue: '#cba6f7',
		teal: '#94e2d5',
		lime: '#89dceb',
		deeporange: '#74c7ec',
		white: '#f5e0dc',
		black: '#11111b',
		base: '#1e1e2e',
		mantle: '#181825',
		crust: '#11111b'
	}
}

const mapnames = {
	'base': '--base-color',
	'mantle': '--base-mantle',
	'crust': '--base-crust'
};

function setThemeMap(app, map = defaultMap){
	const css = {};
	const colors = Object.assign({...defaultMap.colors}, map.colors);

	for(var i in map.colors){
		if(i in mapnames){
			const name = mapnames[i];
			const val = map.colors[i]
			css[name] = val;
			css[name+'-rgb'] = hRGB(val);
		}
	}

	$(':root').css(css);
	app.colors = colors;
	app.setColorTheme(map.colors.primary);
}


export {
	setThemeMap
}