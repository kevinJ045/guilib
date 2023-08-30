import { WidgetList } from "../widgets/_ghost/WidgetProps";
import Widget from "../widgets/main/Widget";
import Dom from "./dom";

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

function filteredChildren(children, makeOne, giveNull){
  const filtered = children.toArray()
    .filter((element) => element.GUIWIDGET)
    .map((element) => element.GUIWIDGET);
  const isOne = filtered.length == 1 && makeOne;
  if(isOne){
    filtered[0].toArray = () => WidgetList.from([filtered[0]]);
  } else {
    filtered.toArray = () => WidgetList.from([...filtered]);
  }
  let toGive = isOne ? filtered[0] : (filtered.length ? filtered : (giveNull ? null : filtered));
  if(Array.isArray(toGive)){
    return WidgetList.from(toGive);
  }
	return toGive;
}

function resolveSubchild(element, child){
  let el = element;
  if(child && el.find(child).length) el = el.find(child);
  return el;
}

export {
	htmlPseudos,
	filteredChildren,
  resolveSubchild
}