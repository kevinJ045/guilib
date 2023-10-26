import Icon from "../icons/Icon.js";


let $1$app = {};

function toast(text, position, time, closeButton, icon){
	if(!time && typeof position == "number") {
		time = position;
		position = null;
	} else if(position == true){
		closeButton = true;
		position = null;
	} else if(position instanceof Icon){
		icon = position;
		position = null;
	}

	let t = $1$app.toast.create({
		text,
		icon: icon?.toString(),
		position: position || 'bottom',
		closeTimeout: time == null ? 2000 : time,
		closeButton
	});
	t.open();
	return t;
}
toast.show = function(options){
	const { text, position, time, closeButton, icon } = options;
	return toast(text, position, time, closeButton, icon);
}

function injectApp$toast(app){
	$1$app = app;
}

export {
	injectApp$toast,
	toast
}