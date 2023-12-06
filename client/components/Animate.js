"use strict";
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
exports.animateWidgets = exports.animateWidget = void 0;
var anime_1 = require("../modules/anime");
var elman_1 = require("../utils/elman");
function makeOps(animations) {
    var _loop_1 = function () {
        var _a;
        var anim = animations[i];
        if (typeof anim == "function") {
            animations[i] = function (el) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return anim.apply(void 0, __spreadArray([el.GUIWIDGET], args, false));
            };
        }
        if (typeof anim == "string") {
            var func_1 = anim.match(/(random|stagger)\(([^)]+)\)/);
            var funcs = 'random|none'.split('|');
            if (func_1) {
                var args_1 = func_1[2].match(',') ? func_1[2].split(',').map(function (i) { return i.trim(); }) : [func_1[2]];
                args_1 = args_1.map(function (g) { return isNaN(parseInt(g)) ? g : parseInt(g); })
                    .map(function (g) {
                    if (typeof g == "string") {
                        try {
                            return JSON.parse(g);
                        }
                        catch (e) {
                            return g;
                        }
                    }
                    return g;
                });
                animations[i] = funcs.includes(func_1[1]) ? function () {
                    var _a;
                    return (_a = anime_1.default)[func_1[1]].apply(_a, args_1);
                } : (_a = anime_1.default)[func_1[1]].apply(_a, args_1);
            }
        }
    };
    for (var i in animations) {
        _loop_1();
    }
    console.log(animations);
    return animations;
}
function animateWidgets(widgets, animations) {
    animations = makeOps(animations);
    return (0, anime_1.default)(__assign({ targets: widgets.map(function (widget) { return (0, elman_1.findEl)(widget.id).at(0); }) }, animations));
}
exports.animateWidgets = animateWidgets;
function animateWidget(widget, animations) {
    return animateWidgets([widget], animations);
}
exports.animateWidget = animateWidget;
;
