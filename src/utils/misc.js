const htmlPseudos = [
  '::after',
  '::before',
  '::first-letter',
  '::first-line',
  '::selection',
  '::placeholder',
  '::marker',
  ':hover',
  ':active',
  ':focus',
  ':visited',
  ':link',
  ':target',
  ':first-child',
  ':last-child',
  ':nth-child(n)',
  ':nth-of-type(n)',
  ':not(selector)',
  ':checked',
];

function filteredChildren(children){
	return children.toArray()
		.filter(element => element.GUIWIDGET)
		.map(element => element.GUIWIDGET);
}

function resolveSubchild(element, child){
  let el = element;
  if(child && el.find(child).length) el = el.find(child);
  return el;
}

function generateFixedId(inputString) {
  let hash = 0;
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const fixedId = 'G' + Math.abs(hash).toString(36).slice(0, 12); // Prefix with 'G', convert to base36, and take the first 12 characters
  return fixedId;
}

export {
	htmlPseudos,
	filteredChildren,
  resolveSubchild
}