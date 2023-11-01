import * as rayous from "../client";
import { options } from "../extra";
import { mergeOptions } from "./utils";

export interface CardOptions extends options{
	title?: string | rayous.Widget,
	image?: string | rayous.Image,
	actions?: (rayous.Widget | null)[],
	actionsClass?: string,
	content?: (rayous.Widget | null)[]
}

export class Card extends rayous.Widget {

	constructor(options: CardOptions | null = null){
		super(mergeOptions({
			class: 'card',
			_setters: ['image', 'title', 'actions', 'content'],
			children: [
				new rayous.Widget({element: {name: 'figure'}, class: 'card-image'}),
				new rayous.Widget({class: 'card-body', children: [
					new rayous.Widget({class: 'card-title'}),
					new rayous.Widget({class: 'card-content'}),
					new rayous.Widget({class: 'card-actions'+(options?.actionsClass ? ' '+options.actionsClass : '')})
				]})
			]
		}, options || {}));
	}

	addContent(child: rayous.Widget){
		this.add(child, '.card-content');
		return this;
	}

	set title(title: string | rayous.Widget){
		this.find('.card-title')?.remove('*');
		const _title = title instanceof rayous.Widget ? title : new rayous.Text(title);
		this.find('.card-title')?.add(_title);
	}

	set image(image: string | rayous.Image){
		this.find('.card-image')?.remove('*');
		const _img = image instanceof rayous.Image ? image : new rayous.Image(image);
		this.find('.card-image')?.add(_img);
	}

	set actions(actions: (rayous.Widget | null)[]){
		this.find('.card-actions').remove('*');
		actions.forEach(action => action ? this.find('.card-actions').add(action) : null);
	}
	
	set content(content: (rayous.Widget | null)[]){
		this.find('.card-content').remove('*');
		content.forEach(content => content ? this.find('.card-content').add(content) : null);
	}
}