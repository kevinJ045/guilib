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
exports.mergeOptions = exports.options = void 0;
/**
 * Represents a configuration object for the Widget class.
 * @class
 */
var options = /** @class */ (function () {
    function options() {
        /**
       * Configuration options for the HTML element of the widget.
       * @type {elementOptions | null}
       */
        this.element = {};
        /**
       * The CSS class name for the widget.
       * @type {string | null}
       */
        this.class = "";
        /**
         * Inline styles for the widget.
         *
         * @type {Style | Record<string, any> | null}
         */
        this.style = {};
        /**
         * Position settings for the widget.
         *
         * @type {attrNullable | null}
         */
        this.position = {};
        this.size = {};
        this.attr = {};
        this.props = {};
        this.children = [];
        this.private = false;
        this.reset = false;
        this.value = "";
        this.icon = "";
        this.accepts = true;
        this.store = null;
        this.name = null;
        this.inheritStore = false;
        this.events = {};
        this._setters = [];
        this.holdDuration = 1000;
        this.build = function () { };
        this.onClick = function () { };
        this.onHold = function () { };
        this.onContextmenu = function () { };
        this.onMouseEnter = function () { };
        this.onMouseMove = function () { };
        this.onMouseDown = function () { };
        this.onKeyDown = function () { };
        this.onKeyUp = function () { };
        this.onKey = function () { };
        this.onChange = function () { };
        this.onMount = function () { };
    }
    return options;
}());
exports.options = options;
;
function getDefaults(opts) {
    var defaults = {
        element: {
            name: "div",
            html: null,
            raw: null,
            selector: null
        },
        class: "widget",
        style: {},
        position: {
            type: 'default',
            centered: false,
            top: null,
            left: null,
            bottom: null,
            right: null
        },
        size: {
            width: null,
            height: null
        },
        private: false,
        reset: false,
        value: null,
        icon: null,
        children: [],
        accepts: true,
        events: {},
        type: []
    };
    return __assign(__assign({}, defaults), opts);
}
exports.default = getDefaults;
var mergableOptions = 'class|type|_setters|children'.split('|');
var mergeSeparator = {
    class: ' '
};
function _merge(defaults, options) {
    var _a;
    var o = __assign({}, defaults);
    for (var i in options) {
        if (o[i]) {
            if (typeof o[i] == typeof options[i]) {
                if (typeof o[i] == 'object') {
                    if (Array.isArray(o[i])) {
                        if (mergableOptions.includes(i))
                            (_a = o[i]).push.apply(_a, options[i]);
                        else
                            o[i] = options[i];
                    }
                    else {
                        mergeOptions(o[i], options[i]);
                    }
                }
                else if (mergableOptions.includes(i)) {
                    o[i] += (mergeSeparator[i] || "") + options[i];
                }
                else {
                    o[i] = options[i];
                }
            }
            else {
                o[i] = options[i];
            }
        }
        else {
            o[i] = options[i];
        }
    }
    return o;
}
function mergeOptions(defaults, options) {
    // if(!options){
    // 	return function(target: any, extended?: any){
    // 		target._on_init = target.constructor;
    // 		target.constructor = function(options: T){
    // 			this._on_init(options);
    // 		}
    // 	};
    // } else {
    // 	return _merge(defaults as Record<string, any>, options as Record<string, any>);
    // }
    return _merge(defaults, options);
}
exports.mergeOptions = mergeOptions;
