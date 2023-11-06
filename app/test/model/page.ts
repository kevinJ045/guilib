import { Button, Component, Image, Link, Text, Widget } from "../../../client";
import { buildProps } from "../../../client/extra";
import "../../../styles/main.tail.css";

const Card = Widget.model({
	"selector": "div.card",
	"children": [
		{
			"selector": "div.card-body",
			"children": [
				"h2.card-title",
				{ "selector": "div.card-content" },
				{ "selector": "div.card-actions" }
			]
		}
	],
	"options": {
		"click": {
			"function": {
				"this": {
					"onClick": "$click"
				}
			}
		},
		"actions": {
			"type": "array",
			"forEach": {
				"any": {
					"div.card-actions": {
						"append": "$item"
					}
				}
			}
		},
		"content": {
			"type": "array",
			"forEach": {
				"widget": {
					"div.card-content": {
						"append": "$item"
					}
				}
			}
		},
		"title": {
			"string": {
				"h2.card-title": {
					"append": {
						"selector": "span.span",
						"text": "$title"
					}
				}
			},
			"widget": {
				"h2.card-title": {
					"empty": true,
					"append": "$title"
				}
			}
		},
		"actionClass": {
			"string": {
				"div.card-actions": {
					"addClass": "$actionClass"
				}
			}
		},
		"image": {
			"any": {
				"div.card-body": {
					"prepend": {
						"selector": "figure.card-image-container"
					}
				}
			},
			"string": {
				"figure.card-image-container": {
					"append": {
						"selector": "img.card-image",
						"attributes": {
							"src": "$image"
						}
					}
				}
			},
			"widget": {
				"figure.card-image-container": {
					"append": "$image"
				}
			}
		}
	}
}, {
		image: "",
		title: "",
		content: [],
		actions: []
});

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			class: 'flex flex-col items-center w-screen py-10',
			children: [
				new Text("Projects", { class: "w-full text-center text-3xl font-bold" }),
				new Card({
					class: 'bg-base-200 my-4 w-80',
					title: new Text("scriff"),
					image: new Image("/some.png", {
						class: 'w-72'
					}),
					actions: [
						new Button('Open', {
							class: 'btn btn-accent'
						})
					],
					content: [
						new Text('A mini webos')
					],
					actionClass: 'justify-end',
					click(){
						console.log("sjjs");
					}
				})
			]
		});
	}
	static layouts = false;
}