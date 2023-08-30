import Framework7 from "framework7/bundle";
import Widget from "../widgets/main/Widget.js";
import { setThemeMap } from "../theme/base.js";
import { injectApp$toast } from "../widgets/popup/toast.js";


function createApp(appOptions, view){
	const options = {
		el: null,
		name: 'GUIApp',
		theme: 'ios',
		colors: {},
		darkMode: true,
		...appOptions
	};

	var app = new Framework7(options);
	Widget.injectApp(app);
	injectApp$toast(app);
	

	setThemeMap(app);

	if(view){
		if(typeof view == "function") {
			view = view(app, options);
		}
		app.views.create(view);
	}

	return app;
}

export {
	createApp
}