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
var options_1 = require("../../utils/options");
var Text_1 = require("./Text");
var elman_1 = require("../../utils/elman");
var extra_1 = require("../../extra");
var defaultLink = function (more) {
    if (more === void 0) { more = null; }
    return (0, options_1.default)({
        element: { name: 'a' },
        class: more ? 'link ' + more : 'link',
        accepts: false,
        _setters: ['url', 'target'],
        icon: null
    });
};
function link(el, url) {
    if (typeof url == "string") {
        el
            .attr({ 'href': url });
    }
    else {
        if (url.url) {
            el
                .attr({ 'href': url.url })
                .on('click', function (e) {
                e.preventDefault();
                url.click(url.url);
            });
        }
    }
}
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(selectedOptions, otheroptions) {
        if (otheroptions === void 0) { otheroptions = null; }
        var options = Text_1.default.resolveOptions(selectedOptions, otheroptions, __assign({}, defaultLink()));
        return _super.call(this, options) || this;
    }
    Object.defineProperty(Link.prototype, "url", {
        set: function (url) {
            var _this = this;
            if (url instanceof extra_1.Controller)
                url.onChange(function (change) {
                    _this.url = change;
                });
            link((0, elman_1.findEl)(this.id), url instanceof extra_1.Controller ? url.get() : url);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "target", {
        set: function (target) {
            (0, elman_1.findEl)(this.id).at(0).target = target;
        },
        enumerable: false,
        configurable: true
    });
    return Link;
}(Text_1.default));
exports.default = Link;
