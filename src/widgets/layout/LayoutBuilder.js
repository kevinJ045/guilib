import Widget from "../main/Widget.js";
import getDefaults from "../../utils/options.js";


class LayoutBuilder extends Widget {
	constructor(selectedOptions) {
		const options = {
			...(getDefaults({ element: { name: 'div' }, class: 'layout-builder' })),
			...selectedOptions,
		};
		super(options);

		const handleResize = () => {
			const parentWidth = this.parent().width();
			const parentHeight = this.parent().height();

			this.emit('resize', { width: window.innerWidth, height: window.innerHeight });

			if (options.queries) {
				const prevChildren = this.children().map(child => findEl(child.id));
				this.remove('*');
				const matchedQuery = Object.entries(options.queries).find(([query, builderFn]) => {
					const [width, widthOp, widthValue, height, heightOp, heightValue] = query.split(/\s+/);
					let w, h;
					if (width === 'pw') {
						w = parentWidth;
					} else {
						w = window.innerWidth;
					}
					if (height === 'ph') {
						h = parentHeight;
					} else {
						h = window.innerHeight;
					}
					let widthMatch = true;
					let heightMatch = true;

					if (width && widthOp && widthValue) {
						switch (widthOp) {
							case '>':
								widthMatch = w > Number(widthValue);
								break;
							case '>=':
								widthMatch = w >= Number(widthValue);
								break;
							case '<':
								widthMatch = w < Number(widthValue);
								break;
							case '<=':
								widthMatch = w <= Number(widthValue);
								break;
							default:
								widthMatch = false;
						}
					}

					if (height && heightOp && heightValue) {
						switch (heightOp) {
							case '>':
								heightMatch = h > Number(heightValue);
								break;
							case '>=':
								heightMatch = h >= Number(heightValue);
								break;
							case '<':
								heightMatch = h < Number(heightValue);
								break;
							case '<=':
								heightMatch = h <= Number(heightValue);
								break;
							default:
								heightMatch = false;
						}
					}

					return widthMatch && heightMatch;
				});

				if (matchedQuery) {
					const [query, builderFn] = matchedQuery;
					const newChildren = builderFn(prevChildren.map(child => child.GUIWIDGET));
					if (newChildren instanceof Widget) {
						this.add(newChildren);
					} else if (Array.isArray(newChildren)) {
						newChildren.forEach((child) => this.add(child));
					}
				}
			}

			this.emit('layout:rebuild', { width: window.innerWidth, height: window.innerHeight });
		};

		$(window).on('resize', handleResize);
		handleResize();
	}
}

export default LayoutBuilder;