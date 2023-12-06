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
exports.EntryController = void 0;
var Controller_1 = require("../../data/Controller");
var elman_1 = require("../../utils/elman");
var Widget_1 = require("../main/Widget");
var EntryController = /** @class */ (function (_super) {
    __extends(EntryController, _super);
    function EntryController(val) {
        return _super.call(this, val) || this;
    }
    return EntryController;
}(Controller_1.default));
exports.EntryController = EntryController;
;
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper(selectedOptions) {
        var _this = this;
        var options = __assign(__assign({}, ({ element: { name: selectedOptions.inputType == 'textarea' ? 'textarea' : 'input' }, attr: { type: 'text' }, class: "input-wrapper", _setters: ['inputType', 'title'] })), selectedOptions);
        _this = _super.call(this, options) || this;
        if (options.controller) {
            _this.setController(options.controller);
        }
        if (options.required) {
            (0, elman_1.findEl)(_this.id).attr({ required: true });
        }
        return _this;
    }
    InputWrapper.prototype.setController = function (controller) {
        var _this = this;
        if (this.__controller)
            throw new Error('Input already is married to a controller.');
        if (controller instanceof EntryController) {
            var change_1 = function (v) { return _this.val() !== v ? _this.val(v) : []; };
            this.on('textinput', function () {
                controller.set(_this.val(), change_1);
            });
            controller.onChange(change_1);
            this.__controller = controller;
            this.val(controller.get());
        }
    };
    InputWrapper.prototype.val = function (value) {
        if (value === void 0) { value = null; }
        if (value)
            (0, elman_1.findEl)(this.id).at(0).value = value;
        return (0, elman_1.findEl)(this.id).at(0).value;
    };
    Object.defineProperty(InputWrapper.prototype, "inputType", {
        set: function (type) {
            var _this = this;
            if (type instanceof Controller_1.default)
                type.onChange(function (change) {
                    _this.inputType = change;
                });
            (0, elman_1.findEl)(this.id).attr({ 'type': type instanceof Controller_1.default ? type.get() : type.toString() });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputWrapper.prototype, "title", {
        set: function (text) {
            var _this = this;
            if (text instanceof Controller_1.default)
                text.onChange(function (change) {
                    _this.title = change;
                });
            (0, elman_1.findEl)(this.id).attr({ 'placeholder': text instanceof Controller_1.default ? text.get() : text.toString() });
        },
        enumerable: false,
        configurable: true
    });
    InputWrapper.textArea = function (selectedOptions) {
        return new InputWrapper(__assign(__assign({}, selectedOptions), { element: { name: 'textarea' } }));
    };
    return InputWrapper;
}(Widget_1.default));
exports.default = InputWrapper;
