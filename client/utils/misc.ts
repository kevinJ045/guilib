import { HTMLGUIWidget, WidgetList } from "../widgets/_ghost/WidgetProps";
import Widget from "../widgets/main/Widget";

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

function filteredChildren(children: Widget | Dom | Widget[], makeOne = false, giveNull = false){
  const filtered = Array.isArray(children) ? children : ((children instanceof Widget ? children
    .toArray() : children.elements)
    .filter((element: HTMLGUIWidget) => element.GUIWIDGET)
    .map((element: HTMLGUIWidget) => element.GUIWIDGET));
  const isOne = filtered.length == 1 && makeOne;
  if(isOne){
    filtered[0].toArray = () => WidgetList.from([filtered[0]]);
  } else {
    (filtered as any).toArray = () => WidgetList.from([...filtered]);
  }
  let toGive = isOne ? filtered[0] : (filtered.length ? filtered : (giveNull ? null : filtered));
  if(Array.isArray(toGive) && !makeOne){
    return WidgetList.from(toGive);
  }
	return makeOne && Array.isArray(toGive) ? toGive[0] : toGive;
}

function resolveSubchild(element: Widget, child : string | null = null){
  let el = element;
  if(child && el.find(child) instanceof Widget) el = el.find(child);
  return el;
}

export {
	htmlPseudos,
	filteredChildren,
  resolveSubchild
}