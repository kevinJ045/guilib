export function getDefaults(opts: object){
	let defaults = {
		element: {
			name: "div",
			html: null,
			raw: null,
			selector: null
		},
		class: "widget",
		style: {},
		position: {
			type: 'default',
			centered: false,
			top: null,
			left: null,
			bottom: null,
			right: null
		},
		size: {
			width: null,
			height: null
		},
		private: false,
		reset: false,
		value: null,
		children: [],
		accepts: true,
		events: {},
		type: []
	};
	let def = {};
	for(var i in defaults){
		def[i] = defaults[i];
	}
	for(var i in opts){
		def[i] = opts[i];
	}
	return def;
}

export function optionMap(selected: object = {}, defaults: object = getDefaults({})) : object {
	function mergeObjects(target: Record<string, any>, source: Record<string, any>) {
		for (const key in source) {
			if (source.hasOwnProperty(key)) {
				if (source[key] instanceof Object && target[key] instanceof Object) {
					mergeObjects(target[key], source[key]);
				} else {
					target[key] = source[key];
				}
			}
		}
	}

	let options: Record<string, any> = { ...defaults };
	mergeObjects(options, selected);
	return options;
}