import Widget from "../widgets/main/Widget";

export type ElementOptions = Record<string, any>;

export class WebkitWidget extends Widget {
	constructor(options = {}){
		super(options);
	}
}

export class Video extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","controls","src"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "video" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set controls(value: any){
		(this.options as any).attr['controls'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
}
	

export class Ul extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "ul" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Track extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","kind","src","srclang","label","default"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "track" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set kind(value: any){
		(this.options as any).attr['kind'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
	set srclang(value: any){
		(this.options as any).attr['srclang'] = value;
	}
	
	set label(value: any){
		(this.options as any).attr['label'] = value;
	}
	
	set default(value: any){
		(this.options as any).attr['default'] = value;
	}
	
}
	

export class Title extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "title" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Time extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","datetime"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "time" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set datetime(value: any){
		(this.options as any).attr['datetime'] = value;
	}
	
}
	

export class Textarea extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","rows","cols","readonly"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "textarea" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set rows(value: any){
		(this.options as any).attr['rows'] = value;
	}
	
	set cols(value: any){
		(this.options as any).attr['cols'] = value;
	}
	
	set readonly(value: any){
		(this.options as any).attr['readonly'] = value;
	}
	
}
	

export class Template extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","content"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "template" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set content(value: any){
		(this.options as any).attr['content'] = value;
	}
	
}
	

export class Tablesection extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","align"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "tablesection" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set align(value: any){
		(this.options as any).attr['align'] = value;
	}
	
}
	

export class Tablerow extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","align","valign"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "tablerow" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set align(value: any){
		(this.options as any).attr['align'] = value;
	}
	
	set valign(value: any){
		(this.options as any).attr['valign'] = value;
	}
	
}
	

export class Table extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","width","border","cellpadding","cellspacing"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "table" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set border(value: any){
		(this.options as any).attr['border'] = value;
	}
	
	set cellpadding(value: any){
		(this.options as any).attr['cellpadding'] = value;
	}
	
	set cellspacing(value: any){
		(this.options as any).attr['cellspacing'] = value;
	}
	
}
	

export class Tablecol extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","span"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "tablecol" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set span(value: any){
		(this.options as any).attr['span'] = value;
	}
	
}
	

export class Tablecell extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","align","valign"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "tablecell" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set align(value: any){
		(this.options as any).attr['align'] = value;
	}
	
	set valign(value: any){
		(this.options as any).attr['valign'] = value;
	}
	
}
	

export class Tablecaption extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","align"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "tablecaption" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set align(value: any){
		(this.options as any).attr['align'] = value;
	}
	
}
	

export class Style extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable","media"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "style" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set media(value: any){
		(this.options as any).attr['media'] = value;
	}
	
}
	

export class Span extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "span" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Source extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable","src","media"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "source" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
	set media(value: any){
		(this.options as any).attr['media'] = value;
	}
	
}
	

export class Slot extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "slot" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Select extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","size","multiple"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "select" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set size(value: any){
		(this.options as any).attr['size'] = value;
	}
	
	set multiple(value: any){
		(this.options as any).attr['multiple'] = value;
	}
	
}
	

export class Script extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable","src"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "script" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
}
	

export class Quote extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "quote" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Progress extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","max","value"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "progress" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set max(value: any){
		(this.options as any).attr['max'] = value;
	}
	
	set value(value: any){
		(this.options as any).attr['value'] = value;
	}
	
}
	

export class Pre extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","width"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "pre" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Picture extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "picture" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Param extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["type","contenteditable","value"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "param" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set value(value: any){
		(this.options as any).attr['value'] = value;
	}
	
}
	

export class Paragraph extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "paragraph" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Output extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "output" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Option extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","value","label","selected"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "option" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set value(value: any){
		(this.options as any).attr['value'] = value;
	}
	
	set label(value: any){
		(this.options as any).attr['label'] = value;
	}
	
	set selected(value: any){
		(this.options as any).attr['selected'] = value;
	}
	
}
	

export class Optgroup extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","label"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "optgroup" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set label(value: any){
		(this.options as any).attr['label'] = value;
	}
	
}
	

export class Object extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable","data","height","width"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "object" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set data(value: any){
		(this.options as any).attr['data'] = value;
	}
	
}
	

export class Ol extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "ol" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Mod extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "mod" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Meter extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","value","min","max","low","high","optimum"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "meter" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set value(value: any){
		(this.options as any).attr['value'] = value;
	}
	
	set min(value: any){
		(this.options as any).attr['min'] = value;
	}
	
	set max(value: any){
		(this.options as any).attr['max'] = value;
	}
	
	set low(value: any){
		(this.options as any).attr['low'] = value;
	}
	
	set high(value: any){
		(this.options as any).attr['high'] = value;
	}
	
	set optimum(value: any){
		(this.options as any).attr['optimum'] = value;
	}
	
}
	

export class Meta extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["type","contenteditable","content"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "meta" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set content(value: any){
		(this.options as any).attr['content'] = value;
	}
	
}
	

