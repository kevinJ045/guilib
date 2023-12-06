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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGRect = exports.SVGCircle = exports.SVGGroup = exports.SVG = exports.SVGPath = void 0;
var elman_1 = require("./utils/elman");
var options_1 = require("./utils/options");
var Widget_1 = require("./widgets/main/Widget");
var SVGPath = /** @class */ (function (_super) {
    __extends(SVGPath, _super);
    function SVGPath(options) {
        return _super.call(this, (0, options_1.mergeOptions)({
            element: { name: 'path' },
            class: '',
            _setters: ['d']
        }, options)) || this;
    }
    Object.defineProperty(SVGPath.prototype, "d", {
        set: function (path) {
            var fill = "";
            var stroke = "";
            var strokeWidth = "";
            var d = path;
            if (path.match(/\#([0-91-f]{6})\|/)) {
                d = path.split('|')[1];
                fill = path.split('|')[0];
            }
            this.attr({ d: d, stroke: stroke, 'stroke-width': strokeWidth, fill: fill });
            this.html(this.html() + '\n');
        },
        enumerable: false,
        configurable: true
    });
    return SVGPath;
}(Widget_1.default));
exports.SVGPath = SVGPath;
function _setSvgPaths(svg, paths) {
    var _p = function (paths) {
        if (Array.isArray(paths)) {
            paths.forEach(function (path) {
                if (typeof path == "string") {
                    svg.add(new SVGPath({ d: path }));
                }
            });
        }
        else if (typeof paths == "object") {
            for (var i in paths) {
                var name_1 = i;
                var group = new SVGGroup({
                    path: paths[i],
                    name: name_1
                });
                svg.add(group);
            }
        }
        else if (typeof paths == "string") {
            svg.add(new SVGPath({ d: paths }));
        }
    };
    _p(paths);
}
var SVGBare = /** @class */ (function (_super) {
    __extends(SVGBare, _super);
    function SVGBare(options) {
        return _super.call(this, (0, options_1.mergeOptions)({
            class: '',
            _setters: ['path']
        }, options)) || this;
    }
    Object.defineProperty(SVGBare.prototype, "path", {
        set: function (path) {
            _setSvgPaths(this, path);
        },
        enumerable: false,
        configurable: true
    });
    return SVGBare;
}(Widget_1.default));
var SVG = /** @class */ (function (_super) {
    __extends(SVG, _super);
    function SVG(options) {
        var _this = _super.call(this, (0, options_1.mergeOptions)({
            element: { name: 'svg' }
        }, options)) || this;
        if (_this.options.height)
            _this.attr({ height: _this.options.height });
        if (_this.options.width)
            _this.attr({ width: _this.options.width });
        return _this;
    }
    SVG.prototype._onMount = function (parent) {
        (0, elman_1.findEl)(this.id).at(0).outerHTML += ' ';
    };
    SVG.prototype.add = function (widget) {
        _super.prototype.add.call(this, widget);
        return this;
    };
    SVG.fromXML = function (xml) {
        var container = document.createElement('div');
        container.innerHTML = xml;
        var svgWidget = new SVG({});
        var svg = (0, elman_1.findEl)(svgWidget.id).at(0);
        var svgTemplate = container.querySelector('svg');
        if (svgTemplate) {
            Array.from(svgTemplate.attributes)
                .forEach(function (attr) {
                svg.attributes.setNamedItem(attr.cloneNode(true));
            });
            svg.innerHTML = svgTemplate === null || svgTemplate === void 0 ? void 0 : svgTemplate.innerHTML;
        }
        return svgWidget;
    };
    return SVG;
}(SVGBare));
exports.SVG = SVG;
var SVGGroup = /** @class */ (function (_super) {
    __extends(SVGGroup, _super);
    function SVGGroup(options) {
        return _super.call(this, (0, options_1.mergeOptions)({
            element: { name: 'group' },
        }, options)) || this;
    }
    return SVGGroup;
}(SVGBare));
exports.SVGGroup = SVGGroup;
var SVGCircle = /** @class */ (function (_super) {
    __extends(SVGCircle, _super);
    function SVGCircle(options) {
        return _super.call(this, (0, options_1.mergeOptions)({
            element: { name: 'circle' },
            class: '',
            _setters: ['cx', 'cy', 'r'],
        }, options)) || this;
    }
    Object.defineProperty(SVGCircle.prototype, "cx", {
        set: function (cx) {
            this.attr({ cx: cx });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGCircle.prototype, "cy", {
        set: function (cy) {
            this.attr({ cy: cy });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGCircle.prototype, "r", {
        set: function (r) {
            this.attr({ r: r });
        },
        enumerable: false,
        configurable: true
    });
    return SVGCircle;
}(Widget_1.default));
exports.SVGCircle = SVGCircle;
var SVGRect = /** @class */ (function (_super) {
    __extends(SVGRect, _super);
    function SVGRect(options) {
        return _super.call(this, (0, options_1.mergeOptions)({
            element: { name: 'rect' },
            class: '',
            _setters: ['x', 'y', 'w', 'h'],
        }, options)) || this;
    }
    Object.defineProperty(SVGRect.prototype, "x", {
        set: function (x) {
            this.attr({ x: x });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGRect.prototype, "y", {
        set: function (y) {
            this.attr({ y: y });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGRect.prototype, "w", {
        set: function (width) {
            this.attr({ width: width });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGRect.prototype, "h", {
        set: function (height) {
            this.attr({ height: height });
        },
        enumerable: false,
        configurable: true
    });
    return SVGRect;
}(Widget_1.default));
exports.SVGRect = SVGRect;
