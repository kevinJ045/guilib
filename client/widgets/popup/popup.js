;
import { findEl } from "../../utils/elman.js";
import { isHTMLElement, isWidget } from "../../utils/type.js";
import Widget from "../main/Widget.js";


let $1$app = {};

function createPopup(options = {}){
	if(typeof options == "function") options = { build: options };
	if(typeof options != "object") options = {};

	let page;
	let p = $1$app.popup.create({
		content: `<div class="popup"><div class="page"></div></div>`,
		on: {
			open($popup){
				page = Widget.from($popup.$el.find('.page')[0]);
				if(options.swiper) page.add(options.swiper === true ? $(`<div class="swipe-handler popup-close"></div>`)[0] : options.swiper);
				page.add(options.build(page));
			},
			close(){
				page.emit('popup:close', options);
			}
		},
		push: options.push,
		swipeToClose: options.swiper != null,
		swipeHandler: isWidget(options.swiper) ? findEl(options.swiper.id)[0] : (isHTMLElement(options.swiper) ? options.swiper : '.swipe-handler')
	});

	p.open();
}

function $inject$1app$popup(app){
	$1$app = app;
}

export { 
	createPopup,
	$inject$1app$popup
}