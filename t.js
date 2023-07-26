const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

function transformJSXToTaggedTemplate(jsCode) {
  const ast = babelParser.parse(jsCode, {
    sourceType: 'module',
    plugins: ['jsx'], // Enable JSX parsing
  });

  function generateTaggedTemplate(node) {
  	console.log(node)
    if (node.type === 'JSXText') {
      return node.value.replace(/\n\s*/g, '');
    } else if (node.type === 'JSXExpressionContainer') {
      if (node.expression.type === 'JSXElement') {
        return '${' + generateTaggedTemplate(node.expression) + '}';
      } else {
        return '${' + generate(node.expression).code + '}';
      }
    } else {
      console.log(node.openingElement?.name?.name);
      const tagName = node.openingElement.name.name;
      const attributes = node.openingElement.attributes
        .map(attr => {
          if (attr.type === 'JSXAttribute') {
            const attrName = attr.name.name;
            const attrValue = attr.value.type === 'JSXExpressionContainer'
              ? '${' + generate(attr.value.expression).code + '}'
              : `"${generate(attr.value).code}"`;
            return `${attrName}=${attrValue}`;
          }
          return null;
        })
        .filter(attr => attr !== null)
        .join(' ');

      const children = node.children
        .map(child => {
        	// console.log(child);
          if (child.type === 'JSXText') {
            return child.value;
          } else if (child.type === 'JSXExpressionContainer') {
			console.log('yaheee', tagName, child.expression)
            return '${' + generate(child.expression).code + '}';
          } else {
            return generateTaggedTemplate(child);
          }
        })
        .join('');

      console.log(children);

      return `<${tagName} ${attributes}>${children}</${tagName}>`;
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

// Example usage:
const jsCodeWithJSX = `
  function App() {
    return (
      <div class="page">
        <p>The value is {value}</p>
        <p>
          <button onClick={() => addValue(10)}>Add Value</button>
        </p>
        <ul>
          {items.map(item => <li>{item} h</li>)}
        </ul>
      </div>
    );
  }
`;

const transformedCode = transformJSXToTaggedTemplate(jsCodeWithJSX);
console.log(transformedCode);
