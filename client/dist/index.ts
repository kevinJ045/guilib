import * as extra from "../extra";
import * as html from "../html";
import * as widgets from "../index";
import * as svg from "../svg";
import Dom from "../utils/dom";
import { WidgetList } from "../widgets/_ghost/WidgetProps";

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
	
	const component = componentClass.buildFor(null, props);
	if(!component) return;
	if(!component.to) return;
	const newElement = document.createElement('div');
	script.parentNode!.insertBefore(newElement, script.nextSibling);
	component.to(newElement);
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
		let widgets = all.elements.map(el => el.GUIWIDGET);
		return returnOne && widgets.length == 1 ? widgets[0] : WidgetList.from(widgets);
	}
	WidgetList = WidgetList;
}

// @ts-ignore
return new Rayous;