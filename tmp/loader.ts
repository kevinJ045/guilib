
	import Loader from "../app/test/loading/loading.ts"
	(function(){

let loaderOn = "app/test/loading/loading.ts", loader, after = false;


if(loaderOn){
	try{
		if(typeof Loader == "function"){
			loader = Loader({ route: {path: "/test/loading", params: {} }});
			if(!loader instanceof HTMLElement){
				throw new TypeError('Loader from app/test/loading/loading.ts is not a returning a function that returns a widget!');
			} else {
				if(loader?.removeAfterLoad) after = true;
				document.body.appendChild(loader);
			}
		} else {
			throw new TypeError('Loader from app/test/loading/loading.ts is not a returning a function that returns a widget!');
		}
	} catch(e){
		document.write(e);
		throw e;
	}
}
window.loader = loader;
window.loaderAfter = after;
window.loaderOn = loaderOn;
})();