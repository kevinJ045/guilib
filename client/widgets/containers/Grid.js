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
var Widget_1 = require("../main/Widget");
var options_1 = require("../../utils/options");
var elman_1 = require("../../utils/elman");
var ListBuilder_1 = require("../list/ListBuilder");
var Macy_1 = require("../../components/Macy");
var defaultGrid = function () { return (0, options_1.default)({
    element: { name: 'div', html: "<div class=\"grid-wrapper\"></div>" },
    class: 'macy',
    itemsStateName: '$items_grid',
    template: function () { return new Widget_1.default(); },
    items: [],
    empty: true,
    grid: {
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        mobileFirst: true,
        columns: 2,
        margin: {
            y: 16,
            x: '1%',
        },
    }
}); };
function _initGrid(list, state) {
    var _a;
    if (state[list.options.itemsStateName] && Array.isArray(state[list.options.itemsStateName])) {
        if (list.options.empty !== false)
            list.empty();
        state[list.options.itemsStateName].forEach(function (item, index) {
            list.appendItem(item, index);
        });
        (_a = (0, elman_1.findEl)(list.id + '-grid')) === null || _a === void 0 ? void 0 : _a.reInit();
    }
}
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(selectedOptions) {
        var _this = this;
        var options = __assign(__assign({}, defaultGrid()), selectedOptions);
        _this = _super.call(this, options, _initGrid) || this;
        if (options.grid) {
            var macy = (0, Macy_1.default)(__assign({ container: (0, elman_1.findEl)(_this.id).at(0) }, options.grid));
            (0, elman_1.registerElement)(macy, _this.id + '-grid');
        }
        if (options.gridClass)
            (0, elman_1.findEl)(_this.id).addClass(options.gridClass);
        return _this;
    }
    Grid.prototype.gridClass = function (gridClass, gridReplacer) {
        var _a;
        var r = (gridReplacer ? gridReplacer + '-' : '') + 'grid-cols-([0-9]+)';
        if (gridClass) {
            (0, elman_1.findEl)(this.id).attr({
                class: (0, elman_1.findEl)(this.id)
                    .attr('class')
                    .replace(new RegExp(r, 'g'), '') + ' ' + gridClass
            });
        }
        return !gridClass ? (_a = (0, elman_1.findEl)(this.id).attr('class').match(new RegExp(r))) === null || _a === void 0 ? void 0 : _a[1] : this;
    };
    Grid.prototype._onUpdate = function (options) {
        if (options.grid && (0, elman_1.findEl)(this.id + '-grid')) {
            (0, elman_1.findEl)(this.id + '-grid').reInit();
        }
    };
    Grid.prototype.appendItem = function (item, index) {
        return this.add(this._fromTemplate(item, index));
    };
    Grid.prototype.onItems = function (event, handler) {
        return this.onItems(event, handler);
    };
    Grid.prototype.empty = function () {
        (0, elman_1.findEl)(this.id).empty();
        return this;
    };
    return Grid;
}(ListBuilder_1.default));
exports.default = Grid;
