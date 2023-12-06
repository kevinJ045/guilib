"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventName = exports.createEventData = exports.onTextInput = exports.onHold = void 0;
var Widget_1 = require("../widgets/main/Widget");
var elman_1 = require("./elman");
function createEventData(e, name, widget) {
    var _a, _b;
    if (widget === void 0) { widget = null; }
    return {
        prevent: function () { return e.preventDefault(); },
        stop: function () { return e.stopPropagation(); },
        key: { code: e.keyCode, name: e.code, output: e.key, ctrl: e.ctrlKey, shift: e.shiftKey, alt: e.altKey, meta: e.metaKey },
        pos: { x: e.clientX, y: e.clientY },
        offset: { x: e.offsetX, y: e.offsetY },
        name: name,
        data: e.data || ((_a = e.originalEvent) === null || _a === void 0 ? void 0 : _a.data),
        dataTransfer: e.dataTransfer || ((_b = e.originalEvent) === null || _b === void 0 ? void 0 : _b.dataTransfer),
        target: widget || e.target ? Widget_1.default.from(e.target) : null,
        original: e
    };
}
exports.createEventData = createEventData;
function getEventName(event) {
    if (event === "tap")
        return "click";
    if (event === "hover")
        return "mouseenter";
    if (event === "doubleTap")
        return "dblclick";
    if (event === "focusIn")
        return "focus";
    if (event === "focusOut")
        return "blur";
    return event;
}
exports.getEventName = getEventName;
function onHold(widget, callback, duration) {
    var holdEvent = "hold";
    var eventName = getEventName(holdEvent);
    var startHoldTimer = function (e) {
        if (widget.is('disabled'))
            return;
        callback.__holdTimer = setTimeout(function () {
            var data = createEventData(e, holdEvent);
            callback.call(widget, data, {});
            widget.emit(eventName, createEventData({}, holdEvent));
            widget.is('held', true);
        }, duration);
    };
    var cancelHoldTimer = function () {
        setTimeout(function () { return widget.is('held', false); }, 10);
        clearTimeout(callback.__holdTimer);
    };
    widget.__events__.push({ event: eventName, callback: callback });
    (0, elman_1.findEl)(widget.id).on("mousedown", startHoldTimer);
    (0, elman_1.findEl)(widget.id).on("mouseup", cancelHoldTimer);
    return widget;
}
exports.onHold = onHold;
function onTextInput(widget, callback) {
    var eventName = getEventName('textinput');
    var input = function (e) {
        var data = createEventData(e, eventName);
        callback.call(widget, data, {});
        widget.emit(eventName, createEventData({}, eventName));
    };
    (0, elman_1.findEl)(widget.id).on("input", input);
    (0, elman_1.findEl)(widget.id).on("change", input);
}
exports.onTextInput = onTextInput;
