"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiwidget = void 0;
var type_1 = require("../../utils/type");
var id_1 = require("../../utils/id");
var elman_1 = require("../../utils/elman");
var options_1 = require("../../utils/options");
var WidgetProps_1 = require("../_ghost/WidgetProps");
var dom_1 = require("../../utils/dom");
var Store_1 = require("../../data/Store");
var widgetmodel_1 = require("../../utils/widgetmodel");
var defaults = (0, options_1.default)({});
var setterFunctions = [
    'padding',
    'margin',
    'name',
    'id:$id',
    'animation',
    'tooltip',
    'style'
];
function initiateSetters(widget, setterFunctions, options) {
    setterFunctions.forEach(function (setterFull) {
        var _a;
        var setter = setterFull, name = setterFull;
        if (setterFull.match(':')) {
            _a = setterFull.split(':'), setter = _a[0], name = _a[1];
        }
        if (options[setter]) {
            widget[name] = options[setter];
        }
    });
}
function _init(widget, options) {
    var elementRaw;
    if (!widget.__generated) {
        if (options.element.raw || options.element.selector) {
            elementRaw = new dom_1.default(options.element.raw).at(0);
        }
        else {
            elementRaw = document.createElement(options.element.name);
        }
    }
    var element = widget.__generated ? (0, elman_1.findEl)(widget.id) : new dom_1.default(elementRaw);
    if (!widget.__generated && options.element.html)
        element.html(options.element.html);
    if (widget.__generated && options.reset)
        element.attr({ class: '', style: '' });
    element.addClass(options.class);
    if (options.position) {
        var _a = options.position, type = _a.type, centered = _a.centered, top_1 = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
        element.css({
            position: (0, type_1.isPosition)(type) ? type : null
        });
        if (centered) {
            element.css({
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            });
        }
        else {
            element.css({
                top: top_1,
                left: left,
                right: right,
                bottom: bottom
            });
        }
    }
    if (options.size) {
        var _b = options.size, width = _b.width, height = _b.height;
        element.css({
            width: width,
            height: height
        });
    }
    if (!widget.__generated) {
        Object.defineProperty(widget, 'id', {
            writable: false,
            value: (0, id_1.default)()
        });
        element.at(0).GUIWIDGET = widget;
        (0, elman_1.registerElement)(element, widget.id);
        widget.store.addEventListener('change', function () {
            widget.emit('state:change', widget.store);
        });
    }
    if (options.store instanceof Store_1.default)
        widget.store = options.store;
    if (typeof options.build == "function") {
        if (!options.children)
            options.children = [];
        var child = options.build(options, widget);
        if (Array.isArray(child)) {
            options.children.push(child);
        }
        else {
            options.children.push(child);
        }
    }
    if (options.children && options.children.length) {
        options.children.forEach(function (element) {
            if (element == null)
                return;
            if (element instanceof window.Text)
                element = element.textContent;
            widget.add(element);
        });
    }
    if (options.private === true) {
        // widget.seal();
        delete options.private;
    }
    if (options.accepts === false) {
        widget.accepts = false;
    }
    else if (options.accepts === true) {
        widget.accepts = true;
    }
    for (var i in options) {
        if (i.match(/on([A-Z])([a-zA-Z]+)/)) {
            if (!options.events)
                options.events = {};
            options.events[i.replace('on', '').toLowerCase()] = options[i];
            // delete options[i];
        }
    }
    if (options.events) {
        for (var i in options.events) {
            widget.on(i, options.events[i]);
        }
    }
    if (options.props) {
        element.prop(options.props);
    }
    if (options.attr) {
        element.attr(options.attr);
    }
    widget.options = widget.registerProxy(options, function () {
        widget.setOptions({});
    });
    var setters = __spreadArray([], setterFunctions, true);
    if (options._setters) {
        setters.push.apply(setters, options._setters);
    }
    initiateSetters(widget, setters, options);
    if (!widget.__generated)
        widget.__generated = true;
    if (typeof widget._onBuild == "function") {
        var w = widget._onBuild();
        if (w) {
            widget.add(w);
        }
    }
}
/**
 * Widget class represents a graphical user interface (GUI) element.
 *
 * @class Widget
 * @extends {WidgetProps}
 */
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget(options) {
        var _this = _super.call(this) || this;
        /**
         * Creates an instance of the Widget.
         *
         * @param {options} [options={}] - Configuration options for the Widget.
         */
        _this.options = {};
        if (typeof options !== "object")
            options = { element: { name: 'div' }, class: 'widget' };
        _init(_this, __assign(__assign({}, (0, options_1.default)({})), options));
        return _this;
    }
    Widget.prototype.setOptions = function (options) {
        var currentOptions = __assign(__assign({}, this.options), options);
        _init(this, currentOptions);
        this._optionChange(currentOptions);
    };
    Widget.from = function (child) {
        return new Widget({ element: { raw: new dom_1.default(child).at(0) } });
    };
    /**
     * Creates a Widget class from config.
     *
     * @param {widgetModel} [model] - Configuration model for the Widget.
     * @param {any} [options] - Configuration options for the Widget.
     */
    Widget.model = function (model, options) {
        if (options === void 0) { options = {}; }
        return (0, widgetmodel_1.createWidgetModel)(model, options, this);
    };
    Widget.animateWidgets = function (animation) {
        var widgets = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            widgets[_i - 1] = arguments[_i];
        }
        return WidgetProps_1.WidgetList.from(widgets).animate(animation);
    };
    Widget.new = function (options) {
        return new this(options);
    };
    return Widget;
}(WidgetProps_1.default));
function getAllSetters(obj) {
    var setters = [];
    var currentObj = obj;
    while (currentObj) {
        var descriptors = Object.getOwnPropertyDescriptors(currentObj);
        var _loop_1 = function (key) {
            var descriptor = descriptors[key];
            if (key == '__proto__')
                return "continue";
            if (setterFunctions.includes(key) || setterFunctions.find(function (k) { return k.endsWith(':' + key); }))
                return "continue";
            if (descriptor.set) {
                setters.push(key);
            }
        };
        for (var key in descriptors) {
            _loop_1(key);
        }
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return setters;
}
function uiwidget(defaults) {
    return function (target, extended) {
        var setters = [];
        var WidgetClass = /** @class */ (function (_super) {
            __extends(WidgetClass, _super);
            function WidgetClass(options) {
                var _this = this;
                var o = (0, options_1.mergeOptions)(__assign(__assign({}, defaults), { _setters: setters }), options);
                _this = _super.call(this, o) || this;
                _this.onInit(o);
                return _this;
            }
            WidgetClass.prototype.onInit = function (o) { };
            return WidgetClass;
        }(target));
        Object.getOwnPropertyNames(target.prototype).forEach(function (key) {
            if (key !== 'constructor') {
                WidgetClass.prototype[key] = target.prototype[key];
            }
        });
        setters.push.apply(setters, getAllSetters(WidgetClass.prototype));
        return WidgetClass;
    };
}
exports.uiwidget = uiwidget;
exports.default = Widget;
