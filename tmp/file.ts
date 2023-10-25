import page0 from "../app/home/page";

import page1 from "../app/layout";


		let made0 = new page0().build({ route: {path: "/home", params: {} }, page: null });
let made1 = new page1().build({ route: {path: "/home", params: {} }, page: made0 });

		
made1.to(document.body)
	