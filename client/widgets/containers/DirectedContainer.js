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
exports.Center = exports.Row = exports.Column = void 0;
var elman_1 = require("../../utils/elman");
var Widget_1 = require("../main/Widget");
var options_1 = require("../../utils/options");
var DirectedWidget = /** @class */ (function (_super) {
    __extends(DirectedWidget, _super);
    function DirectedWidget(selectedOptions, type) {
        var _this = this;
        var options = __assign(__assign(__assign({}, ((0, options_1.default)({
            element: { name: 'div' },
            style: {
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: type
            },
        }))), selectedOptions), { _setters: ['gap', 'crossAxisAlignment', 'mainAxisAlignment', 'wrap'] });
        _this = _super.call(this, options) || this;
        if (options.height) {
            _this.height(options.height);
        }
        if (options.width) {
            _this.width(options.width);
        }
        return _this;
    }
    Object.defineProperty(DirectedWidget.prototype, "crossAxisAlignment", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).css({ "align-items": value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectedWidget.prototype, "mainAxisAlignment", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).css({ "justify-content": value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectedWidget.prototype, "gap", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).css({ "gap": value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectedWidget.prototype, "wrap", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).css({ "flex-wrap": value === true ? 'wrap' : value });
        },
        enumerable: false,
        configurable: true
    });
    return DirectedWidget;
}(Widget_1.default));
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(selectedOptions) {
        return _super.call(this, selectedOptions, 'column') || this;
    }
    return Column;
}(DirectedWidget));
exports.Column = Column;
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(selectedOptions) {
        return _super.call(this, selectedOptions, 'row') || this;
    }
    return Row;
}(DirectedWidget));
exports.Row = Row;
var Center = /** @class */ (function (_super) {
    __extends(Center, _super);
    function Center(selectedOptions) {
        return _super.call(this, __assign({ crossAxisAlignment: 'center', mainAxisAlignment: 'center' }, selectedOptions), 'center') || this;
    }
    return Center;
}(DirectedWidget));
exports.Center = Center;
