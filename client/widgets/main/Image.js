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
var elman_1 = require("../../utils/elman");
var defaultImage = function () {
    return (0, options_1.default)({
        element: { name: "img" },
        class: "image",
        accepts: false,
        _setters: ['src']
    });
};
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(selectedOptions, otheroptions) {
        var _this = this;
        if (otheroptions === void 0) { otheroptions = null; }
        var options = Image.resolveOptions(selectedOptions, otheroptions, defaultImage());
        _this = _super.call(this, options) || this;
        if (options.width)
            _this.width(options.width);
        if (options.height)
            _this.height(options.height);
        return _this;
    }
    Image.resolveOptions = function (selectedOptions, otheroptions, defaults) {
        if (typeof selectedOptions == "string" || selectedOptions instanceof Blob) {
            selectedOptions = { src: selectedOptions };
        }
        if (otheroptions) {
            selectedOptions = __assign(__assign({}, otheroptions), selectedOptions);
        }
        return __assign(__assign({}, defaults), selectedOptions);
    };
    Object.defineProperty(Image.prototype, "src", {
        set: function (src) {
            if (this.sealed !== true) {
                if (typeof src != "string") {
                    src = URL.createObjectURL(src);
                }
                (0, elman_1.findEl)(this.id).attr({ "src": src });
            }
        },
        enumerable: false,
        configurable: true
    });
    return Image;
}(Widget_1.default));
exports.default = Image;
