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
exports.CheckboxController = void 0;
var Widget_1 = require("../main/Widget");
var options_1 = require("../../utils/options");
var elman_1 = require("../../utils/elman");
var Controller_1 = require("../../data/Controller");
var defaults = (0, options_1.default)({ element: { name: "input" }, class: 'checkbox', attr: { type: 'checkbox' } });
var CheckboxController = /** @class */ (function (_super) {
    __extends(CheckboxController, _super);
    function CheckboxController(val) {
        return _super.call(this, val) || this;
    }
    return CheckboxController;
}(Controller_1.default));
exports.CheckboxController = CheckboxController;
;
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(selectedOptions) {
        var _this = this;
        var options = __assign(__assign({}, defaults), selectedOptions);
        _this = _super.call(this, options) || this;
        if (options.controller) {
            _this.setController(options.controller);
        }
        if (options.checked) {
            _this.setChecked(true);
        }
        return _this;
    }
    Checkbox.prototype.isChecked = function () {
        return (0, elman_1.findEl)(this.id).at(0).checked;
    };
    Checkbox.prototype.setChecked = function (checked) {
        (0, elman_1.findEl)(this.id).at(0).checked = checked;
        return this;
    };
    Checkbox.prototype.setController = function (controller) {
        var _this = this;
        if (this.__controller)
            throw new Error('Checkbox already has a controller.');
        if (controller instanceof CheckboxController) {
            var change_1 = function (v) { return _this.isChecked() !== v ? _this.setChecked(v) : []; };
            this.on('change', function () {
                controller.set(_this.isChecked(), change_1);
            });
            controller.onChange(change_1);
            this.__controller = controller;
            this.setChecked(controller.get());
        }
    };
    return Checkbox;
}(Widget_1.default));
exports.default = Checkbox;
