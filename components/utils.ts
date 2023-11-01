const mergableOptions = 'class|type|_setters|children'.split('|');
const mergeSeparator: Record<string, string> = {
	class: ' '
};


export function mergeOptions(defaults: Record<string, any>, options: Record<string, any>){
	let o = {...defaults};
	for(let i in options){
		if(o[i]){
			if(typeof o[i] == typeof options[i]){
				if(typeof o[i] == 'object'){
					if(Array.isArray(o[i])){
						if(mergableOptions.includes(i)) o[i].push(...options[i]);
						else o[i] = options[i];
					} else {
						mergeOptions(o[i], options[i]);
					}
				} else if(mergableOptions.includes(i)){
					o[i] += (mergeSeparator[i] || "")+options[i];
				} else {
					o[i] = options[i];
				}
			} else {
				o[i] = options[i];
			}
		} else {
			o[i] = options[i];
		}
	}
	return o;
}