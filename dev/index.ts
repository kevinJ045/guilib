import { Widget } from "../client/index";
import "./logger.css";

class DevConsole extends Widget {
	constructor(){
		super({
			class: 'dev-console',
			id: 'dev-console'
		});

		window.addEventListener('error', (e) => {
			this.error(e);
		});
	}

	private __log(log: any[], type: 'log' | 'warning' | 'error'){

	}

	log(...l: any[]){
		this.__log(l, 'log');
	}

	warn(...w: any[]){
		this.__log(w, 'warning');
	}

	error(...e: any[]){
		this.__log(e, 'error');
	}
}

export const console = new DevConsole();
window.addEventListener('load', () => {
	console.to(document.body);
});

