
self.onmessage = async (event) => {

	let { context, code, args , wait } = event.data;

	try{
		with(context){
			var e = eval(code).call(context, context, ...args);
			self.postMessage({success: true, value: wait ? await e : e});
		}
	} catch(e){
		self.postMessage({success: false, error: e});
	}
};