export function loaderStyle(path: string, content: string){
	return `(() => {
		const style = document.createElement('style');
		style.pathname = '${path}';
		style.textContent = atob(\`${btoa(content)}\`);
		document.head.appendChild(style);
	})()`
}