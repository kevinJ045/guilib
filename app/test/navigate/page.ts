import { Component, Link, Text, Widget } from "../../../client";
import { Ref, buildProps } from "../../../client/extra";

export default class extends Component {
	sharableVariable = "yellow";
	letter = new Ref('Inheritted State!');


	override build({router}: buildProps) {
		return new Widget({
			children: [
				new Link('Normal', {
					url: {
						url: './target',
						click: (url: string) => router.navigate(url)
					}
				}),
				new Widget({}),
				new Link('No inheritance', {
					url: {
						url: './target',
						click: (url: string) => router.navigate(url, { inherit: false })
					}
				}),
				new Widget({}),
				new Link('Reinit', {
					url: {
						url: './target',
						click: (url: string) => router.navigate(url, { reinit: true })
					}
				}),
				new Widget({}),
				new Link('Refresh', {
					url: {
						url: './target',
						click: (url: string) => router.navigate(url, { refresh: true })
					}
				})
			]
		});
	}

}