export class Menu extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable","label"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "menu" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set label(value: any){
		(this.options as any).attr['label'] = value;
	}
	
}
	

export class Media extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","src"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "media" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
}
	

export class Marquee extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","behavior","direction","scrollamount","loop"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "marquee" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set behavior(value: any){
		(this.options as any).attr['behavior'] = value;
	}
	
	set direction(value: any){
		(this.options as any).attr['direction'] = value;
	}
	
	set scrollamount(value: any){
		(this.options as any).attr['scrollamount'] = value;
	}
	
	set loop(value: any){
		(this.options as any).attr['loop'] = value;
	}
	
}
	

export class Map extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "map" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Link extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","rel","href"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "link" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set rel(value: any){
		(this.options as any).attr['rel'] = value;
	}
	
	set href(value: any){
		(this.options as any).attr['href'] = value;
	}
	
}
	

export class Legend extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","align"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "legend" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set align(value: any){
		(this.options as any).attr['align'] = value;
	}
	
}
	

export class Label extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","for"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "label" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set for(value: any){
		(this.options as any).attr['for'] = value;
	}
	
}
	

export class Li extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "li" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Input extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","contenteditable","value","readonly"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "input" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set value(value: any){
		(this.options as any).attr['value'] = value;
	}
	
	set readonly(value: any){
		(this.options as any).attr['readonly'] = value;
	}
	
}
	

export class Image extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "image" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Iframe extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","src","frameborder","height","width"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "iframe" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
	set frameborder(value: any){
		(this.options as any).attr['frameborder'] = value;
	}
	
}
	

export class Heading extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "heading" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Head extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "head" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Hr extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","color","width"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "hr" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set color(value: any){
		(this.options as any).attr['color'] = value;
	}
	
	
}
	

export class Frameset extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "frameset" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Frame extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","src"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "frame" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
}
	

export class Form extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","action","method","enctype","target"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "form" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set action(value: any){
		(this.options as any).attr['action'] = value;
	}
	
	set method(value: any){
		(this.options as any).attr['method'] = value;
	}
	
	set enctype(value: any){
		(this.options as any).attr['enctype'] = value;
	}
	
	set target(value: any){
		(this.options as any).attr['target'] = value;
	}
	
}
	

export class Font extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "font" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Fieldset extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","disabled"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "fieldset" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set disabled(value: any){
		(this.options as any).attr['disabled'] = value;
	}
	
}
	

export class Embed extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "embed" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Div extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","align"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "div" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set align(value: any){
		(this.options as any).attr['align'] = value;
	}
	
}
	

export class Directory extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","compact"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "directory" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set compact(value: any){
		(this.options as any).attr['compact'] = value;
	}
	
}
	

export class Dialog extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","open"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "dialog" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set open(value: any){
		(this.options as any).attr['open'] = value;
	}
	
}
	

export class Details extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","open"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "details" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set open(value: any){
		(this.options as any).attr['open'] = value;
	}
	
}
	

export class Datalist extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","id"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "datalist" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}

	
}
	

export class Data extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "data" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Dlist extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","compact"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "dlist" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set compact(value: any){
		(this.options as any).attr['compact'] = value;
	}
	
}
	

export class Canvas extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","width","height"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "canvas" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Button extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["contenteditable","value"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "button" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set value(value: any){
		(this.options as any).attr['value'] = value;
	}
	
}
	

export class Base extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","href"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "base" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set href(value: any){
		(this.options as any).attr['href'] = value;
	}
	
}
	

export class Br extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "br" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
}
	

export class Audio extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","controls","src"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "audio" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set controls(value: any){
		(this.options as any).attr['controls'] = value;
	}
	
	set src(value: any){
		(this.options as any).attr['src'] = value;
	}
	
}
	

export class Area extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","shape","coords","href","alt"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "area" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set shape(value: any){
		(this.options as any).attr['shape'] = value;
	}
	
	set coords(value: any){
		(this.options as any).attr['coords'] = value;
	}
	
	set href(value: any){
		(this.options as any).attr['href'] = value;
	}
	
	set alt(value: any){
		(this.options as any).attr['alt'] = value;
	}
	
}
	

export class Anchor extends WebkitWidget {
	constructor(options: Record<string, any> = {}){
		let attributes = ["name","type","contenteditable","target","href","title"];
		for(let i in options){
			if(attributes.indexOf(i) > -1){
				if(!options.attr) options.attr = {};
				options.attr[i] = options[i];
				delete options[i];
			}
		}
		super({
			class: '',
			...options,
			element: { name: "a" }
		});
		if(options.text){
			this.text(options.text);
		}
	}
	
	set name(value: any){
		(this.options as any).attr['name'] = value;
	}
	
	set type(value: any){
		(this.options as any).attr['type'] = value;
	}
	
	set contenteditable(value: any){
		(this.options as any).attr['contenteditable'] = value;
	}
	
	set target(value: any){
		(this.options as any).attr['target'] = value;
	}
	
	set href(value: any){
		(this.options as any).attr['href'] = value;
	}
	
	set title(value: any){
		(this.options as any).attr['title'] = value;
	}
	
}
	