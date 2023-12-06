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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
var Widget_1 = require("../main/Widget");
var options_1 = require("../../utils/options");
var elman_1 = require("../../utils/elman");
var ListBuilder_1 = require("./ListBuilder");
var Text_1 = require("../main/Text");
var defaultList = function () { return (0, options_1.default)({
    element: { name: 'ul' },
    items: [],
    itemsStateName: '$items_list',
    empty: true,
    template: function (item) { return new ListItem(item); },
}); };
var defaultListItem = function () { return (0, options_1.default)({
    element: { name: 'li' },
    title: new Text_1.default(''),
    link: false,
    _setters: ['url']
}); };
function _initList(list, state) {
    if (state[list.options.itemsStateName] && Array.isArray(state[list.options.itemsStateName])) {
        if (list.options.empty !== false)
            list.empty();
        state[list.options.itemsStateName].forEach(function (item, index) {
            list.appendItem(item, index);
        });
    }
}
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(selectedOptions) {
        var _this = this;
        var options = __assign(__assign({}, defaultListItem()), selectedOptions);
        var title = options.title, link = options.link;
        if (link === true)
            options.element.name = 'a';
        _this = _super.call(this, options) || this;
        if (title instanceof Widget_1.default)
            _this.add(title);
        else if (title != null)
            _this.add(new Text_1.default(title));
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "url", {
        set: function (link) {
            (0, elman_1.findEl)(this.id).attr('href', link);
        },
        enumerable: false,
        configurable: true
    });
    return ListItem;
}(Widget_1.default));
exports.ListItem = ListItem;
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(selectedOptions) {
        var options = __assign(__assign({}, defaultList()), selectedOptions);
        return _super.call(this, options, _initList) || this;
    }
    List.prototype.appendItem = function (item, index) {
        return this.add(this._fromTemplate(item, index));
    };
    List.prototype.onItems = function (event, handler) {
        return this.onItems(event, handler);
    };
    List.prototype.empty = function () {
        (0, elman_1.findEl)(this.id).empty();
        return this;
    };
    return List;
}(ListBuilder_1.default));
exports.default = List;
