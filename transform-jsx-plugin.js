// transform-jsx-plugin.js
module.exports = function ({ types: t }) {

	console.log(Object.keys(arguments[1]));

	function convertNodeToHTML(node) {
		if (t.isJSXElement(node)) {
			const tagName = node.openingElement.name.name;
			const attrs = node.openingElement.attributes;
			const children = node.children;
	
			// Helper function to convert attributes to a string
			function attributesToString(attrs) {
				return attrs
					.map((attr) => {
						if (t.isJSXExpressionContainer(attr.value)) {
							return ` ${attr.name.name}=\${${attr.value.expression.value}}`;
						} else {
							return ` ${attr.name.name}="${attr.value.value}"`;
						}
					})
					.join(' ');
			}
	
			// Helper function to process nested children
			function processChildren(children) {
				return children
					.map((child) => {
						if (t.isJSXExpressionContainer(child)) {
							console.log(child.expression);
							return ` \${${child.expression.name}}`;
						} else if (t.isJSXElement(child)) {
							return convertNodeToHTML(child);
						} else if (t.isJSXText(child)) {
							return child.value.trim();
						} else {
							return '';
						}
					})
					.join('');
			}
	
			const attrsStr = attributesToString(attrs);
			const childrenStr = processChildren(children);
	
			return `<${tagName}${attrsStr}>${childrenStr}</${tagName}>`;
		} else {
			return '';
		}
	}

  return {
    visitor: {
      JSXElement(path) {
				console.log(Object.keys(path), path.contexts);

        const template = `\`${convertNodeToHTML(path.node)}\``;

				console.log(template);

        const newNode = t.taggedTemplateExpression(t.identifier('$h'), t.templateLiteral([t.templateElement({ raw: template, cooked: template })], []));
        // path.replaceWith(newNode);
      },
    },
  };
};
