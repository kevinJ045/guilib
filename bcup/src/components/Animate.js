
import anime from "../modules/anime.js";
import { findEl } from "../utils/elman.js";

function makeOps(animations){
	for(var i in animations){
		let anim = animations[i];
		if(typeof anim == "function"){
			animations[i] = (el, ...args) => {
				return anim(el.GUIWIDGET, ...args);
			}
		}
		if(typeof anim == "string"){
			let func = anim.match(/(random|stagger)\(([^)]+)\)/);
			let funcs = 'random|none'.split('|')
			if(func){
				let args = func[2].match(',') ? func[2].split(',').map(i => i.trim()) : [func[2]];
				args = args.map(g => isNaN(parseInt(g)) ? g : parseInt(g));
				animations[i] = funcs.includes(func[1]) ? () => anime[func[1]](...args) : anime[func[1]](...args);
			}
		}
	}
	return animations;
}

function animateWidgets(widgets, animations){
	animations = makeOps(animations);
	return anime({
		targets: widgets.map(widget => findEl(widget.id)[0]),
		...animations
	});
}

function animateWidget(widget, animations){
	return animateWidgets([widget], animations);
};

export { animateWidget, animateWidgets };