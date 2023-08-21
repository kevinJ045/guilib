import { findEl } from "./elman.js";


function createEventData(e, name){
	return { key: { code: e.keyCode, name: e.code, output: e.key, ctrl: e.ctrlKey}, pos: {x: e.clientX, y: e.clientY}, name };
}

function getEventName(event) {
  if (event === "tap") return "click";
  if (event === "hover") return "mouseenter";
  if (event === "doubleTap") return "dblclick";
  if (event === "focusIn") return "focus";
  if (event === "focusOut") return "blur";
  return event;
}

function onHold(widget, callback, duration) {
	const holdEvent = "hold";
	const eventName = getEventName(holdEvent);

	const startHoldTimer = (e) => {
		if(widget.is('disabled')) return;
		callback.__holdTimer = setTimeout(() => {
			var data = createEventData(e, holdEvent);
			callback.call(this, data, {});
			widget.emit(eventName, createEventData({}, holdEvent));
			widget.is('held', true);
		}, duration);
	};

	const cancelHoldTimer = () => {
		setTimeout(() => widget.is('held', false), 10)
		clearTimeout(callback.__holdTimer);
	};

	widget.__events__.push({ event: eventName, callback });
	findEl(widget.id).on("mousedown", startHoldTimer);
	findEl(widget.id).on("mouseup", cancelHoldTimer);

	return widget;
}

export {
	onHold,
	createEventData,
	getEventName
}