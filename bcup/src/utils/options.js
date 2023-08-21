export default function getDefaults(opts){
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