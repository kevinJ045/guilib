"use strict";
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
exports.resolveSubchild = exports.filteredChildren = exports.htmlPseudos = void 0;
var WidgetProps_1 = require("../widgets/_ghost/WidgetProps");
var Widget_1 = require("../widgets/main/Widget");
var htmlPseudos = [
    '::after',
    '::before',
    '::first-letter',
    '::first-line',
    '::selection',
    '::placeholder',
    '::marker',
    ':hover',
    ':active',
    ':focus',
    ':visited',
    ':link',
    ':target',
    ':first-child',
    ':last-child',
    ':nth-child(n)',
    ':nth-of-type(n)',
    ':not(selector)',
    ':checked',
];
exports.htmlPseudos = htmlPseudos;
function filteredChildren(children, makeOne, giveNull) {
    if (makeOne === void 0) { makeOne = false; }
    if (giveNull === void 0) { giveNull = false; }
    var filtered = Array.isArray(children) ? children : ((children instanceof Widget_1.default ? children
        .toArray() : children.elements)
        .filter(function (element) { return element.GUIWIDGET; })
        .map(function (element) { return element.GUIWIDGET; }));
    var isOne = filtered.length == 1 && makeOne;
    if (isOne) {
        filtered[0].toArray = function () { return WidgetProps_1.WidgetList.from([filtered[0]]); };
    }
    else {
        filtered.toArray = function () { return WidgetProps_1.WidgetList.from(__spreadArray([], filtered, true)); };
    }
    var toGive = isOne ? filtered[0] : (filtered.length ? filtered : (giveNull ? null : filtered));
    if (Array.isArray(toGive) && !makeOne) {
        return WidgetProps_1.WidgetList.from(toGive);
    }
    return makeOne && Array.isArray(toGive) ? toGive[0] : toGive;
}
exports.filteredChildren = filteredChildren;
function resolveSubchild(element, child) {
    if (child === void 0) { child = null; }
    var el = element;
    if (child && el.find(child) instanceof Widget_1.default)
        el = el.find(child);
    return el;
}
exports.resolveSubchild = resolveSubchild;
