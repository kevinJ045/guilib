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
var Widget_1 = require("../main/Widget");
var elman_1 = require("../../utils/elman");
var Store_1 = require("../../data/Store");
var Controller_1 = require("../../data/Controller");
var ListBuilder = /** @class */ (function (_super) {
    __extends(ListBuilder, _super);
    function ListBuilder(selectedOptions, _initList) {
        var _this = this;
        var options = __assign({}, selectedOptions);
        _this = _super.call(this, options) || this;
        _this.state = new Store_1.default({ items: [] });
        _this.updateList(options);
        _initList(_this, _this.getStore());
        _this.on('state:change', function (e) {
            _initList(_this, _this.getStore());
        });
        return _this;
    }
    ListBuilder.prototype._fromTemplate = function (item, index) {
        if (!index)
            index = this.getStore()[this.options.itemsStateName].length || 0;
        var widget = this.options.template.call(this, item, index);
        if (!(widget instanceof Widget_1.default))
            throw new Error("ListBuilder requires for a widget as a template");
        return widget;
    };
    ListBuilder.prototype.updateList = function (newOptions) {
        var _this = this;
        var _a, _b;
        if (Array.isArray(newOptions)) {
            newOptions = { items: newOptions };
        }
        var options = __assign(__assign({}, this.options), newOptions);
        if (options.items) {
            var doItems_1 = function () {
                var _a, _b;
                if (options.items instanceof Controller_1.default) {
                    if (!options.items.isTakenBy(_this)) {
                        _this.setStore((_a = {}, _a[options.itemsStateName] = options.items.get(), _a));
                        options.items.take(_this);
                        options.items.onChange(function () {
                            var _a;
                            _this.setStore((_a = {}, _a[options.itemsStateName] = options.items.get(), _a));
                        });
                    }
                }
                else {
                    _this.setStore((_b = {}, _b[options.itemsStateName] = options.items, _b));
                }
            };
            if (options.items instanceof Promise) {
                options.items.then(function (items) {
                    options.items = items;
                    doItems_1();
                });
            }
            else {
                doItems_1();
            }
        }
        if (options.loader) {
            _super.prototype.add.call(this, options.loader);
        }
        if (options.loading) {
            (_a = options.loader) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = options.loader) === null || _b === void 0 ? void 0 : _b.hide();
        }
        if (typeof this._onUpdate == "function") {
            this._onUpdate(options);
        }
        return this;
    };
    ListBuilder.prototype._onUpdate = function (any) { };
    ListBuilder.prototype.addItem = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.setStore({ items: __spreadArray([], items, true).concat(this.getStore()[this.options.itemsStateName]) });
        return this;
    };
    ListBuilder.prototype.removeItems = function () {
        var itemsToRemove = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            itemsToRemove[_i] = arguments[_i];
        }
        var currentItems = this.getStore()[this.options.itemsStateName];
        var remain = currentItems.filter(function (item, index) {
            var shouldRemove = false;
            itemsToRemove.forEach(function (it) {
                if (index == it.index) {
                    shouldRemove = true;
                    return;
                }
                var allPropertiesMatch = Object.keys(it).every(function (prop) { return item[prop] === it[prop]; });
                if (allPropertiesMatch) {
                    shouldRemove = true;
                    return;
                }
            });
            return !shouldRemove;
        });
        this.setStore({ items: remain });
        return this;
    };
    ListBuilder.prototype.onItems = function (event, handler, subchild) {
        this.children(subchild).forEach(function (child, index) {
            child.on(event, function (e) {
                handler(e, { child: child, index: index });
            });
        });
        return this;
    };
    ListBuilder.prototype.empty = function () {
        (0, elman_1.findEl)(this.id).empty();
        return this;
    };
    return ListBuilder;
}(Widget_1.default));
exports.default = ListBuilder;
