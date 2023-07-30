import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

class Sidebar extends Widget {

	constructor(selectedOptions){
		const options = {...(getDefaults({element: {name: 'div'}, class: 'panel'})), ...selectedOptions};
		super(options);

		const { side, hideWidth, showWidth, swipe, type } = {swipe: false, type: "push", side: 'left', hideWidth: 500, showWidth: 600, ...options.sidebar};

		const element = findEl(this.id);

		if(side) element.addClass('panel-'+side);
		if(type) element.addClass('panel-'+type);
		if(swipe) element.data('swipe', true);
		if(hideWidth) element.data('collapsed-breakpoint', hideWidth);
		if(showWidth) element.data('visible-breakpoint', showWidth);

	}

	_onMount(parent, app){
		if(app){
			findEl(this.id)[0].GUISIDEBAR = app.panel.create({
				el: findEl(this.id)[0]
			});
			if(this.options.open) findEl(this.id)[0].GUISIDEBAR.open();
		}
	}

	hide(){
		findEl(this.id)[0].GUISIDEBAR?.close();
		return this;
	}

	show(){
		findEl(this.id)[0].GUISIDEBAR?.open();
		return this;
	}

	toggle(){
		findEl(this.id)[0].GUISIDEBAR?.opened ? this.hide() : this.show();
		return this;
	}

	mini(){
		findEl(this.id).toggleClass('panel-mini');
		return this;
	}

}

export default Sidebar;