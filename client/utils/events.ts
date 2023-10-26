import Widget from "../widgets/main/Widget";
import { findEl } from "./elman";


function createEventData(e: any, name: string, widget: Widget | null = null){
	return { 
		prevent: () => e.preventDefault(), 
		stop: () => e.stopPropagation(), 
		key: { code: e.keyCode, name: e.code, output: e.key, ctrl: e.ctrlKey}, 
		pos: {x: e.clientX, y: e.clientY}, 
		offset: {x: e.offsetX, y: e.offsetY}, 
		name,
		data: e.data || e.originalEvent?.data,
		dataTransfer: e.originalEvent?.dataTransfer,
		target: widget || e.target ? Widget.from(e.target) : null
	};
}

function getEventName(event: string) {
  if (event === "tap") return "click";
  if (event === "hover") return "mouseenter";
  if (event === "doubleTap") return "dblclick";
  if (event === "focusIn") return "focus";
  if (event === "focusOut") return "blur";
  return event;
}

function onHold(widget: Widget, callback: any, duration: number) {
	const holdEvent = "hold";
	const eventName = getEventName(holdEvent);

	const startHoldTimer = (e: any) => {
		if(widget.is('disabled')) return;
		callback.__holdTimer = setTimeout(() => {
			var data = createEventData(e, holdEvent);
			callback.call(widget, data, {});
			widget.emit(eventName, createEventData({}, holdEvent));
			widget.is('held', true);
		}, duration);
	};

	const cancelHoldTimer = () => {
		setTimeout(() => widget.is('held', false), 10)
		clearTimeout(callback.__holdTimer);
	};

	widget.__events__.push({ event: eventName, callback });
	findEl(widget.id!).on("mousedown", startHoldTimer);
	findEl(widget.id!).on("mouseup", cancelHoldTimer);

	return widget;
}

export {
	onHold,
	createEventData,
	getEventName
}