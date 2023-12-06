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
exports.SelectableOption = exports.SelectController = void 0;
var Controller_1 = require("../../data/Controller");
var elman_1 = require("../../utils/elman");
var Widget_1 = require("../main/Widget");
var SelectController = /** @class */ (function (_super) {
    __extends(SelectController, _super);
    function SelectController(val) {
        return _super.call(this, val) || this;
    }
    return SelectController;
}(Controller_1.default));
exports.SelectController = SelectController;
;
var SelectableOption = /** @class */ (function (_super) {
    __extends(SelectableOption, _super);
    function SelectableOption(options) {
        return _super.call(this, __assign({ element: { name: 'option' }, class: '', _setters: ['value', 'title', 'selected', 'disabled'] }, options)) || this;
    }
    Object.defineProperty(SelectableOption.prototype, "selected", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).attr({ selected: value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectableOption.prototype, "disabled", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).attr({ disabled: value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectableOption.prototype, "value", {
        get: function () {
            return this.options.value;
        },
        set: function (value) {
            (0, elman_1.findEl)(this.id).attr({ value: value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectableOption.prototype, "title", {
        set: function (title) {
            this.remove('*');
            if (title instanceof Widget_1.default) {
                this.add(title);
            }
            else {
                title != null ? this.text(title.toString()) : null;
            }
        },
        enumerable: false,
        configurable: true
    });
    return SelectableOption;
}(Widget_1.default));
exports.SelectableOption = SelectableOption;
var Selectbox = /** @class */ (function (_super) {
    __extends(Selectbox, _super);
    function Selectbox(selectedOptions) {
        var _this = this;
        var options = __assign(__assign({}, ({ element: { name: 'select' }, class: "selectbox-wrapper", _setters: ['selectableOptions', 'multiple'] })), selectedOptions);
        _this = _super.call(this, options) || this;
        if (options.controller) {
            _this.setController(options.controller);
        }
        return _this;
    }
    Selectbox.prototype.setController = function (controller) {
        var _this = this;
        if (this.__controller)
            throw new Error('Input already is married to a controller.');
        if (controller instanceof SelectController) {
            var change_1 = function (v) { return _this.val() !== v ? _this.val(v) : []; };
            this.on('change', function () {
                controller.set(_this.val(), change_1);
            });
            controller.onChange(change_1);
            this.__controller = controller;
            this.val(controller.get());
        }
    };
    Object.defineProperty(Selectbox.prototype, "multiple", {
        set: function (value) {
            (0, elman_1.findEl)(this.id).attr({ multiple: value });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selectbox.prototype, "selectableOptions", {
        set: function (options) {
            this.remove('*');
            var widgetedOptions = options.map(function (item) {
                if (item instanceof SelectableOption) {
                    return item;
                }
                else {
                    return new SelectableOption(item);
                }
            });
            this.addAll.apply(this, widgetedOptions);
        },
        enumerable: false,
        configurable: true
    });
    Selectbox.prototype.val = function (value) {
        if (value === void 0) { value = null; }
        if (value && typeof value == "object")
            value = value.value;
        if (value)
            (0, elman_1.findEl)(this.id).at(0).value = value;
        return (0, elman_1.findEl)(this.id).at(0).value;
    };
    return Selectbox;
}(Widget_1.default));
exports.default = Selectbox;
