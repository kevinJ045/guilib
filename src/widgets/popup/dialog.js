
let app = {};

class Dialog {
	static alert(...args){
		app.dialog.alert(...args);
	}

	static prompt(...args){
		app.dialog.prompt(...args);
	}

	static password(...args){
		app.dialog.password(...args);
	}

	static confirm(...args){
		app.dialog.confirm(...args);
	}

	static login(...args){
		app.dialog.login(...args);
	}

	static injectApp($app){
		app = $app;
	}
}

export default Dialog;