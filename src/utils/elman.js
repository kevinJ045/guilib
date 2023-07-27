const elementList = {};

function registerElement(element, id){
	elementList[id] = element;
}

function findEl(id){
	return elementList[id];
}

function elementTypes(type1, types, id){
	if(type1 == 'div') type1 = null;
	types.forEach(type => {
		var t = (type1 ? type1+'-' : '')+type;
		var el = findEl(id);
		el.toggleClass(t);
	});
}

export {
	registerElement,
	findEl,
	elementTypes,
	elementList as GUIDOMTREE
}