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
;
var Widget_1 = require("../main/Widget");
var options_1 = require("../../utils/options");
var elman_1 = require("../../utils/elman");
function checkQuery(w, h, pw, ph, vw, vh, query) {
    var cases = [];
    if (query.match(/\|\||&&/)) {
        cases.push.apply(cases, (query.split(/\|\||&&/).map(function (c) { return ({ case: c, true: false }); })));
    }
    else {
        cases.push({ case: query, true: false });
    }
    if (!w || !h || !pw || !ph || !vw || !vh) { }
    var overallResult = true;
    cases.forEach(function (c) {
        var query = c.case.trim();
        var match = query.match(/(w|h|pw|ph|vw|vh)(\s+|)(==|!=|>|<|>=|<=)(\s+|)([0-9]+)/);
        if (match) {
            overallResult = overallResult && eval("var w = ".concat(w, ", h = ").concat(h, ", pw = ").concat(pw, ", ph = ").concat(ph, ", vw = ").concat(vw, ", vh = ").concat(vh, ";\n") + query);
        }
        else {
            throw new Error("Invalid LayoutBuilder query: ".concat(query));
        }
    });
    return overallResult;
}
var handleResize = function (widget, options) {
    if (widget.handlingResize)
        return;
    widget.handlingResize = true;
    var parentWidth = widget.parent().width();
    var parentHeight = widget.parent().height();
    widget.emit('resize', { width: widget.width(), height: widget.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
    if (options.queries) {
        var prevChildren = Array.from(widget.children()).map(function (child) { return (0, elman_1.findEl)(child.id); });
        prevChildren.forEach(function (child) { return child.remove(); });
        var matchedQuery = Object.entries(options.queries).find(function (_a) {
            var query = _a[0], builderFn = _a[1];
            return checkQuery(widget.width(), widget.height(), parentWidth, parentHeight, window.innerWidth, window.innerHeight, query);
        });
        if (matchedQuery) {
            var query = matchedQuery[0], builderFn = matchedQuery[1];
            var newChildren = typeof builderFn == "function" ? builderFn(prevChildren.map(function (child) { return child.GUIWIDGET; })) : builderFn;
            if (newChildren instanceof Widget_1.default) {
                widget.add(newChildren);
            }
            else if (Array.isArray(newChildren)) {
                newChildren.forEach(function (child) { return widget.add(child); });
            }
        }
    }
    widget.emit('layout:rebuild', { width: widget.width(), height: widget.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
    delete widget.handlingResize;
};
var LayoutBuilder = /** @class */ (function (_super) {
    __extends(LayoutBuilder, _super);
    function LayoutBuilder(selectedOptions) {
        var options = __assign(__assign({}, ((0, options_1.default)({ element: { name: 'div' }, class: 'layout-builder' }))), selectedOptions);
        return _super.call(this, options) || this;
    }
    LayoutBuilder.prototype._onMount = function (parent) {
        var _this = this;
        _super.prototype._onMount.call(this, parent);
        window.addEventListener('resize', function () { return handleResize(_this, _this.options); });
        handleResize(this, this.options);
    };
    return LayoutBuilder;
}(Widget_1.default));
exports.default = LayoutBuilder;
