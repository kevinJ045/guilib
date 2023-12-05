import * as extra from "../extra";
import * as html from "../html";
import * as widgets from "../index";
import * as svg from "../svg";
import Dom from "../utils/dom";
import { findEl } from "../utils/elman";
import { WidgetList } from "../widgets/_ghost/WidgetProps";

const pathToRegex = (path: string) => new RegExp("^"+ path.replace(/\\/g,"\\/")
		.replace(/:\w+/g,"(.+)") +"$");

const getParams = (match: { result: any[], route: { path: string } }) => {
	const values = match.result.slice(1);
	const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

	return Object.fromEntries(keys.map((key,i) => {
		return [key,values[0]];
	}));
};

const getCurrentHref = (root: string) => {
	let href = location.href;
	if(!href.match(root.replace(/\?/, '\\?'))) href += root;
	let currentPath = href.split(root)[1];
	if(!currentPath || !currentPath.length) currentPath = '/';
	return currentPath;
}

const setCurrentHref = (root: string, path: string) => {
	let currentPath = getCurrentHref(root);
	let p = location.href.match(currentPath) ? location.href.replace(root+currentPath, root+path) : location.href + (location.href.match(root.replace(/\?/, '\\?')) ? '' : root) + path;
	if(!p.endsWith(root+path)) p += (root+path);
	history.pushState(null, '', p);
}


function makeComponent(componentString: string){
	if(!componentString) return "";
	return `(() => {
const { ${Object.keys(widgets)} } = window.Rayous?.widgets || {};
const { ${Object.keys(extra)} } = window.Rayous?.extra || {};
${componentString.trim().startsWith('return') ? '' : 'return '}${componentString.trim()}
})`;
}

function callComponentClass(componentFunction: () => any, script: HTMLScriptElement){

	let componentClass = componentFunction();
	if(!componentClass) return;
	if(typeof componentClass == "function" && !componentClass.buildFor) componentClass = componentClass();
	if(!componentClass.buildFor) return;


	// @ts-ignore
	const props = {...window.RayousBuildProps};

	const scriptProps = script.attributes.getNamedItem('props');
	if(scriptProps?.textContent){
		try{
			let p = eval('('+scriptProps?.textContent+')');
			if(typeof p == "object") for(let i in p) props[i] = p[i];
		} catch(e){
			console.error(e);
		}
	}
	
	
	const newElement = document.createElement('div');
	newElement.className = 'rayous-widget-component';
	script.parentNode!.insertBefore(newElement, script.nextSibling);

	(newElement as any).script = script;

	function buildComponent(props: any){
		const component = componentClass.buildFor(null, props);
		if(!component) return;
		if(!component.to) return;
		component.to(newElement);
	}

	(script as any).buildScript = (fromRouter: any) => {
		if(fromRouter) {
			buildComponent({...props, ...fromRouter});
		} else if(script.hasAttribute('route')){
			let route = eval(`(${script.getAttribute('route')!})`);
			if(typeof route !== "object") throw new Error('route not a valid JSON object');
			if(typeof route.path !== "string") throw new Error('route.path is not a string as required');
			let root = route.root || "#!";
			if(root == 'origin') root = location.origin;

			(newElement as any).route = route;
	
			const currentPath = getCurrentHref(root);
			
			const regex = pathToRegex(route.path);
	
			let match = regex.exec(currentPath);
			if(match){
				let params = getParams({result: match, route});
				buildComponent({ ...props, params });
			}
	
		} else {
			buildComponent(props);
		}
	}

	(script as any).buildScript();
}

function buildScriptComponent(script: HTMLScriptElement, scriptContent: string){
	const componentFunction = eval(makeComponent(scriptContent));

	if(!componentFunction) return;
	if(typeof componentFunction !== "function") return;
	
	callComponentClass(componentFunction, script);
}

class Rayous {

	constructor(){
		const rayous = this;
		window.addEventListener('load', () => {
			// @ts-ignore
			const componentScripts: HTMLScriptElement[] = document.querySelectorAll('script[type="rayous-component"]');

			// Iterate through each script tag and create an instance of the corresponding class
			componentScripts.forEach((script) => {
				const scriptContent: string = (script.textContent || script.innerText) || "";
				if(scriptContent){
					buildScriptComponent(script, scriptContent);
				} else {
					if(script.hasAttribute('src')){
						const src = script.getAttribute('src')!;
						const componentName = script.getAttribute('componentName');

						function findScript(){
							const _script = document.createElement('script');
							_script.src = src;
							_script.onload = () => {
								callComponentClass(() => rayous.components[componentName!], script);
								delete rayous.components[componentName!];
								_script.remove();
							}
							document.head.appendChild(_script);
						}

						function fetchScript(){
							fetch(src)
							.then(r => r.text())
							.then(text => buildScriptComponent(script, text))
							.catch(e => console.error(e));
						}

						if(componentName){
							findScript();
						} else {
							try{
								fetchScript();
							} catch(e){
								findScript();
							}
						}
						
					}
				}
			});
		});
	}

	components: Record<string, any> = {};
	component(component: () => any){
		this.components[component.name] = component;
	}

	navigate(path: string, props: any = {}){
		const allComponents = Array.from(document.querySelectorAll('.rayous-widget-component'))
		.filter((f: any) => f.route);

		if(!allComponents.length) return;

		let component = allComponents.find(component => {
			let route = (component as any).route;
			return pathToRegex(route.path).test(path);
		});

		if(component){
			allComponents.forEach((s) => s.innerHTML = "");

			let route = (component as any).route;

			const regex = pathToRegex(route.path);

			let match = regex.exec(path);
			let params = getParams({result: match!, route});

			setCurrentHref(route.root || "#!", path);

			(component as any).script.buildScript({ params, ...props });
		}

	}

	extra = extra;
	html = html;
	widgets = widgets;
	svg = svg;
	dom(element: string | HTMLElement, classes?: string | null, attributes?: string | null){
		return new Dom(element, classes, attributes);
	}
	find(selector: string, returnOne: boolean = false){
		let all = new Dom(selector);
		// @ts-ignore
		let widgets = all.elements.filter(el => el.GUIWIDGET).map(el => el.GUIWIDGET);
		return returnOne && widgets.length == 1 ? widgets[0] : WidgetList.from(widgets);
	}
	raw(widget: any){
		return !widget.id ? null : findEl(widget.id).at(0);
	}
	WidgetList = WidgetList;
}

// @ts-ignore
return new Rayous;