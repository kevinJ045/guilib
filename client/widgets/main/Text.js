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
var Widget_1 = require("./Widget");
var options_1 = require("../../utils/options");
var Controller_1 = require("../../data/Controller");
var defaultText = function () { return (0, options_1.default)({
    element: { name: 'div' },
    class: 'text-wrapper',
    accepts: false,
}); };
/**
 * Text representation for the Widget class
 * @class Text
 * @extends Widget
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(selectedOptions, otheroptions) {
        var _this = this;
        if (otheroptions === void 0) { otheroptions = null; }
        var options = Text.resolveOptions(selectedOptions, otheroptions, defaultText());
        if (options.children)
            options.accepts = true;
        _this = _super.call(this, options) || this;
        _this.render();
        return _this;
    }
    Text.prototype._optionChange = function (options) {
        this.render();
    };
    Text.prototype.render = function () {
        var _this = this;
        var options = this.options;
        var text = options.text || "";
        var doText = function (text) {
            if (typeof text == "function") {
                text = options.text(_this);
            }
            else if (text instanceof Controller_1.default) {
                text.onChange(function (change) {
                    _this.options.text = change.toString();
                });
                text = text.get().toString();
            }
            _this.text(text);
            if (options.children)
                _this.addAll.apply(_this, options.children);
        };
        if (text instanceof Promise) {
            text.then(doText);
        }
        else {
            doText(text);
        }
    };
    Text.resolveOptions = function (selectedOptions, otheroptions, defaults) {
        if (typeof selectedOptions == 'string' || selectedOptions instanceof Controller_1.default || selectedOptions instanceof Promise) {
            selectedOptions = { text: selectedOptions };
        }
        if (otheroptions) {
            selectedOptions = __assign(__assign({}, otheroptions), selectedOptions);
        }
        return __assign(__assign({}, defaults), selectedOptions);
    };
    return Text;
}(Widget_1.default));
exports.default = Text;
