const elementList = {};
const specificTypes = 'large|transparent|outline'.split('|')

function registerElement(element, id){
	elementList[id] = element;
}

function findEl(id){
	return elementList[id];
}

function elementTypes(type1, types, id){
	if(type1 == 'div') type1 = null;
	types.forEach(type => {
		let el = findEl(id);
		if(specificTypes.includes(type)){
			type1 = findEl(id)[0].GUIWIDGET.options.class;
		}
		let t = (type1 ? type1+'-' : '')+type;
		el.toggleClass(t);
	});
}

export {
	registerElement,
	findEl,
	elementTypes,
	elementList as GUIDOMTREE
}