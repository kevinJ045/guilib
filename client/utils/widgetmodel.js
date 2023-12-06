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
exports.createWidgetModel = void 0;
var Widget_1 = require("../widgets/main/Widget");
var options_1 = require("./options");
function determineType(thing) {
    return thing instanceof Widget_1.default ? 'widget' : typeof thing;
}
function getSelectorContent(selector) {
    var parts = selector.split('.');
    var element = parts[0];
    var classes = parts.slice(1).join(' ').trim();
    var id = null;
    if (element.match('#')) {
        id = element.split('#')[1];
        element = element.split('#')[0];
    }
    return { element: element, classes: classes, id: id };
}
// @ts-ignore
function modelToWidget(model) {
    if (model instanceof Widget_1.default)
        return model;
    if (typeof model == "string")
        model = { selector: model };
    var el = getSelectorContent(model.selector);
    var config = __assign(__assign({}, model.options), { element: { name: el.element }, class: el.classes, attr: model.attributes, children: model.children ? model.children.map(modelToWidget) : [], model: model });
    if (el.id)
        config.id = el.id;
    var widget = new Widget_1.default(config);
    if (model.text)
        widget.text(model.text);
    if (model.html)
        widget.html(model.html);
    if (model.child)
        widget.add(modelToWidget(model.child));
    return widget;
}
function determineValue(valueRaw, widget, option) {
    var value = { type: typeof valueRaw, value: valueRaw, option: option, widget: widget };
    return value;
}
function resolveValue(valueRaw, value) {
    var _value = { type: typeof valueRaw, value: valueRaw };
    if (typeof valueRaw == "string" && valueRaw.match(/\$\(/)) {
        _value.value = valueRaw.replace(/\$\(([\w]+)\)/g, value.type == "list" ? (function (a, name) { return value.value[name]; }) : value.value);
        _value.type = 'string';
    }
    else if (typeof valueRaw == "string" && valueRaw.startsWith('$')) {
        _value.value = value.type == "list" ? value.value[valueRaw.split('$')[1]] : value.value;
        _value.type = typeof value;
    }
    if (_value.value instanceof Widget_1.default) {
        return _value;
    }
    if (typeof _value.value == "function") {
        var v = _value.value(value.widget, value.option);
        return resolveValue(v, value);
    }
    if (typeof _value.value == "object" && typeof _value.value.selector == "string") {
        if (_value.value.attributes)
            for (var i in _value.value.attributes)
                _value.value.attributes[i] = resolveValue(_value.value.attributes[i], value).value;
        for (var i in _value.value)
            _value.value[i] = resolveValue(_value.value[i], value).value;
        _value.value = modelToWidget(_value.value);
    }
    return _value;
}
function actionCase(actions, widget, value) {
    var _loop_1 = function (action) {
        var act = typeof actions[action] == "object" ?
            (Array.isArray(actions[action]) ? __spreadArray([], actions[action], true) : __assign({}, actions[action])) : actions[action];
        var actionValue = resolveValue(act, value);
        if (action == 'empty' && actionValue.value == true) {
            widget.remove('*');
        }
        else if (action == 'append') {
            widget.add(actionValue.value);
        }
        else if (action == 'prepend') {
            widget.addBefore(actionValue.value);
        }
        else if (action == 'text') {
            widget.text(actionValue.value);
        }
        else {
            var w_1 = widget;
            var args = typeof actionValue.value == "object" && actionValue.value.arguments ? actionValue.value.arguments : [actionValue.value];
            if (typeof actionValue.value == "object" && actionValue.value.resolve) {
                for (var i in actionValue.value) {
                    actionValue.value[i] = resolveValue(actionValue.value[i], value).value;
                }
            }
            if (typeof actionValue.value == "function" && action.startsWith('on')) {
                w_1.on(action.split('on')[1].toLowerCase(), function (e) {
                    var data = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        data[_i - 1] = arguments[_i];
                    }
                    actionValue.value.apply(actionValue, __spreadArray([w_1, e], data, false));
                });
            }
            else if (typeof w_1[action] == "function")
                w_1[action].apply(w_1, args);
            else if (action in w_1) {
                w_1[action] = actionValue.value;
            }
        }
    };
    for (var action in actions) {
        _loop_1(action);
    }
}
function selectorCase(selectors, widget, value, option) {
    for (var i in selectors) {
        var item = i == 'this' ? widget : widget.find(i);
        if (item) {
            var v = value;
            actionCase(selectors[i], item, v);
        }
    }
}
function typeCase(widget, option, valueRaw) {
    var value = determineValue(valueRaw, widget, option);
    var type = determineType(value.value);
    if ('any' in option)
        selectorCase(option.any, widget, value, option);
    if (type in option)
        selectorCase(option[type], widget, value, option);
    else if ('else' in option)
        selectorCase(option.else, widget, value, option);
}
function createWidgetModel(model, _options, widget) {
    if (widget === void 0) { widget = (Widget_1.default); }
    var classGenerated = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(options) {
            var _this = this;
            if (options === void 0) { options = _options; }
            var wo = {};
            if (model.widgetOptions) {
                for (var i in model.widgetOptions)
                    wo[i] = resolveValue(model.widgetOptions[i], { type: "list", value: options }).value;
            }
            var config = (0, options_1.mergeOptions)(__assign(__assign({}, wo), { element: { name: getSelectorContent(model.selector).element }, class: getSelectorContent(model.selector).classes, children: model.children ? model.children.map(modelToWidget) : [], _setters: Object.keys(options) }), options);
            if (getSelectorContent(model.selector).id)
                config.id = getSelectorContent(model.selector).id;
            _this = _super.call(this, config) || this;
            _this.options = {};
            return _this;
        }
        return class_1;
    }(widget));
    if (typeof model._onMount == "function")
        classGenerated.prototype._onMount = model._onMount;
    if (typeof model._optionChange == "function")
        classGenerated.prototype._optionChange = model._optionChange;
    function generateClassOptions(model) {
        var _loop_2 = function () {
            var option = model.options[i];
            classGenerated.prototype.__defineSetter__(i, function (value) {
                // @ts-ignore
                var that = this;
                if (option.type == "array") {
                    var items = value;
                    var _loop_3 = function (i_1) {
                        if (typeof items[i_1] == 'function') {
                            items[i_1](function (item) {
                                typeCase(that, option[i_1], item);
                            });
                        }
                    };
                    for (var i_1 in option) {
                        _loop_3(i_1);
                    }
                }
                else {
                    typeCase(that, option, value);
                }
            });
        };
        for (var i in model.options) {
            _loop_2();
        }
    }
    generateClassOptions(model);
    return classGenerated;
}
exports.createWidgetModel = createWidgetModel;
