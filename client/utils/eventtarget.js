"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetEventTarget = void 0;
;
var WidgetEventTarget = /** @class */ (function () {
    function WidgetEventTarget() {
        this._events = [];
        this._eventEmitMethod = "normal";
        this._events = [];
        if ('afterConstruct' in this && typeof this.afterConstruct == "function") {
            this.afterConstruct();
        }
    }
    WidgetEventTarget.prototype.on = function (event, eventCallback) {
        var _this = this;
        var events = [];
        if (Array.isArray(event))
            events.push.apply(events, event);
        else
            events.push(event);
        events.forEach(function (event) {
            _this._events.push({ event: event, eventCallback: eventCallback });
            // this.addEventListener(event, eventCallback as EventListenerOrEventListenerObject);
        });
        return this;
    };
    WidgetEventTarget.prototype.once = function (event, eventCallback) {
        var _this = this;
        var events = [];
        if (Array.isArray(event))
            events.push.apply(events, event);
        else
            events.push(event);
        events.forEach(function (event) {
            var foundEvent = _this._events.find(function (e) { return (e.event == event && e.eventCallback.toString() == eventCallback.toString()); });
            if (!foundEvent)
                _this._events.push({ event: event, eventCallback: eventCallback });
        });
        return this;
    };
    WidgetEventTarget.prototype.off = function (event, eventCallback) {
        var _this = this;
        var events = [];
        if (Array.isArray(event))
            events.push.apply(events, event);
        else
            events.push(event);
        events.forEach(function (event) {
            if (eventCallback) {
                var foundEvent = _this._events.find(function (e) { return (e.event == event && e.eventCallback == eventCallback); });
                if (foundEvent) {
                    _this._events.splice(_this._events.indexOf(foundEvent));
                }
            }
            else {
                _this._events.filter(function (e) { return e.event == event; }).forEach(function (foundEvent) {
                    _this._events.splice(_this._events.indexOf(foundEvent));
                });
            }
        });
        return this;
    };
    WidgetEventTarget.prototype.emit = function (event, eventData, init, raw) {
        var _this = this;
        if (raw == null)
            raw = this._eventEmitMethod == "raw";
        var data = eventData || null;
        var events = [];
        if (Array.isArray(event))
            events.push.apply(events, event);
        else
            events.push(event);
        events.forEach(function (event) {
            _this._events.filter(function (e) { return e.event == event; })
                .forEach(function (event) {
                var eventInstance = eventData instanceof CustomEvent ? eventData : new CustomEvent(event.event, __assign(__assign({}, init), { detail: data }));
                event.eventCallback(raw ? data : eventInstance, raw ? undefined : data);
            });
        });
        return this;
    };
    return WidgetEventTarget;
}());
exports.WidgetEventTarget = WidgetEventTarget;
