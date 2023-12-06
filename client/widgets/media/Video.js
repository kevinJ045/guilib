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
var defaultVideo = function () {
    return (0, options_1.default)({
        element: { name: "video" },
        class: "video",
        accepts: false,
        _setters: ['src', 'controls', 'autoplay']
    });
};
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(selectedOptions, otheroptions) {
        var _this = this;
        if (otheroptions === void 0) { otheroptions = null; }
        var options = Video.resolveOptions(selectedOptions, otheroptions, defaultVideo());
        _this = _super.call(this, options) || this;
        if (options.width)
            _this.width(options.width);
        if (options.height)
            _this.height(options.height);
        return _this;
    }
    Video.resolveOptions = function (selectedOptions, otheroptions, defaults) {
        if (typeof selectedOptions === "string") {
            selectedOptions = { src: selectedOptions };
        }
        if (otheroptions) {
            selectedOptions = __assign(__assign({}, otheroptions), selectedOptions);
        }
        return __assign(__assign({}, defaults), selectedOptions);
    };
    Object.defineProperty(Video.prototype, "src", {
        set: function (src) {
            if (this.sealed !== true)
                (0, elman_1.findEl)(this.id).attr({ "src": src });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "controls", {
        set: function (controls) {
            if (this.sealed !== true)
                (0, elman_1.findEl)(this.id).attr({ "controls": controls });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "autoplay", {
        set: function (autoplay) {
            if (this.sealed !== true)
                (0, elman_1.findEl)(this.id).attr({ "autoplay": autoplay });
        },
        enumerable: false,
        configurable: true
    });
    Video.prototype.play = function () {
        (0, elman_1.findEl)(this.id).at(0).play();
        return this;
    };
    Video.prototype.pause = function () {
        (0, elman_1.findEl)(this.id).at(0).pause();
        return this;
    };
    Object.defineProperty(Video.prototype, "paused", {
        get: function () {
            return (0, elman_1.findEl)(this.id).at(0).paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "duration", {
        get: function () {
            return (0, elman_1.findEl)(this.id).at(0).duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "currentTime", {
        get: function () {
            return (0, elman_1.findEl)(this.id).at(0).currentTime;
        },
        enumerable: false,
        configurable: true
    });
    return Video;
}(Widget_1.default));
exports.default = Video;
