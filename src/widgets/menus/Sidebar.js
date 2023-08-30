import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";
import { findEl } from "../../utils/elman.js";

class Sidebar extends Widget {

	constructor(selectedOptions){
		const options = {...(getDefaults({element: {name: 'div'}, class: 'panel panel-in-breakpoint'})), ...selectedOptions};
		super(options);

		const { side, hideWidth, showWidth, swipe, type } = {swipe: false, type: null, side: 'left', hideWidth: 768, showWidth: 4000, ...options.sidebar};

		options.sidebar = { side, hideWidth, showWidth, swipe, type };

		const element = findEl(this.id);

		if(side) element.addClass('panel-'+side);
		if(type) element.addClass('panel-'+type);
		if(swipe) element.attr('data-swipe', true);
		if(hideWidth) element.attr('data-collapsed-breakpoint', hideWidth);
		if(showWidth) element.attr('data-visible-breakpoint', showWidth);

	}

	_onMount(parent, app){
		if(app && app.panel){
			const { hideWidth, showWidth, swipe, side } = {...this.options.sidebar};
			findEl(this.id)[0].GUISIDEBAR = app.panel.create({
				el: findEl(this.id)[0],
				side,
				visibleBreakpoint: showWidth,
				collapsedBreakpoint: hideWidth,
				swipe,
				opened: this.options.open || false,
				swipeOnlyClose: findEl(this.id).hasClass('panel-main'),
				backdrop: !findEl(this.id).hasClass('panel-main')
			});
			findEl(this.id)[0].GUISIDEBAR.enableVisibleBreakpoint();
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