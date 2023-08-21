// // my-preset.js
// module.exports = function myPreset(api) {
//   api.cache(true);

//   const presets = [
//     ['@babel/preset-env', { targets: 'defaults' }],
//     '@babel/preset-react',
//   ];

//   const plugins = ['@babel/plugin-proposal-class-properties', './transform-jsx-plugin.js']; // Add the custom plugin

//   return {
//     presets,
//     plugins,
//   };
// };


const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

function transformJSXToTaggedTemplate(jsCode) {
  const ast = parse(jsCode, {
    sourceType: 'module',
    plugins: ['jsx'], // Enable JSX parsing
  });

	function handleJSXExpressionContainer(expressionContainerNode) {
    if (expressionContainerNode.expression.type === 'JSXElement') {
      return generateTaggedTemplate(expressionContainerNode.expression).replace(';', '');
    } else {
      return '${' + transformJSXToTaggedTemplate(generate(expressionContainerNode.expression).code).replace(';', '') + '}';
    }
  }

  function generateTaggedTemplate(node) {
		// console.log(node.openingElement.name?.name);
    if (node.type === 'JSXText') {
      return node.value.replace(/\n\s*/g, '');
    } else if (node.type === 'JSXExpressionContainer') {
      if (node.expression.type === 'JSXElement') {
        return '${' + generateTaggedTemplate(node.expression).replace(';', '') + '}';
      } else {
        return '${' + generate(node.expression).code.replace(';', '') + '}';
      }
    } else {
      const tagName = node.openingElement.name.name;
      const attributes = node.openingElement.attributes
        .map(attr => {
          if (attr.type === 'JSXAttribute') {
            const attrName = attr.name.name == 'className' ? 'class' : attr.name.name;
            const attrValue = attr.value.type === 'JSXExpressionContainer'
              ? '${' + generate(attr.value.expression).code + '}'
              : `${generate(attr.value).code}`;
            return ` ${attrName}=${attrValue}`;
          }
          return null;
        })
        .filter(attr => attr !== null)
        .join(' ');

      const children = node.children
        .map(child => {
          if (child.type === 'JSXText') {
            return child.value;
          } else if (child.type === 'JSXExpressionContainer') {
            return handleJSXExpressionContainer(child);
          } else {
            return generateTaggedTemplate(child);
          }
        })
        .join('');

      return `<${tagName}${attributes}>${children}</${tagName}>`;
    }
  }

  traverse(ast, {
    JSXElement(path) {
      const taggedTemplate = generateTaggedTemplate(path.node);
      path.replaceWithSourceString('$h `' + taggedTemplate + '`');
    },
  });

  // Generate the updated JavaScript code with tagged template literals
  return generate(ast).code;
}

module.exports = function (source) {
  const options = this.getOptions();

  return transformJSXToTaggedTemplate(source);
}