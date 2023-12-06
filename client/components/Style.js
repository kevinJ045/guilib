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
var eventtarget_1 = require("../utils/eventtarget");
var voca_1 = require("../modules/voca");
var elman_1 = require("../utils/elman");
var type_1 = require("../utils/type");
var id_1 = require("../utils/id");
function trimRules(rules) {
    return rules;
}
var css = {};
var variables = {};
function colorProp(prop) {
    if (typeof prop == 'number') {
        if (prop.toString(16).match(/[0-9a-f]{6}|[0-9a-f]{3}|[0-9a-f]{5}/))
            prop = '#' + (prop.toString(16).length == 5 ? '0' + prop.toString(16) : prop.toString(16));
    }
    return prop;
}
function variableProp(prop) {
    if (typeof prop == 'string') {
        if (prop.toLocaleLowerCase() in variables)
            prop = variables[prop];
    }
    return prop;
}
function cssProperty(prop, fixArray) {
    if (fixArray === void 0) { fixArray = true; }
    prop = colorProp(prop);
    prop = variableProp(prop);
    if (Array.isArray(prop)) {
        prop = prop.map(function (f) { return (typeof f == 'number' && fixArray) ? f + 'px' : cssProperty(f); }).join(' ');
    }
    return prop;
}
function setCss(name, map) {
    if (!css[name])
        css[name] = {};
    for (var i in map) {
        css[name][i] = cssProperty(map[i]);
    }
}
function getCss(name, prop) {
    if (prop === void 0) { prop = null; }
    if (!css[name])
        css[name] = {};
    if (!prop)
        return css[name];
    return css[name][prop];
}
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(name, map) {
        if (map === void 0) { map = null; }
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.values = {};
        if (typeof name == 'object' && !map) {
            map = name;
            name = null;
        }
        if (!name)
            name = 'style-' + Object.keys(css).length;
        _this.name = name;
        if (map) {
            _this.set(map);
        }
        _this.values = new Proxy({}, {
            get: function (target, propName) { return _this[propName] || _this.all[propName]; }
        });
        return _this;
    }
    Style.prototype.addProperty = function (prop, value) {
        var _a;
        var p = trimRules((_a = {}, _a[prop] = value, _a));
        if (p[prop])
            this[prop] = value;
    };
    Object.defineProperty(Style.prototype, "all", {
        get: function () {
            return getCss(this.name);
        },
        set: function (all) {
            for (var i in all) {
                if (i in this)
                    this[i] = all[i];
                else
                    this.variable(i, all[i]);
            }
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.set = function (all) {
        all = trimRules(all);
        this.all = all;
    };
    Object.defineProperty(Style.prototype, "accentColor", {
        get: function () {
            return getCss(this.name, 'accentColor');
        },
        set: function (value) {
            setCss(this.name, {
                accentColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAccentColor = function (value) {
        this.accentColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "additiveSymbols", {
        get: function () {
            return getCss(this.name, 'additiveSymbols');
        },
        set: function (value) {
            setCss(this.name, {
                additiveSymbols: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAdditiveSymbols = function (value) {
        this.additiveSymbols = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "alignContent", {
        get: function () {
            return getCss(this.name, 'alignContent');
        },
        set: function (value) {
            setCss(this.name, {
                alignContent: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAlignContent = function (value) {
        this.alignContent = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "alignItems", {
        get: function () {
            return getCss(this.name, 'alignItems');
        },
        set: function (value) {
            setCss(this.name, {
                alignItems: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAlignItems = function (value) {
        this.alignItems = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "alignSelf", {
        get: function () {
            return getCss(this.name, 'alignSelf');
        },
        set: function (value) {
            setCss(this.name, {
                alignSelf: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAlignSelf = function (value) {
        this.alignSelf = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "alignmentBaseline", {
        get: function () {
            return getCss(this.name, 'alignmentBaseline');
        },
        set: function (value) {
            setCss(this.name, {
                alignmentBaseline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAlignmentBaseline = function (value) {
        this.alignmentBaseline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animation", {
        get: function () {
            return getCss(this.name, 'animation');
        },
        set: function (value) {
            setCss(this.name, {
                animation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimation = function (value) {
        this.animation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationComposition", {
        get: function () {
            return getCss(this.name, 'animationComposition');
        },
        set: function (value) {
            setCss(this.name, {
                animationComposition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationComposition = function (value) {
        this.animationComposition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationDelay", {
        get: function () {
            return getCss(this.name, 'animationDelay');
        },
        set: function (value) {
            setCss(this.name, {
                animationDelay: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationDelay = function (value) {
        this.animationDelay = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationDirection", {
        get: function () {
            return getCss(this.name, 'animationDirection');
        },
        set: function (value) {
            setCss(this.name, {
                animationDirection: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationDirection = function (value) {
        this.animationDirection = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationDuration", {
        get: function () {
            return getCss(this.name, 'animationDuration');
        },
        set: function (value) {
            setCss(this.name, {
                animationDuration: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationDuration = function (value) {
        this.animationDuration = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationFillMode", {
        get: function () {
            return getCss(this.name, 'animationFillMode');
        },
        set: function (value) {
            setCss(this.name, {
                animationFillMode: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationFillMode = function (value) {
        this.animationFillMode = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationIterationCount", {
        get: function () {
            return getCss(this.name, 'animationIterationCount');
        },
        set: function (value) {
            setCss(this.name, {
                animationIterationCount: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationIterationCount = function (value) {
        this.animationIterationCount = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationName", {
        get: function () {
            return getCss(this.name, 'animationName');
        },
        set: function (value) {
            setCss(this.name, {
                animationName: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationName = function (value) {
        this.animationName = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationPlayState", {
        get: function () {
            return getCss(this.name, 'animationPlayState');
        },
        set: function (value) {
            setCss(this.name, {
                animationPlayState: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationPlayState = function (value) {
        this.animationPlayState = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationRange", {
        get: function () {
            return getCss(this.name, 'animationRange');
        },
        set: function (value) {
            setCss(this.name, {
                animationRange: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationRange = function (value) {
        this.animationRange = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationRangeEnd", {
        get: function () {
            return getCss(this.name, 'animationRangeEnd');
        },
        set: function (value) {
            setCss(this.name, {
                animationRangeEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationRangeEnd = function (value) {
        this.animationRangeEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationRangeStart", {
        get: function () {
            return getCss(this.name, 'animationRangeStart');
        },
        set: function (value) {
            setCss(this.name, {
                animationRangeStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationRangeStart = function (value) {
        this.animationRangeStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationTimeline", {
        get: function () {
            return getCss(this.name, 'animationTimeline');
        },
        set: function (value) {
            setCss(this.name, {
                animationTimeline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationTimeline = function (value) {
        this.animationTimeline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "animationTimingFunction", {
        get: function () {
            return getCss(this.name, 'animationTimingFunction');
        },
        set: function (value) {
            setCss(this.name, {
                animationTimingFunction: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAnimationTimingFunction = function (value) {
        this.animationTimingFunction = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "appRegion", {
        get: function () {
            return getCss(this.name, 'appRegion');
        },
        set: function (value) {
            setCss(this.name, {
                appRegion: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAppRegion = function (value) {
        this.appRegion = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "appearance", {
        get: function () {
            return getCss(this.name, 'appearance');
        },
        set: function (value) {
            setCss(this.name, {
                appearance: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAppearance = function (value) {
        this.appearance = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "ascentOverride", {
        get: function () {
            return getCss(this.name, 'ascentOverride');
        },
        set: function (value) {
            setCss(this.name, {
                ascentOverride: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAscentOverride = function (value) {
        this.ascentOverride = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "aspectRatio", {
        get: function () {
            return getCss(this.name, 'aspectRatio');
        },
        set: function (value) {
            setCss(this.name, {
                aspectRatio: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setAspectRatio = function (value) {
        this.aspectRatio = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backdropFilter", {
        get: function () {
            return getCss(this.name, 'backdropFilter');
        },
        set: function (value) {
            setCss(this.name, {
                backdropFilter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackdropFilter = function (value) {
        this.backdropFilter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backfaceVisibility", {
        get: function () {
            return getCss(this.name, 'backfaceVisibility');
        },
        set: function (value) {
            setCss(this.name, {
                backfaceVisibility: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackfaceVisibility = function (value) {
        this.backfaceVisibility = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "background", {
        get: function () {
            return getCss(this.name, 'background');
        },
        set: function (value) {
            setCss(this.name, {
                background: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackground = function (value) {
        this.background = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundAttachment", {
        get: function () {
            return getCss(this.name, 'backgroundAttachment');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundAttachment: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundAttachment = function (value) {
        this.backgroundAttachment = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundBlendMode", {
        get: function () {
            return getCss(this.name, 'backgroundBlendMode');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundBlendMode: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundBlendMode = function (value) {
        this.backgroundBlendMode = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundClip", {
        get: function () {
            return getCss(this.name, 'backgroundClip');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundClip: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundClip = function (value) {
        this.backgroundClip = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundColor", {
        get: function () {
            return getCss(this.name, 'backgroundColor');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundColor = function (value) {
        this.backgroundColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundImage", {
        get: function () {
            return getCss(this.name, 'backgroundImage');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundImage: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundImage = function (value) {
        this.backgroundImage = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundOrigin", {
        get: function () {
            return getCss(this.name, 'backgroundOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundOrigin = function (value) {
        this.backgroundOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundPosition", {
        get: function () {
            return getCss(this.name, 'backgroundPosition');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundPosition = function (value) {
        this.backgroundPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundPositionX", {
        get: function () {
            return getCss(this.name, 'backgroundPositionX');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundPositionX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundPositionX = function (value) {
        this.backgroundPositionX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundPositionY", {
        get: function () {
            return getCss(this.name, 'backgroundPositionY');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundPositionY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundPositionY = function (value) {
        this.backgroundPositionY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundRepeat", {
        get: function () {
            return getCss(this.name, 'backgroundRepeat');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundRepeat: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundRepeat = function (value) {
        this.backgroundRepeat = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundRepeatX", {
        get: function () {
            return getCss(this.name, 'backgroundRepeatX');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundRepeatX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundRepeatX = function (value) {
        this.backgroundRepeatX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundRepeatY", {
        get: function () {
            return getCss(this.name, 'backgroundRepeatY');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundRepeatY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundRepeatY = function (value) {
        this.backgroundRepeatY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "backgroundSize", {
        get: function () {
            return getCss(this.name, 'backgroundSize');
        },
        set: function (value) {
            setCss(this.name, {
                backgroundSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBackgroundSize = function (value) {
        this.backgroundSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "basePalette", {
        get: function () {
            return getCss(this.name, 'basePalette');
        },
        set: function (value) {
            setCss(this.name, {
                basePalette: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBasePalette = function (value) {
        this.basePalette = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "baselineShift", {
        get: function () {
            return getCss(this.name, 'baselineShift');
        },
        set: function (value) {
            setCss(this.name, {
                baselineShift: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBaselineShift = function (value) {
        this.baselineShift = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "baselineSource", {
        get: function () {
            return getCss(this.name, 'baselineSource');
        },
        set: function (value) {
            setCss(this.name, {
                baselineSource: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBaselineSource = function (value) {
        this.baselineSource = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "blockSize", {
        get: function () {
            return getCss(this.name, 'blockSize');
        },
        set: function (value) {
            setCss(this.name, {
                blockSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBlockSize = function (value) {
        this.blockSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "border", {
        get: function () {
            return getCss(this.name, 'border');
        },
        set: function (value) {
            setCss(this.name, {
                border: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorder = function (value) {
        this.border = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlock", {
        get: function () {
            return getCss(this.name, 'borderBlock');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlock = function (value) {
        this.borderBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockColor", {
        get: function () {
            return getCss(this.name, 'borderBlockColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockColor = function (value) {
        this.borderBlockColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockEnd", {
        get: function () {
            return getCss(this.name, 'borderBlockEnd');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockEnd = function (value) {
        this.borderBlockEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockEndColor", {
        get: function () {
            return getCss(this.name, 'borderBlockEndColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockEndColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockEndColor = function (value) {
        this.borderBlockEndColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockEndStyle", {
        get: function () {
            return getCss(this.name, 'borderBlockEndStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockEndStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockEndStyle = function (value) {
        this.borderBlockEndStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockEndWidth", {
        get: function () {
            return getCss(this.name, 'borderBlockEndWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockEndWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockEndWidth = function (value) {
        this.borderBlockEndWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockStart", {
        get: function () {
            return getCss(this.name, 'borderBlockStart');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockStart = function (value) {
        this.borderBlockStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockStartColor", {
        get: function () {
            return getCss(this.name, 'borderBlockStartColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockStartColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockStartColor = function (value) {
        this.borderBlockStartColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockStartStyle", {
        get: function () {
            return getCss(this.name, 'borderBlockStartStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockStartStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockStartStyle = function (value) {
        this.borderBlockStartStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockStartWidth", {
        get: function () {
            return getCss(this.name, 'borderBlockStartWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockStartWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockStartWidth = function (value) {
        this.borderBlockStartWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockStyle", {
        get: function () {
            return getCss(this.name, 'borderBlockStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockStyle = function (value) {
        this.borderBlockStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBlockWidth", {
        get: function () {
            return getCss(this.name, 'borderBlockWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderBlockWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBlockWidth = function (value) {
        this.borderBlockWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBottom", {
        get: function () {
            return getCss(this.name, 'borderBottom');
        },
        set: function (value) {
            setCss(this.name, {
                borderBottom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBottom = function (value) {
        this.borderBottom = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBottomColor", {
        get: function () {
            return getCss(this.name, 'borderBottomColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderBottomColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBottomColor = function (value) {
        this.borderBottomColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBottomLeftRadius", {
        get: function () {
            return getCss(this.name, 'borderBottomLeftRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderBottomLeftRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBottomLeftRadius = function (value) {
        this.borderBottomLeftRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBottomRightRadius", {
        get: function () {
            return getCss(this.name, 'borderBottomRightRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderBottomRightRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBottomRightRadius = function (value) {
        this.borderBottomRightRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBottomStyle", {
        get: function () {
            return getCss(this.name, 'borderBottomStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderBottomStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBottomStyle = function (value) {
        this.borderBottomStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderBottomWidth", {
        get: function () {
            return getCss(this.name, 'borderBottomWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderBottomWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderBottomWidth = function (value) {
        this.borderBottomWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderCollapse", {
        get: function () {
            return getCss(this.name, 'borderCollapse');
        },
        set: function (value) {
            setCss(this.name, {
                borderCollapse: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderCollapse = function (value) {
        this.borderCollapse = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderColor", {
        get: function () {
            return getCss(this.name, 'borderColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderColor = function (value) {
        this.borderColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderEndEndRadius", {
        get: function () {
            return getCss(this.name, 'borderEndEndRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderEndEndRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderEndEndRadius = function (value) {
        this.borderEndEndRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderEndStartRadius", {
        get: function () {
            return getCss(this.name, 'borderEndStartRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderEndStartRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderEndStartRadius = function (value) {
        this.borderEndStartRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderImage", {
        get: function () {
            return getCss(this.name, 'borderImage');
        },
        set: function (value) {
            setCss(this.name, {
                borderImage: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderImage = function (value) {
        this.borderImage = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderImageOutset", {
        get: function () {
            return getCss(this.name, 'borderImageOutset');
        },
        set: function (value) {
            setCss(this.name, {
                borderImageOutset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderImageOutset = function (value) {
        this.borderImageOutset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderImageRepeat", {
        get: function () {
            return getCss(this.name, 'borderImageRepeat');
        },
        set: function (value) {
            setCss(this.name, {
                borderImageRepeat: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderImageRepeat = function (value) {
        this.borderImageRepeat = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderImageSlice", {
        get: function () {
            return getCss(this.name, 'borderImageSlice');
        },
        set: function (value) {
            setCss(this.name, {
                borderImageSlice: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderImageSlice = function (value) {
        this.borderImageSlice = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderImageSource", {
        get: function () {
            return getCss(this.name, 'borderImageSource');
        },
        set: function (value) {
            setCss(this.name, {
                borderImageSource: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderImageSource = function (value) {
        this.borderImageSource = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderImageWidth", {
        get: function () {
            return getCss(this.name, 'borderImageWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderImageWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderImageWidth = function (value) {
        this.borderImageWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInline", {
        get: function () {
            return getCss(this.name, 'borderInline');
        },
        set: function (value) {
            setCss(this.name, {
                borderInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInline = function (value) {
        this.borderInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineColor", {
        get: function () {
            return getCss(this.name, 'borderInlineColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineColor = function (value) {
        this.borderInlineColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineEnd", {
        get: function () {
            return getCss(this.name, 'borderInlineEnd');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineEnd = function (value) {
        this.borderInlineEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineEndColor", {
        get: function () {
            return getCss(this.name, 'borderInlineEndColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineEndColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineEndColor = function (value) {
        this.borderInlineEndColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineEndStyle", {
        get: function () {
            return getCss(this.name, 'borderInlineEndStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineEndStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineEndStyle = function (value) {
        this.borderInlineEndStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineEndWidth", {
        get: function () {
            return getCss(this.name, 'borderInlineEndWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineEndWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineEndWidth = function (value) {
        this.borderInlineEndWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineStart", {
        get: function () {
            return getCss(this.name, 'borderInlineStart');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineStart = function (value) {
        this.borderInlineStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineStartColor", {
        get: function () {
            return getCss(this.name, 'borderInlineStartColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineStartColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineStartColor = function (value) {
        this.borderInlineStartColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineStartStyle", {
        get: function () {
            return getCss(this.name, 'borderInlineStartStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineStartStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineStartStyle = function (value) {
        this.borderInlineStartStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineStartWidth", {
        get: function () {
            return getCss(this.name, 'borderInlineStartWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineStartWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineStartWidth = function (value) {
        this.borderInlineStartWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineStyle", {
        get: function () {
            return getCss(this.name, 'borderInlineStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineStyle = function (value) {
        this.borderInlineStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderInlineWidth", {
        get: function () {
            return getCss(this.name, 'borderInlineWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderInlineWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderInlineWidth = function (value) {
        this.borderInlineWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderLeft", {
        get: function () {
            return getCss(this.name, 'borderLeft');
        },
        set: function (value) {
            setCss(this.name, {
                borderLeft: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderLeft = function (value) {
        this.borderLeft = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderLeftColor", {
        get: function () {
            return getCss(this.name, 'borderLeftColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderLeftColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderLeftColor = function (value) {
        this.borderLeftColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderLeftStyle", {
        get: function () {
            return getCss(this.name, 'borderLeftStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderLeftStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderLeftStyle = function (value) {
        this.borderLeftStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderLeftWidth", {
        get: function () {
            return getCss(this.name, 'borderLeftWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderLeftWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderLeftWidth = function (value) {
        this.borderLeftWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderRadius", {
        get: function () {
            return getCss(this.name, 'borderRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderRadius = function (value) {
        this.borderRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderRight", {
        get: function () {
            return getCss(this.name, 'borderRight');
        },
        set: function (value) {
            setCss(this.name, {
                borderRight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderRight = function (value) {
        this.borderRight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderRightColor", {
        get: function () {
            return getCss(this.name, 'borderRightColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderRightColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderRightColor = function (value) {
        this.borderRightColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderRightStyle", {
        get: function () {
            return getCss(this.name, 'borderRightStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderRightStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderRightStyle = function (value) {
        this.borderRightStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderRightWidth", {
        get: function () {
            return getCss(this.name, 'borderRightWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderRightWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderRightWidth = function (value) {
        this.borderRightWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderSpacing", {
        get: function () {
            return getCss(this.name, 'borderSpacing');
        },
        set: function (value) {
            setCss(this.name, {
                borderSpacing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderSpacing = function (value) {
        this.borderSpacing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderStartEndRadius", {
        get: function () {
            return getCss(this.name, 'borderStartEndRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderStartEndRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderStartEndRadius = function (value) {
        this.borderStartEndRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderStartStartRadius", {
        get: function () {
            return getCss(this.name, 'borderStartStartRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderStartStartRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderStartStartRadius = function (value) {
        this.borderStartStartRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderStyle", {
        get: function () {
            return getCss(this.name, 'borderStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderStyle = function (value) {
        this.borderStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderTop", {
        get: function () {
            return getCss(this.name, 'borderTop');
        },
        set: function (value) {
            setCss(this.name, {
                borderTop: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderTop = function (value) {
        this.borderTop = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderTopColor", {
        get: function () {
            return getCss(this.name, 'borderTopColor');
        },
        set: function (value) {
            setCss(this.name, {
                borderTopColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderTopColor = function (value) {
        this.borderTopColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderTopLeftRadius", {
        get: function () {
            return getCss(this.name, 'borderTopLeftRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderTopLeftRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderTopLeftRadius = function (value) {
        this.borderTopLeftRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderTopRightRadius", {
        get: function () {
            return getCss(this.name, 'borderTopRightRadius');
        },
        set: function (value) {
            setCss(this.name, {
                borderTopRightRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderTopRightRadius = function (value) {
        this.borderTopRightRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderTopStyle", {
        get: function () {
            return getCss(this.name, 'borderTopStyle');
        },
        set: function (value) {
            setCss(this.name, {
                borderTopStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderTopStyle = function (value) {
        this.borderTopStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderTopWidth", {
        get: function () {
            return getCss(this.name, 'borderTopWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderTopWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderTopWidth = function (value) {
        this.borderTopWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "borderWidth", {
        get: function () {
            return getCss(this.name, 'borderWidth');
        },
        set: function (value) {
            setCss(this.name, {
                borderWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBorderWidth = function (value) {
        this.borderWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "bottom", {
        get: function () {
            return getCss(this.name, 'bottom');
        },
        set: function (value) {
            setCss(this.name, {
                bottom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBottom = function (value) {
        this.bottom = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "boxShadow", {
        get: function () {
            return getCss(this.name, 'boxShadow');
        },
        set: function (value) {
            setCss(this.name, {
                boxShadow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBoxShadow = function (value) {
        this.boxShadow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "boxSizing", {
        get: function () {
            return getCss(this.name, 'boxSizing');
        },
        set: function (value) {
            setCss(this.name, {
                boxSizing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBoxSizing = function (value) {
        this.boxSizing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "breakAfter", {
        get: function () {
            return getCss(this.name, 'breakAfter');
        },
        set: function (value) {
            setCss(this.name, {
                breakAfter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBreakAfter = function (value) {
        this.breakAfter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "breakBefore", {
        get: function () {
            return getCss(this.name, 'breakBefore');
        },
        set: function (value) {
            setCss(this.name, {
                breakBefore: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBreakBefore = function (value) {
        this.breakBefore = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "breakInside", {
        get: function () {
            return getCss(this.name, 'breakInside');
        },
        set: function (value) {
            setCss(this.name, {
                breakInside: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBreakInside = function (value) {
        this.breakInside = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "bufferedRendering", {
        get: function () {
            return getCss(this.name, 'bufferedRendering');
        },
        set: function (value) {
            setCss(this.name, {
                bufferedRendering: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setBufferedRendering = function (value) {
        this.bufferedRendering = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "captionSide", {
        get: function () {
            return getCss(this.name, 'captionSide');
        },
        set: function (value) {
            setCss(this.name, {
                captionSide: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCaptionSide = function (value) {
        this.captionSide = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "caretColor", {
        get: function () {
            return getCss(this.name, 'caretColor');
        },
        set: function (value) {
            setCss(this.name, {
                caretColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCaretColor = function (value) {
        this.caretColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "clear", {
        get: function () {
            return getCss(this.name, 'clear');
        },
        set: function (value) {
            setCss(this.name, {
                clear: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setClear = function (value) {
        this.clear = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "clip", {
        get: function () {
            return getCss(this.name, 'clip');
        },
        set: function (value) {
            setCss(this.name, {
                clip: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setClip = function (value) {
        this.clip = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "clipPath", {
        get: function () {
            return getCss(this.name, 'clipPath');
        },
        set: function (value) {
            setCss(this.name, {
                clipPath: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setClipPath = function (value) {
        this.clipPath = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "clipRule", {
        get: function () {
            return getCss(this.name, 'clipRule');
        },
        set: function (value) {
            setCss(this.name, {
                clipRule: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setClipRule = function (value) {
        this.clipRule = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "color", {
        get: function () {
            return getCss(this.name, 'color');
        },
        set: function (value) {
            setCss(this.name, {
                color: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColor = function (value) {
        this.color = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "colorInterpolation", {
        get: function () {
            return getCss(this.name, 'colorInterpolation');
        },
        set: function (value) {
            setCss(this.name, {
                colorInterpolation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColorInterpolation = function (value) {
        this.colorInterpolation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "colorInterpolationFilters", {
        get: function () {
            return getCss(this.name, 'colorInterpolationFilters');
        },
        set: function (value) {
            setCss(this.name, {
                colorInterpolationFilters: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColorInterpolationFilters = function (value) {
        this.colorInterpolationFilters = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "colorRendering", {
        get: function () {
            return getCss(this.name, 'colorRendering');
        },
        set: function (value) {
            setCss(this.name, {
                colorRendering: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColorRendering = function (value) {
        this.colorRendering = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "colorScheme", {
        get: function () {
            return getCss(this.name, 'colorScheme');
        },
        set: function (value) {
            setCss(this.name, {
                colorScheme: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColorScheme = function (value) {
        this.colorScheme = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnCount", {
        get: function () {
            return getCss(this.name, 'columnCount');
        },
        set: function (value) {
            setCss(this.name, {
                columnCount: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnCount = function (value) {
        this.columnCount = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnFill", {
        get: function () {
            return getCss(this.name, 'columnFill');
        },
        set: function (value) {
            setCss(this.name, {
                columnFill: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnFill = function (value) {
        this.columnFill = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnGap", {
        get: function () {
            return getCss(this.name, 'columnGap');
        },
        set: function (value) {
            setCss(this.name, {
                columnGap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnGap = function (value) {
        this.columnGap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnRule", {
        get: function () {
            return getCss(this.name, 'columnRule');
        },
        set: function (value) {
            setCss(this.name, {
                columnRule: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnRule = function (value) {
        this.columnRule = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnRuleColor", {
        get: function () {
            return getCss(this.name, 'columnRuleColor');
        },
        set: function (value) {
            setCss(this.name, {
                columnRuleColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnRuleColor = function (value) {
        this.columnRuleColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnRuleStyle", {
        get: function () {
            return getCss(this.name, 'columnRuleStyle');
        },
        set: function (value) {
            setCss(this.name, {
                columnRuleStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnRuleStyle = function (value) {
        this.columnRuleStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnRuleWidth", {
        get: function () {
            return getCss(this.name, 'columnRuleWidth');
        },
        set: function (value) {
            setCss(this.name, {
                columnRuleWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnRuleWidth = function (value) {
        this.columnRuleWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnSpan", {
        get: function () {
            return getCss(this.name, 'columnSpan');
        },
        set: function (value) {
            setCss(this.name, {
                columnSpan: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnSpan = function (value) {
        this.columnSpan = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columnWidth", {
        get: function () {
            return getCss(this.name, 'columnWidth');
        },
        set: function (value) {
            setCss(this.name, {
                columnWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumnWidth = function (value) {
        this.columnWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "columns", {
        get: function () {
            return getCss(this.name, 'columns');
        },
        set: function (value) {
            setCss(this.name, {
                columns: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setColumns = function (value) {
        this.columns = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "contain", {
        get: function () {
            return getCss(this.name, 'contain');
        },
        set: function (value) {
            setCss(this.name, {
                contain: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContain = function (value) {
        this.contain = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containIntrinsicBlockSize", {
        get: function () {
            return getCss(this.name, 'containIntrinsicBlockSize');
        },
        set: function (value) {
            setCss(this.name, {
                containIntrinsicBlockSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainIntrinsicBlockSize = function (value) {
        this.containIntrinsicBlockSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containIntrinsicHeight", {
        get: function () {
            return getCss(this.name, 'containIntrinsicHeight');
        },
        set: function (value) {
            setCss(this.name, {
                containIntrinsicHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainIntrinsicHeight = function (value) {
        this.containIntrinsicHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containIntrinsicInlineSize", {
        get: function () {
            return getCss(this.name, 'containIntrinsicInlineSize');
        },
        set: function (value) {
            setCss(this.name, {
                containIntrinsicInlineSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainIntrinsicInlineSize = function (value) {
        this.containIntrinsicInlineSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containIntrinsicSize", {
        get: function () {
            return getCss(this.name, 'containIntrinsicSize');
        },
        set: function (value) {
            setCss(this.name, {
                containIntrinsicSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainIntrinsicSize = function (value) {
        this.containIntrinsicSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containIntrinsicWidth", {
        get: function () {
            return getCss(this.name, 'containIntrinsicWidth');
        },
        set: function (value) {
            setCss(this.name, {
                containIntrinsicWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainIntrinsicWidth = function (value) {
        this.containIntrinsicWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "container", {
        get: function () {
            return getCss(this.name, 'container');
        },
        set: function (value) {
            setCss(this.name, {
                container: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainer = function (value) {
        this.container = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containerName", {
        get: function () {
            return getCss(this.name, 'containerName');
        },
        set: function (value) {
            setCss(this.name, {
                containerName: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainerName = function (value) {
        this.containerName = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "containerType", {
        get: function () {
            return getCss(this.name, 'containerType');
        },
        set: function (value) {
            setCss(this.name, {
                containerType: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContainerType = function (value) {
        this.containerType = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "content", {
        get: function () {
            return getCss(this.name, 'content');
        },
        set: function (value) {
            setCss(this.name, {
                content: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContent = function (value) {
        this.content = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "contentVisibility", {
        get: function () {
            return getCss(this.name, 'contentVisibility');
        },
        set: function (value) {
            setCss(this.name, {
                contentVisibility: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setContentVisibility = function (value) {
        this.contentVisibility = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "counterIncrement", {
        get: function () {
            return getCss(this.name, 'counterIncrement');
        },
        set: function (value) {
            setCss(this.name, {
                counterIncrement: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCounterIncrement = function (value) {
        this.counterIncrement = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "counterReset", {
        get: function () {
            return getCss(this.name, 'counterReset');
        },
        set: function (value) {
            setCss(this.name, {
                counterReset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCounterReset = function (value) {
        this.counterReset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "counterSet", {
        get: function () {
            return getCss(this.name, 'counterSet');
        },
        set: function (value) {
            setCss(this.name, {
                counterSet: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCounterSet = function (value) {
        this.counterSet = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "cursor", {
        get: function () {
            return getCss(this.name, 'cursor');
        },
        set: function (value) {
            setCss(this.name, {
                cursor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCursor = function (value) {
        this.cursor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "cx", {
        get: function () {
            return getCss(this.name, 'cx');
        },
        set: function (value) {
            setCss(this.name, {
                cx: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCx = function (value) {
        this.cx = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "cy", {
        get: function () {
            return getCss(this.name, 'cy');
        },
        set: function (value) {
            setCss(this.name, {
                cy: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setCy = function (value) {
        this.cy = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "d", {
        get: function () {
            return getCss(this.name, 'd');
        },
        set: function (value) {
            setCss(this.name, {
                d: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setD = function (value) {
        this.d = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "descentOverride", {
        get: function () {
            return getCss(this.name, 'descentOverride');
        },
        set: function (value) {
            setCss(this.name, {
                descentOverride: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setDescentOverride = function (value) {
        this.descentOverride = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "direction", {
        get: function () {
            return getCss(this.name, 'direction');
        },
        set: function (value) {
            setCss(this.name, {
                direction: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setDirection = function (value) {
        this.direction = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "display", {
        get: function () {
            return getCss(this.name, 'display');
        },
        set: function (value) {
            setCss(this.name, {
                display: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setDisplay = function (value) {
        this.display = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "dominantBaseline", {
        get: function () {
            return getCss(this.name, 'dominantBaseline');
        },
        set: function (value) {
            setCss(this.name, {
                dominantBaseline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setDominantBaseline = function (value) {
        this.dominantBaseline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "emptyCells", {
        get: function () {
            return getCss(this.name, 'emptyCells');
        },
        set: function (value) {
            setCss(this.name, {
                emptyCells: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setEmptyCells = function (value) {
        this.emptyCells = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fallback", {
        get: function () {
            return getCss(this.name, 'fallback');
        },
        set: function (value) {
            setCss(this.name, {
                fallback: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFallback = function (value) {
        this.fallback = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fill", {
        get: function () {
            return getCss(this.name, 'fill');
        },
        set: function (value) {
            setCss(this.name, {
                fill: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFill = function (value) {
        this.fill = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fillOpacity", {
        get: function () {
            return getCss(this.name, 'fillOpacity');
        },
        set: function (value) {
            setCss(this.name, {
                fillOpacity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFillOpacity = function (value) {
        this.fillOpacity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fillRule", {
        get: function () {
            return getCss(this.name, 'fillRule');
        },
        set: function (value) {
            setCss(this.name, {
                fillRule: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFillRule = function (value) {
        this.fillRule = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "filter", {
        get: function () {
            return getCss(this.name, 'filter');
        },
        set: function (value) {
            setCss(this.name, {
                filter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFilter = function (value) {
        this.filter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flex", {
        get: function () {
            return getCss(this.name, 'flex');
        },
        set: function (value) {
            setCss(this.name, {
                flex: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlex = function (value) {
        this.flex = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flexBasis", {
        get: function () {
            return getCss(this.name, 'flexBasis');
        },
        set: function (value) {
            setCss(this.name, {
                flexBasis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlexBasis = function (value) {
        this.flexBasis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flexDirection", {
        get: function () {
            return getCss(this.name, 'flexDirection');
        },
        set: function (value) {
            setCss(this.name, {
                flexDirection: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlexDirection = function (value) {
        this.flexDirection = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flexFlow", {
        get: function () {
            return getCss(this.name, 'flexFlow');
        },
        set: function (value) {
            setCss(this.name, {
                flexFlow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlexFlow = function (value) {
        this.flexFlow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flexGrow", {
        get: function () {
            return getCss(this.name, 'flexGrow');
        },
        set: function (value) {
            setCss(this.name, {
                flexGrow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlexGrow = function (value) {
        this.flexGrow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flexShrink", {
        get: function () {
            return getCss(this.name, 'flexShrink');
        },
        set: function (value) {
            setCss(this.name, {
                flexShrink: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlexShrink = function (value) {
        this.flexShrink = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "flexWrap", {
        get: function () {
            return getCss(this.name, 'flexWrap');
        },
        set: function (value) {
            setCss(this.name, {
                flexWrap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFlexWrap = function (value) {
        this.flexWrap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "float", {
        get: function () {
            return getCss(this.name, 'float');
        },
        set: function (value) {
            setCss(this.name, {
                float: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFloat = function (value) {
        this.float = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "floodColor", {
        get: function () {
            return getCss(this.name, 'floodColor');
        },
        set: function (value) {
            setCss(this.name, {
                floodColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFloodColor = function (value) {
        this.floodColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "floodOpacity", {
        get: function () {
            return getCss(this.name, 'floodOpacity');
        },
        set: function (value) {
            setCss(this.name, {
                floodOpacity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFloodOpacity = function (value) {
        this.floodOpacity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "font", {
        get: function () {
            return getCss(this.name, 'font');
        },
        set: function (value) {
            setCss(this.name, {
                font: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFont = function (value) {
        this.font = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontDisplay", {
        get: function () {
            return getCss(this.name, 'fontDisplay');
        },
        set: function (value) {
            setCss(this.name, {
                fontDisplay: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontDisplay = function (value) {
        this.fontDisplay = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontFamily", {
        get: function () {
            return getCss(this.name, 'fontFamily');
        },
        set: function (value) {
            setCss(this.name, {
                fontFamily: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontFamily = function (value) {
        this.fontFamily = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontFeatureSettings", {
        get: function () {
            return getCss(this.name, 'fontFeatureSettings');
        },
        set: function (value) {
            setCss(this.name, {
                fontFeatureSettings: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontFeatureSettings = function (value) {
        this.fontFeatureSettings = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontKerning", {
        get: function () {
            return getCss(this.name, 'fontKerning');
        },
        set: function (value) {
            setCss(this.name, {
                fontKerning: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontKerning = function (value) {
        this.fontKerning = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontOpticalSizing", {
        get: function () {
            return getCss(this.name, 'fontOpticalSizing');
        },
        set: function (value) {
            setCss(this.name, {
                fontOpticalSizing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontOpticalSizing = function (value) {
        this.fontOpticalSizing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontPalette", {
        get: function () {
            return getCss(this.name, 'fontPalette');
        },
        set: function (value) {
            setCss(this.name, {
                fontPalette: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontPalette = function (value) {
        this.fontPalette = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontSize", {
        get: function () {
            return getCss(this.name, 'fontSize');
        },
        set: function (value) {
            setCss(this.name, {
                fontSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontSize = function (value) {
        this.fontSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontStretch", {
        get: function () {
            return getCss(this.name, 'fontStretch');
        },
        set: function (value) {
            setCss(this.name, {
                fontStretch: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontStretch = function (value) {
        this.fontStretch = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontStyle", {
        get: function () {
            return getCss(this.name, 'fontStyle');
        },
        set: function (value) {
            setCss(this.name, {
                fontStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontStyle = function (value) {
        this.fontStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontSynthesis", {
        get: function () {
            return getCss(this.name, 'fontSynthesis');
        },
        set: function (value) {
            setCss(this.name, {
                fontSynthesis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontSynthesis = function (value) {
        this.fontSynthesis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontSynthesisSmallCaps", {
        get: function () {
            return getCss(this.name, 'fontSynthesisSmallCaps');
        },
        set: function (value) {
            setCss(this.name, {
                fontSynthesisSmallCaps: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontSynthesisSmallCaps = function (value) {
        this.fontSynthesisSmallCaps = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontSynthesisStyle", {
        get: function () {
            return getCss(this.name, 'fontSynthesisStyle');
        },
        set: function (value) {
            setCss(this.name, {
                fontSynthesisStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontSynthesisStyle = function (value) {
        this.fontSynthesisStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontSynthesisWeight", {
        get: function () {
            return getCss(this.name, 'fontSynthesisWeight');
        },
        set: function (value) {
            setCss(this.name, {
                fontSynthesisWeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontSynthesisWeight = function (value) {
        this.fontSynthesisWeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariant", {
        get: function () {
            return getCss(this.name, 'fontVariant');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariant: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariant = function (value) {
        this.fontVariant = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariantAlternates", {
        get: function () {
            return getCss(this.name, 'fontVariantAlternates');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariantAlternates: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariantAlternates = function (value) {
        this.fontVariantAlternates = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariantCaps", {
        get: function () {
            return getCss(this.name, 'fontVariantCaps');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariantCaps: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariantCaps = function (value) {
        this.fontVariantCaps = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariantEastAsian", {
        get: function () {
            return getCss(this.name, 'fontVariantEastAsian');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariantEastAsian: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariantEastAsian = function (value) {
        this.fontVariantEastAsian = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariantLigatures", {
        get: function () {
            return getCss(this.name, 'fontVariantLigatures');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariantLigatures: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariantLigatures = function (value) {
        this.fontVariantLigatures = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariantNumeric", {
        get: function () {
            return getCss(this.name, 'fontVariantNumeric');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariantNumeric: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariantNumeric = function (value) {
        this.fontVariantNumeric = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariantPosition", {
        get: function () {
            return getCss(this.name, 'fontVariantPosition');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariantPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariantPosition = function (value) {
        this.fontVariantPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontVariationSettings", {
        get: function () {
            return getCss(this.name, 'fontVariationSettings');
        },
        set: function (value) {
            setCss(this.name, {
                fontVariationSettings: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontVariationSettings = function (value) {
        this.fontVariationSettings = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "fontWeight", {
        get: function () {
            return getCss(this.name, 'fontWeight');
        },
        set: function (value) {
            setCss(this.name, {
                fontWeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setFontWeight = function (value) {
        this.fontWeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "forcedColorAdjust", {
        get: function () {
            return getCss(this.name, 'forcedColorAdjust');
        },
        set: function (value) {
            setCss(this.name, {
                forcedColorAdjust: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setForcedColorAdjust = function (value) {
        this.forcedColorAdjust = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gap", {
        get: function () {
            return getCss(this.name, 'gap');
        },
        set: function (value) {
            setCss(this.name, {
                gap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGap = function (value) {
        this.gap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "grid", {
        get: function () {
            return getCss(this.name, 'grid');
        },
        set: function (value) {
            setCss(this.name, {
                grid: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGrid = function (value) {
        this.grid = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridArea", {
        get: function () {
            return getCss(this.name, 'gridArea');
        },
        set: function (value) {
            setCss(this.name, {
                gridArea: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridArea = function (value) {
        this.gridArea = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridAutoColumns", {
        get: function () {
            return getCss(this.name, 'gridAutoColumns');
        },
        set: function (value) {
            setCss(this.name, {
                gridAutoColumns: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridAutoColumns = function (value) {
        this.gridAutoColumns = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridAutoFlow", {
        get: function () {
            return getCss(this.name, 'gridAutoFlow');
        },
        set: function (value) {
            setCss(this.name, {
                gridAutoFlow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridAutoFlow = function (value) {
        this.gridAutoFlow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridAutoRows", {
        get: function () {
            return getCss(this.name, 'gridAutoRows');
        },
        set: function (value) {
            setCss(this.name, {
                gridAutoRows: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridAutoRows = function (value) {
        this.gridAutoRows = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridColumn", {
        get: function () {
            return getCss(this.name, 'gridColumn');
        },
        set: function (value) {
            setCss(this.name, {
                gridColumn: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridColumn = function (value) {
        this.gridColumn = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridColumnEnd", {
        get: function () {
            return getCss(this.name, 'gridColumnEnd');
        },
        set: function (value) {
            setCss(this.name, {
                gridColumnEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridColumnEnd = function (value) {
        this.gridColumnEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridColumnGap", {
        get: function () {
            return getCss(this.name, 'gridColumnGap');
        },
        set: function (value) {
            setCss(this.name, {
                gridColumnGap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridColumnGap = function (value) {
        this.gridColumnGap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridColumnStart", {
        get: function () {
            return getCss(this.name, 'gridColumnStart');
        },
        set: function (value) {
            setCss(this.name, {
                gridColumnStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridColumnStart = function (value) {
        this.gridColumnStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridGap", {
        get: function () {
            return getCss(this.name, 'gridGap');
        },
        set: function (value) {
            setCss(this.name, {
                gridGap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridGap = function (value) {
        this.gridGap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridRow", {
        get: function () {
            return getCss(this.name, 'gridRow');
        },
        set: function (value) {
            setCss(this.name, {
                gridRow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridRow = function (value) {
        this.gridRow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridRowEnd", {
        get: function () {
            return getCss(this.name, 'gridRowEnd');
        },
        set: function (value) {
            setCss(this.name, {
                gridRowEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridRowEnd = function (value) {
        this.gridRowEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridRowGap", {
        get: function () {
            return getCss(this.name, 'gridRowGap');
        },
        set: function (value) {
            setCss(this.name, {
                gridRowGap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridRowGap = function (value) {
        this.gridRowGap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridRowStart", {
        get: function () {
            return getCss(this.name, 'gridRowStart');
        },
        set: function (value) {
            setCss(this.name, {
                gridRowStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridRowStart = function (value) {
        this.gridRowStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridTemplate", {
        get: function () {
            return getCss(this.name, 'gridTemplate');
        },
        set: function (value) {
            setCss(this.name, {
                gridTemplate: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridTemplate = function (value) {
        this.gridTemplate = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridTemplateAreas", {
        get: function () {
            return getCss(this.name, 'gridTemplateAreas');
        },
        set: function (value) {
            setCss(this.name, {
                gridTemplateAreas: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridTemplateAreas = function (value) {
        this.gridTemplateAreas = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridTemplateColumns", {
        get: function () {
            return getCss(this.name, 'gridTemplateColumns');
        },
        set: function (value) {
            setCss(this.name, {
                gridTemplateColumns: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridTemplateColumns = function (value) {
        this.gridTemplateColumns = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "gridTemplateRows", {
        get: function () {
            return getCss(this.name, 'gridTemplateRows');
        },
        set: function (value) {
            setCss(this.name, {
                gridTemplateRows: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setGridTemplateRows = function (value) {
        this.gridTemplateRows = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "height", {
        get: function () {
            return getCss(this.name, 'height');
        },
        set: function (value) {
            setCss(this.name, {
                height: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setHeight = function (value) {
        this.height = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "hyphenateCharacter", {
        get: function () {
            return getCss(this.name, 'hyphenateCharacter');
        },
        set: function (value) {
            setCss(this.name, {
                hyphenateCharacter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setHyphenateCharacter = function (value) {
        this.hyphenateCharacter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "hyphenateLimitChars", {
        get: function () {
            return getCss(this.name, 'hyphenateLimitChars');
        },
        set: function (value) {
            setCss(this.name, {
                hyphenateLimitChars: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setHyphenateLimitChars = function (value) {
        this.hyphenateLimitChars = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "hyphens", {
        get: function () {
            return getCss(this.name, 'hyphens');
        },
        set: function (value) {
            setCss(this.name, {
                hyphens: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setHyphens = function (value) {
        this.hyphens = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "imageOrientation", {
        get: function () {
            return getCss(this.name, 'imageOrientation');
        },
        set: function (value) {
            setCss(this.name, {
                imageOrientation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setImageOrientation = function (value) {
        this.imageOrientation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "imageRendering", {
        get: function () {
            return getCss(this.name, 'imageRendering');
        },
        set: function (value) {
            setCss(this.name, {
                imageRendering: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setImageRendering = function (value) {
        this.imageRendering = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "inherits", {
        get: function () {
            return getCss(this.name, 'inherits');
        },
        set: function (value) {
            setCss(this.name, {
                inherits: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInherits = function (value) {
        this.inherits = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "initialLetter", {
        get: function () {
            return getCss(this.name, 'initialLetter');
        },
        set: function (value) {
            setCss(this.name, {
                initialLetter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInitialLetter = function (value) {
        this.initialLetter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "initialValue", {
        get: function () {
            return getCss(this.name, 'initialValue');
        },
        set: function (value) {
            setCss(this.name, {
                initialValue: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInitialValue = function (value) {
        this.initialValue = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "inlineSize", {
        get: function () {
            return getCss(this.name, 'inlineSize');
        },
        set: function (value) {
            setCss(this.name, {
                inlineSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInlineSize = function (value) {
        this.inlineSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "inset", {
        get: function () {
            return getCss(this.name, 'inset');
        },
        set: function (value) {
            setCss(this.name, {
                inset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInset = function (value) {
        this.inset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "insetBlock", {
        get: function () {
            return getCss(this.name, 'insetBlock');
        },
        set: function (value) {
            setCss(this.name, {
                insetBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInsetBlock = function (value) {
        this.insetBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "insetBlockEnd", {
        get: function () {
            return getCss(this.name, 'insetBlockEnd');
        },
        set: function (value) {
            setCss(this.name, {
                insetBlockEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInsetBlockEnd = function (value) {
        this.insetBlockEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "insetBlockStart", {
        get: function () {
            return getCss(this.name, 'insetBlockStart');
        },
        set: function (value) {
            setCss(this.name, {
                insetBlockStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInsetBlockStart = function (value) {
        this.insetBlockStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "insetInline", {
        get: function () {
            return getCss(this.name, 'insetInline');
        },
        set: function (value) {
            setCss(this.name, {
                insetInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInsetInline = function (value) {
        this.insetInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "insetInlineEnd", {
        get: function () {
            return getCss(this.name, 'insetInlineEnd');
        },
        set: function (value) {
            setCss(this.name, {
                insetInlineEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInsetInlineEnd = function (value) {
        this.insetInlineEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "insetInlineStart", {
        get: function () {
            return getCss(this.name, 'insetInlineStart');
        },
        set: function (value) {
            setCss(this.name, {
                insetInlineStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setInsetInlineStart = function (value) {
        this.insetInlineStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "isolation", {
        get: function () {
            return getCss(this.name, 'isolation');
        },
        set: function (value) {
            setCss(this.name, {
                isolation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setIsolation = function (value) {
        this.isolation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "justifyContent", {
        get: function () {
            return getCss(this.name, 'justifyContent');
        },
        set: function (value) {
            setCss(this.name, {
                justifyContent: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setJustifyContent = function (value) {
        this.justifyContent = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "justifyItems", {
        get: function () {
            return getCss(this.name, 'justifyItems');
        },
        set: function (value) {
            setCss(this.name, {
                justifyItems: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setJustifyItems = function (value) {
        this.justifyItems = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "justifySelf", {
        get: function () {
            return getCss(this.name, 'justifySelf');
        },
        set: function (value) {
            setCss(this.name, {
                justifySelf: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setJustifySelf = function (value) {
        this.justifySelf = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "left", {
        get: function () {
            return getCss(this.name, 'left');
        },
        set: function (value) {
            setCss(this.name, {
                left: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setLeft = function (value) {
        this.left = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "letterSpacing", {
        get: function () {
            return getCss(this.name, 'letterSpacing');
        },
        set: function (value) {
            setCss(this.name, {
                letterSpacing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setLetterSpacing = function (value) {
        this.letterSpacing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "lightingColor", {
        get: function () {
            return getCss(this.name, 'lightingColor');
        },
        set: function (value) {
            setCss(this.name, {
                lightingColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setLightingColor = function (value) {
        this.lightingColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "lineBreak", {
        get: function () {
            return getCss(this.name, 'lineBreak');
        },
        set: function (value) {
            setCss(this.name, {
                lineBreak: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setLineBreak = function (value) {
        this.lineBreak = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "lineGapOverride", {
        get: function () {
            return getCss(this.name, 'lineGapOverride');
        },
        set: function (value) {
            setCss(this.name, {
                lineGapOverride: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setLineGapOverride = function (value) {
        this.lineGapOverride = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "lineHeight", {
        get: function () {
            return getCss(this.name, 'lineHeight');
        },
        set: function (value) {
            setCss(this.name, {
                lineHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setLineHeight = function (value) {
        this.lineHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "listStyle", {
        get: function () {
            return getCss(this.name, 'listStyle');
        },
        set: function (value) {
            setCss(this.name, {
                listStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setListStyle = function (value) {
        this.listStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "listStyleImage", {
        get: function () {
            return getCss(this.name, 'listStyleImage');
        },
        set: function (value) {
            setCss(this.name, {
                listStyleImage: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setListStyleImage = function (value) {
        this.listStyleImage = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "listStylePosition", {
        get: function () {
            return getCss(this.name, 'listStylePosition');
        },
        set: function (value) {
            setCss(this.name, {
                listStylePosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setListStylePosition = function (value) {
        this.listStylePosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "listStyleType", {
        get: function () {
            return getCss(this.name, 'listStyleType');
        },
        set: function (value) {
            setCss(this.name, {
                listStyleType: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setListStyleType = function (value) {
        this.listStyleType = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "margin", {
        get: function () {
            return getCss(this.name, 'margin');
        },
        set: function (value) {
            setCss(this.name, {
                margin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMargin = function (value) {
        this.margin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginBlock", {
        get: function () {
            return getCss(this.name, 'marginBlock');
        },
        set: function (value) {
            setCss(this.name, {
                marginBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginBlock = function (value) {
        this.marginBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginBlockEnd", {
        get: function () {
            return getCss(this.name, 'marginBlockEnd');
        },
        set: function (value) {
            setCss(this.name, {
                marginBlockEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginBlockEnd = function (value) {
        this.marginBlockEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginBlockStart", {
        get: function () {
            return getCss(this.name, 'marginBlockStart');
        },
        set: function (value) {
            setCss(this.name, {
                marginBlockStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginBlockStart = function (value) {
        this.marginBlockStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginBottom", {
        get: function () {
            return getCss(this.name, 'marginBottom');
        },
        set: function (value) {
            setCss(this.name, {
                marginBottom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginBottom = function (value) {
        this.marginBottom = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginInline", {
        get: function () {
            return getCss(this.name, 'marginInline');
        },
        set: function (value) {
            setCss(this.name, {
                marginInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginInline = function (value) {
        this.marginInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginInlineEnd", {
        get: function () {
            return getCss(this.name, 'marginInlineEnd');
        },
        set: function (value) {
            setCss(this.name, {
                marginInlineEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginInlineEnd = function (value) {
        this.marginInlineEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginInlineStart", {
        get: function () {
            return getCss(this.name, 'marginInlineStart');
        },
        set: function (value) {
            setCss(this.name, {
                marginInlineStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginInlineStart = function (value) {
        this.marginInlineStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginLeft", {
        get: function () {
            return getCss(this.name, 'marginLeft');
        },
        set: function (value) {
            setCss(this.name, {
                marginLeft: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginLeft = function (value) {
        this.marginLeft = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginRight", {
        get: function () {
            return getCss(this.name, 'marginRight');
        },
        set: function (value) {
            setCss(this.name, {
                marginRight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginRight = function (value) {
        this.marginRight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marginTop", {
        get: function () {
            return getCss(this.name, 'marginTop');
        },
        set: function (value) {
            setCss(this.name, {
                marginTop: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarginTop = function (value) {
        this.marginTop = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "marker", {
        get: function () {
            return getCss(this.name, 'marker');
        },
        set: function (value) {
            setCss(this.name, {
                marker: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarker = function (value) {
        this.marker = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "markerEnd", {
        get: function () {
            return getCss(this.name, 'markerEnd');
        },
        set: function (value) {
            setCss(this.name, {
                markerEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarkerEnd = function (value) {
        this.markerEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "markerMid", {
        get: function () {
            return getCss(this.name, 'markerMid');
        },
        set: function (value) {
            setCss(this.name, {
                markerMid: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarkerMid = function (value) {
        this.markerMid = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "markerStart", {
        get: function () {
            return getCss(this.name, 'markerStart');
        },
        set: function (value) {
            setCss(this.name, {
                markerStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMarkerStart = function (value) {
        this.markerStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "mask", {
        get: function () {
            return getCss(this.name, 'mask');
        },
        set: function (value) {
            setCss(this.name, {
                mask: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMask = function (value) {
        this.mask = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "maskType", {
        get: function () {
            return getCss(this.name, 'maskType');
        },
        set: function (value) {
            setCss(this.name, {
                maskType: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMaskType = function (value) {
        this.maskType = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "mathDepth", {
        get: function () {
            return getCss(this.name, 'mathDepth');
        },
        set: function (value) {
            setCss(this.name, {
                mathDepth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMathDepth = function (value) {
        this.mathDepth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "mathShift", {
        get: function () {
            return getCss(this.name, 'mathShift');
        },
        set: function (value) {
            setCss(this.name, {
                mathShift: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMathShift = function (value) {
        this.mathShift = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "mathStyle", {
        get: function () {
            return getCss(this.name, 'mathStyle');
        },
        set: function (value) {
            setCss(this.name, {
                mathStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMathStyle = function (value) {
        this.mathStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "maxBlockSize", {
        get: function () {
            return getCss(this.name, 'maxBlockSize');
        },
        set: function (value) {
            setCss(this.name, {
                maxBlockSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMaxBlockSize = function (value) {
        this.maxBlockSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "maxHeight", {
        get: function () {
            return getCss(this.name, 'maxHeight');
        },
        set: function (value) {
            setCss(this.name, {
                maxHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMaxHeight = function (value) {
        this.maxHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "maxInlineSize", {
        get: function () {
            return getCss(this.name, 'maxInlineSize');
        },
        set: function (value) {
            setCss(this.name, {
                maxInlineSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMaxInlineSize = function (value) {
        this.maxInlineSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "maxWidth", {
        get: function () {
            return getCss(this.name, 'maxWidth');
        },
        set: function (value) {
            setCss(this.name, {
                maxWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMaxWidth = function (value) {
        this.maxWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "minBlockSize", {
        get: function () {
            return getCss(this.name, 'minBlockSize');
        },
        set: function (value) {
            setCss(this.name, {
                minBlockSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMinBlockSize = function (value) {
        this.minBlockSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "minHeight", {
        get: function () {
            return getCss(this.name, 'minHeight');
        },
        set: function (value) {
            setCss(this.name, {
                minHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMinHeight = function (value) {
        this.minHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "minInlineSize", {
        get: function () {
            return getCss(this.name, 'minInlineSize');
        },
        set: function (value) {
            setCss(this.name, {
                minInlineSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMinInlineSize = function (value) {
        this.minInlineSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "minWidth", {
        get: function () {
            return getCss(this.name, 'minWidth');
        },
        set: function (value) {
            setCss(this.name, {
                minWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMinWidth = function (value) {
        this.minWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "mixBlendMode", {
        get: function () {
            return getCss(this.name, 'mixBlendMode');
        },
        set: function (value) {
            setCss(this.name, {
                mixBlendMode: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setMixBlendMode = function (value) {
        this.mixBlendMode = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "negative", {
        get: function () {
            return getCss(this.name, 'negative');
        },
        set: function (value) {
            setCss(this.name, {
                negative: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setNegative = function (value) {
        this.negative = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "objectFit", {
        get: function () {
            return getCss(this.name, 'objectFit');
        },
        set: function (value) {
            setCss(this.name, {
                objectFit: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setObjectFit = function (value) {
        this.objectFit = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "objectPosition", {
        get: function () {
            return getCss(this.name, 'objectPosition');
        },
        set: function (value) {
            setCss(this.name, {
                objectPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setObjectPosition = function (value) {
        this.objectPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "objectViewBox", {
        get: function () {
            return getCss(this.name, 'objectViewBox');
        },
        set: function (value) {
            setCss(this.name, {
                objectViewBox: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setObjectViewBox = function (value) {
        this.objectViewBox = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "offset", {
        get: function () {
            return getCss(this.name, 'offset');
        },
        set: function (value) {
            setCss(this.name, {
                offset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOffset = function (value) {
        this.offset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "offsetAnchor", {
        get: function () {
            return getCss(this.name, 'offsetAnchor');
        },
        set: function (value) {
            setCss(this.name, {
                offsetAnchor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOffsetAnchor = function (value) {
        this.offsetAnchor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "offsetDistance", {
        get: function () {
            return getCss(this.name, 'offsetDistance');
        },
        set: function (value) {
            setCss(this.name, {
                offsetDistance: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOffsetDistance = function (value) {
        this.offsetDistance = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "offsetPath", {
        get: function () {
            return getCss(this.name, 'offsetPath');
        },
        set: function (value) {
            setCss(this.name, {
                offsetPath: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOffsetPath = function (value) {
        this.offsetPath = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "offsetPosition", {
        get: function () {
            return getCss(this.name, 'offsetPosition');
        },
        set: function (value) {
            setCss(this.name, {
                offsetPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOffsetPosition = function (value) {
        this.offsetPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "offsetRotate", {
        get: function () {
            return getCss(this.name, 'offsetRotate');
        },
        set: function (value) {
            setCss(this.name, {
                offsetRotate: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOffsetRotate = function (value) {
        this.offsetRotate = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "opacity", {
        get: function () {
            return getCss(this.name, 'opacity');
        },
        set: function (value) {
            setCss(this.name, {
                opacity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOpacity = function (value) {
        this.opacity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "order", {
        get: function () {
            return getCss(this.name, 'order');
        },
        set: function (value) {
            setCss(this.name, {
                order: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOrder = function (value) {
        this.order = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "orphans", {
        get: function () {
            return getCss(this.name, 'orphans');
        },
        set: function (value) {
            setCss(this.name, {
                orphans: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOrphans = function (value) {
        this.orphans = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "outline", {
        get: function () {
            return getCss(this.name, 'outline');
        },
        set: function (value) {
            setCss(this.name, {
                outline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOutline = function (value) {
        this.outline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "outlineColor", {
        get: function () {
            return getCss(this.name, 'outlineColor');
        },
        set: function (value) {
            setCss(this.name, {
                outlineColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOutlineColor = function (value) {
        this.outlineColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "outlineOffset", {
        get: function () {
            return getCss(this.name, 'outlineOffset');
        },
        set: function (value) {
            setCss(this.name, {
                outlineOffset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOutlineOffset = function (value) {
        this.outlineOffset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "outlineStyle", {
        get: function () {
            return getCss(this.name, 'outlineStyle');
        },
        set: function (value) {
            setCss(this.name, {
                outlineStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOutlineStyle = function (value) {
        this.outlineStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "outlineWidth", {
        get: function () {
            return getCss(this.name, 'outlineWidth');
        },
        set: function (value) {
            setCss(this.name, {
                outlineWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOutlineWidth = function (value) {
        this.outlineWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overflow", {
        get: function () {
            return getCss(this.name, 'overflow');
        },
        set: function (value) {
            setCss(this.name, {
                overflow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverflow = function (value) {
        this.overflow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overflowAnchor", {
        get: function () {
            return getCss(this.name, 'overflowAnchor');
        },
        set: function (value) {
            setCss(this.name, {
                overflowAnchor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverflowAnchor = function (value) {
        this.overflowAnchor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overflowClipMargin", {
        get: function () {
            return getCss(this.name, 'overflowClipMargin');
        },
        set: function (value) {
            setCss(this.name, {
                overflowClipMargin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverflowClipMargin = function (value) {
        this.overflowClipMargin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overflowWrap", {
        get: function () {
            return getCss(this.name, 'overflowWrap');
        },
        set: function (value) {
            setCss(this.name, {
                overflowWrap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverflowWrap = function (value) {
        this.overflowWrap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overflowX", {
        get: function () {
            return getCss(this.name, 'overflowX');
        },
        set: function (value) {
            setCss(this.name, {
                overflowX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverflowX = function (value) {
        this.overflowX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overflowY", {
        get: function () {
            return getCss(this.name, 'overflowY');
        },
        set: function (value) {
            setCss(this.name, {
                overflowY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverflowY = function (value) {
        this.overflowY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overlay", {
        get: function () {
            return getCss(this.name, 'overlay');
        },
        set: function (value) {
            setCss(this.name, {
                overlay: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverlay = function (value) {
        this.overlay = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overrideColors", {
        get: function () {
            return getCss(this.name, 'overrideColors');
        },
        set: function (value) {
            setCss(this.name, {
                overrideColors: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverrideColors = function (value) {
        this.overrideColors = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overscrollBehavior", {
        get: function () {
            return getCss(this.name, 'overscrollBehavior');
        },
        set: function (value) {
            setCss(this.name, {
                overscrollBehavior: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverscrollBehavior = function (value) {
        this.overscrollBehavior = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overscrollBehaviorBlock", {
        get: function () {
            return getCss(this.name, 'overscrollBehaviorBlock');
        },
        set: function (value) {
            setCss(this.name, {
                overscrollBehaviorBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverscrollBehaviorBlock = function (value) {
        this.overscrollBehaviorBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overscrollBehaviorInline", {
        get: function () {
            return getCss(this.name, 'overscrollBehaviorInline');
        },
        set: function (value) {
            setCss(this.name, {
                overscrollBehaviorInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverscrollBehaviorInline = function (value) {
        this.overscrollBehaviorInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overscrollBehaviorX", {
        get: function () {
            return getCss(this.name, 'overscrollBehaviorX');
        },
        set: function (value) {
            setCss(this.name, {
                overscrollBehaviorX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverscrollBehaviorX = function (value) {
        this.overscrollBehaviorX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "overscrollBehaviorY", {
        get: function () {
            return getCss(this.name, 'overscrollBehaviorY');
        },
        set: function (value) {
            setCss(this.name, {
                overscrollBehaviorY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setOverscrollBehaviorY = function (value) {
        this.overscrollBehaviorY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "pad", {
        get: function () {
            return getCss(this.name, 'pad');
        },
        set: function (value) {
            setCss(this.name, {
                pad: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPad = function (value) {
        this.pad = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "padding", {
        get: function () {
            return getCss(this.name, 'padding');
        },
        set: function (value) {
            setCss(this.name, {
                padding: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPadding = function (value) {
        this.padding = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingBlock", {
        get: function () {
            return getCss(this.name, 'paddingBlock');
        },
        set: function (value) {
            setCss(this.name, {
                paddingBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingBlock = function (value) {
        this.paddingBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingBlockEnd", {
        get: function () {
            return getCss(this.name, 'paddingBlockEnd');
        },
        set: function (value) {
            setCss(this.name, {
                paddingBlockEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingBlockEnd = function (value) {
        this.paddingBlockEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingBlockStart", {
        get: function () {
            return getCss(this.name, 'paddingBlockStart');
        },
        set: function (value) {
            setCss(this.name, {
                paddingBlockStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingBlockStart = function (value) {
        this.paddingBlockStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingBottom", {
        get: function () {
            return getCss(this.name, 'paddingBottom');
        },
        set: function (value) {
            setCss(this.name, {
                paddingBottom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingBottom = function (value) {
        this.paddingBottom = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingInline", {
        get: function () {
            return getCss(this.name, 'paddingInline');
        },
        set: function (value) {
            setCss(this.name, {
                paddingInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingInline = function (value) {
        this.paddingInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingInlineEnd", {
        get: function () {
            return getCss(this.name, 'paddingInlineEnd');
        },
        set: function (value) {
            setCss(this.name, {
                paddingInlineEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingInlineEnd = function (value) {
        this.paddingInlineEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingInlineStart", {
        get: function () {
            return getCss(this.name, 'paddingInlineStart');
        },
        set: function (value) {
            setCss(this.name, {
                paddingInlineStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingInlineStart = function (value) {
        this.paddingInlineStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingLeft", {
        get: function () {
            return getCss(this.name, 'paddingLeft');
        },
        set: function (value) {
            setCss(this.name, {
                paddingLeft: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingLeft = function (value) {
        this.paddingLeft = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingRight", {
        get: function () {
            return getCss(this.name, 'paddingRight');
        },
        set: function (value) {
            setCss(this.name, {
                paddingRight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingRight = function (value) {
        this.paddingRight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paddingTop", {
        get: function () {
            return getCss(this.name, 'paddingTop');
        },
        set: function (value) {
            setCss(this.name, {
                paddingTop: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaddingTop = function (value) {
        this.paddingTop = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "page", {
        get: function () {
            return getCss(this.name, 'page');
        },
        set: function (value) {
            setCss(this.name, {
                page: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPage = function (value) {
        this.page = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "pageBreakAfter", {
        get: function () {
            return getCss(this.name, 'pageBreakAfter');
        },
        set: function (value) {
            setCss(this.name, {
                pageBreakAfter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPageBreakAfter = function (value) {
        this.pageBreakAfter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "pageBreakBefore", {
        get: function () {
            return getCss(this.name, 'pageBreakBefore');
        },
        set: function (value) {
            setCss(this.name, {
                pageBreakBefore: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPageBreakBefore = function (value) {
        this.pageBreakBefore = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "pageBreakInside", {
        get: function () {
            return getCss(this.name, 'pageBreakInside');
        },
        set: function (value) {
            setCss(this.name, {
                pageBreakInside: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPageBreakInside = function (value) {
        this.pageBreakInside = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "pageOrientation", {
        get: function () {
            return getCss(this.name, 'pageOrientation');
        },
        set: function (value) {
            setCss(this.name, {
                pageOrientation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPageOrientation = function (value) {
        this.pageOrientation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "paintOrder", {
        get: function () {
            return getCss(this.name, 'paintOrder');
        },
        set: function (value) {
            setCss(this.name, {
                paintOrder: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPaintOrder = function (value) {
        this.paintOrder = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "perspective", {
        get: function () {
            return getCss(this.name, 'perspective');
        },
        set: function (value) {
            setCss(this.name, {
                perspective: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPerspective = function (value) {
        this.perspective = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "perspectiveOrigin", {
        get: function () {
            return getCss(this.name, 'perspectiveOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                perspectiveOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPerspectiveOrigin = function (value) {
        this.perspectiveOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "placeContent", {
        get: function () {
            return getCss(this.name, 'placeContent');
        },
        set: function (value) {
            setCss(this.name, {
                placeContent: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPlaceContent = function (value) {
        this.placeContent = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "placeItems", {
        get: function () {
            return getCss(this.name, 'placeItems');
        },
        set: function (value) {
            setCss(this.name, {
                placeItems: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPlaceItems = function (value) {
        this.placeItems = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "placeSelf", {
        get: function () {
            return getCss(this.name, 'placeSelf');
        },
        set: function (value) {
            setCss(this.name, {
                placeSelf: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPlaceSelf = function (value) {
        this.placeSelf = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "pointerEvents", {
        get: function () {
            return getCss(this.name, 'pointerEvents');
        },
        set: function (value) {
            setCss(this.name, {
                pointerEvents: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPointerEvents = function (value) {
        this.pointerEvents = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "position", {
        get: function () {
            return getCss(this.name, 'position');
        },
        set: function (value) {
            setCss(this.name, {
                position: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPosition = function (value) {
        this.position = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "prefix", {
        get: function () {
            return getCss(this.name, 'prefix');
        },
        set: function (value) {
            setCss(this.name, {
                prefix: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setPrefix = function (value) {
        this.prefix = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "quotes", {
        get: function () {
            return getCss(this.name, 'quotes');
        },
        set: function (value) {
            setCss(this.name, {
                quotes: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setQuotes = function (value) {
        this.quotes = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "r", {
        get: function () {
            return getCss(this.name, 'r');
        },
        set: function (value) {
            setCss(this.name, {
                r: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setR = function (value) {
        this.r = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "range", {
        get: function () {
            return getCss(this.name, 'range');
        },
        set: function (value) {
            setCss(this.name, {
                range: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRange = function (value) {
        this.range = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "resize", {
        get: function () {
            return getCss(this.name, 'resize');
        },
        set: function (value) {
            setCss(this.name, {
                resize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setResize = function (value) {
        this.resize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "right", {
        get: function () {
            return getCss(this.name, 'right');
        },
        set: function (value) {
            setCss(this.name, {
                right: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRight = function (value) {
        this.right = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "rotate", {
        get: function () {
            return getCss(this.name, 'rotate');
        },
        set: function (value) {
            setCss(this.name, {
                rotate: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRotate = function (value) {
        this.rotate = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "rowGap", {
        get: function () {
            return getCss(this.name, 'rowGap');
        },
        set: function (value) {
            setCss(this.name, {
                rowGap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRowGap = function (value) {
        this.rowGap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "rubyPosition", {
        get: function () {
            return getCss(this.name, 'rubyPosition');
        },
        set: function (value) {
            setCss(this.name, {
                rubyPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRubyPosition = function (value) {
        this.rubyPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "rx", {
        get: function () {
            return getCss(this.name, 'rx');
        },
        set: function (value) {
            setCss(this.name, {
                rx: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRx = function (value) {
        this.rx = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "ry", {
        get: function () {
            return getCss(this.name, 'ry');
        },
        set: function (value) {
            setCss(this.name, {
                ry: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setRy = function (value) {
        this.ry = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scale", {
        get: function () {
            return getCss(this.name, 'scale');
        },
        set: function (value) {
            setCss(this.name, {
                scale: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScale = function (value) {
        this.scale = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollBehavior", {
        get: function () {
            return getCss(this.name, 'scrollBehavior');
        },
        set: function (value) {
            setCss(this.name, {
                scrollBehavior: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollBehavior = function (value) {
        this.scrollBehavior = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMargin", {
        get: function () {
            return getCss(this.name, 'scrollMargin');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMargin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMargin = function (value) {
        this.scrollMargin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginBlock", {
        get: function () {
            return getCss(this.name, 'scrollMarginBlock');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginBlock = function (value) {
        this.scrollMarginBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginBlockEnd", {
        get: function () {
            return getCss(this.name, 'scrollMarginBlockEnd');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginBlockEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginBlockEnd = function (value) {
        this.scrollMarginBlockEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginBlockStart", {
        get: function () {
            return getCss(this.name, 'scrollMarginBlockStart');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginBlockStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginBlockStart = function (value) {
        this.scrollMarginBlockStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginBottom", {
        get: function () {
            return getCss(this.name, 'scrollMarginBottom');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginBottom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginBottom = function (value) {
        this.scrollMarginBottom = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginInline", {
        get: function () {
            return getCss(this.name, 'scrollMarginInline');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginInline = function (value) {
        this.scrollMarginInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginInlineEnd", {
        get: function () {
            return getCss(this.name, 'scrollMarginInlineEnd');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginInlineEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginInlineEnd = function (value) {
        this.scrollMarginInlineEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginInlineStart", {
        get: function () {
            return getCss(this.name, 'scrollMarginInlineStart');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginInlineStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginInlineStart = function (value) {
        this.scrollMarginInlineStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginLeft", {
        get: function () {
            return getCss(this.name, 'scrollMarginLeft');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginLeft: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginLeft = function (value) {
        this.scrollMarginLeft = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginRight", {
        get: function () {
            return getCss(this.name, 'scrollMarginRight');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginRight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginRight = function (value) {
        this.scrollMarginRight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollMarginTop", {
        get: function () {
            return getCss(this.name, 'scrollMarginTop');
        },
        set: function (value) {
            setCss(this.name, {
                scrollMarginTop: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollMarginTop = function (value) {
        this.scrollMarginTop = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPadding", {
        get: function () {
            return getCss(this.name, 'scrollPadding');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPadding: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPadding = function (value) {
        this.scrollPadding = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingBlock", {
        get: function () {
            return getCss(this.name, 'scrollPaddingBlock');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingBlock: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingBlock = function (value) {
        this.scrollPaddingBlock = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingBlockEnd", {
        get: function () {
            return getCss(this.name, 'scrollPaddingBlockEnd');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingBlockEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingBlockEnd = function (value) {
        this.scrollPaddingBlockEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingBlockStart", {
        get: function () {
            return getCss(this.name, 'scrollPaddingBlockStart');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingBlockStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingBlockStart = function (value) {
        this.scrollPaddingBlockStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingBottom", {
        get: function () {
            return getCss(this.name, 'scrollPaddingBottom');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingBottom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingBottom = function (value) {
        this.scrollPaddingBottom = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingInline", {
        get: function () {
            return getCss(this.name, 'scrollPaddingInline');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingInline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingInline = function (value) {
        this.scrollPaddingInline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingInlineEnd", {
        get: function () {
            return getCss(this.name, 'scrollPaddingInlineEnd');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingInlineEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingInlineEnd = function (value) {
        this.scrollPaddingInlineEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingInlineStart", {
        get: function () {
            return getCss(this.name, 'scrollPaddingInlineStart');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingInlineStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingInlineStart = function (value) {
        this.scrollPaddingInlineStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingLeft", {
        get: function () {
            return getCss(this.name, 'scrollPaddingLeft');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingLeft: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingLeft = function (value) {
        this.scrollPaddingLeft = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingRight", {
        get: function () {
            return getCss(this.name, 'scrollPaddingRight');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingRight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingRight = function (value) {
        this.scrollPaddingRight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollPaddingTop", {
        get: function () {
            return getCss(this.name, 'scrollPaddingTop');
        },
        set: function (value) {
            setCss(this.name, {
                scrollPaddingTop: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollPaddingTop = function (value) {
        this.scrollPaddingTop = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollSnapAlign", {
        get: function () {
            return getCss(this.name, 'scrollSnapAlign');
        },
        set: function (value) {
            setCss(this.name, {
                scrollSnapAlign: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollSnapAlign = function (value) {
        this.scrollSnapAlign = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollSnapStop", {
        get: function () {
            return getCss(this.name, 'scrollSnapStop');
        },
        set: function (value) {
            setCss(this.name, {
                scrollSnapStop: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollSnapStop = function (value) {
        this.scrollSnapStop = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollSnapType", {
        get: function () {
            return getCss(this.name, 'scrollSnapType');
        },
        set: function (value) {
            setCss(this.name, {
                scrollSnapType: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollSnapType = function (value) {
        this.scrollSnapType = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollTimeline", {
        get: function () {
            return getCss(this.name, 'scrollTimeline');
        },
        set: function (value) {
            setCss(this.name, {
                scrollTimeline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollTimeline = function (value) {
        this.scrollTimeline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollTimelineAxis", {
        get: function () {
            return getCss(this.name, 'scrollTimelineAxis');
        },
        set: function (value) {
            setCss(this.name, {
                scrollTimelineAxis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollTimelineAxis = function (value) {
        this.scrollTimelineAxis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollTimelineName", {
        get: function () {
            return getCss(this.name, 'scrollTimelineName');
        },
        set: function (value) {
            setCss(this.name, {
                scrollTimelineName: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollTimelineName = function (value) {
        this.scrollTimelineName = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "scrollbarGutter", {
        get: function () {
            return getCss(this.name, 'scrollbarGutter');
        },
        set: function (value) {
            setCss(this.name, {
                scrollbarGutter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setScrollbarGutter = function (value) {
        this.scrollbarGutter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "shapeImageThreshold", {
        get: function () {
            return getCss(this.name, 'shapeImageThreshold');
        },
        set: function (value) {
            setCss(this.name, {
                shapeImageThreshold: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setShapeImageThreshold = function (value) {
        this.shapeImageThreshold = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "shapeMargin", {
        get: function () {
            return getCss(this.name, 'shapeMargin');
        },
        set: function (value) {
            setCss(this.name, {
                shapeMargin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setShapeMargin = function (value) {
        this.shapeMargin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "shapeOutside", {
        get: function () {
            return getCss(this.name, 'shapeOutside');
        },
        set: function (value) {
            setCss(this.name, {
                shapeOutside: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setShapeOutside = function (value) {
        this.shapeOutside = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "shapeRendering", {
        get: function () {
            return getCss(this.name, 'shapeRendering');
        },
        set: function (value) {
            setCss(this.name, {
                shapeRendering: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setShapeRendering = function (value) {
        this.shapeRendering = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "size", {
        get: function () {
            return getCss(this.name, 'size');
        },
        set: function (value) {
            setCss(this.name, {
                size: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSize = function (value) {
        this.size = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "sizeAdjust", {
        get: function () {
            return getCss(this.name, 'sizeAdjust');
        },
        set: function (value) {
            setCss(this.name, {
                sizeAdjust: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSizeAdjust = function (value) {
        this.sizeAdjust = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "speak", {
        get: function () {
            return getCss(this.name, 'speak');
        },
        set: function (value) {
            setCss(this.name, {
                speak: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSpeak = function (value) {
        this.speak = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "speakAs", {
        get: function () {
            return getCss(this.name, 'speakAs');
        },
        set: function (value) {
            setCss(this.name, {
                speakAs: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSpeakAs = function (value) {
        this.speakAs = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "src", {
        get: function () {
            return getCss(this.name, 'src');
        },
        set: function (value) {
            setCss(this.name, {
                src: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSrc = function (value) {
        this.src = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "stopColor", {
        get: function () {
            return getCss(this.name, 'stopColor');
        },
        set: function (value) {
            setCss(this.name, {
                stopColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStopColor = function (value) {
        this.stopColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "stopOpacity", {
        get: function () {
            return getCss(this.name, 'stopOpacity');
        },
        set: function (value) {
            setCss(this.name, {
                stopOpacity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStopOpacity = function (value) {
        this.stopOpacity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "stroke", {
        get: function () {
            return getCss(this.name, 'stroke');
        },
        set: function (value) {
            setCss(this.name, {
                stroke: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStroke = function (value) {
        this.stroke = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeDasharray", {
        get: function () {
            return getCss(this.name, 'strokeDasharray');
        },
        set: function (value) {
            setCss(this.name, {
                strokeDasharray: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeDasharray = function (value) {
        this.strokeDasharray = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeDashoffset", {
        get: function () {
            return getCss(this.name, 'strokeDashoffset');
        },
        set: function (value) {
            setCss(this.name, {
                strokeDashoffset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeDashoffset = function (value) {
        this.strokeDashoffset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeLinecap", {
        get: function () {
            return getCss(this.name, 'strokeLinecap');
        },
        set: function (value) {
            setCss(this.name, {
                strokeLinecap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeLinecap = function (value) {
        this.strokeLinecap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeLinejoin", {
        get: function () {
            return getCss(this.name, 'strokeLinejoin');
        },
        set: function (value) {
            setCss(this.name, {
                strokeLinejoin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeLinejoin = function (value) {
        this.strokeLinejoin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeMiterlimit", {
        get: function () {
            return getCss(this.name, 'strokeMiterlimit');
        },
        set: function (value) {
            setCss(this.name, {
                strokeMiterlimit: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeMiterlimit = function (value) {
        this.strokeMiterlimit = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeOpacity", {
        get: function () {
            return getCss(this.name, 'strokeOpacity');
        },
        set: function (value) {
            setCss(this.name, {
                strokeOpacity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeOpacity = function (value) {
        this.strokeOpacity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "strokeWidth", {
        get: function () {
            return getCss(this.name, 'strokeWidth');
        },
        set: function (value) {
            setCss(this.name, {
                strokeWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setStrokeWidth = function (value) {
        this.strokeWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "suffix", {
        get: function () {
            return getCss(this.name, 'suffix');
        },
        set: function (value) {
            setCss(this.name, {
                suffix: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSuffix = function (value) {
        this.suffix = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "symbols", {
        get: function () {
            return getCss(this.name, 'symbols');
        },
        set: function (value) {
            setCss(this.name, {
                symbols: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSymbols = function (value) {
        this.symbols = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "syntax", {
        get: function () {
            return getCss(this.name, 'syntax');
        },
        set: function (value) {
            setCss(this.name, {
                syntax: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSyntax = function (value) {
        this.syntax = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "system", {
        get: function () {
            return getCss(this.name, 'system');
        },
        set: function (value) {
            setCss(this.name, {
                system: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setSystem = function (value) {
        this.system = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "tabSize", {
        get: function () {
            return getCss(this.name, 'tabSize');
        },
        set: function (value) {
            setCss(this.name, {
                tabSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTabSize = function (value) {
        this.tabSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "tableLayout", {
        get: function () {
            return getCss(this.name, 'tableLayout');
        },
        set: function (value) {
            setCss(this.name, {
                tableLayout: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTableLayout = function (value) {
        this.tableLayout = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textAlign", {
        get: function () {
            return getCss(this.name, 'textAlign');
        },
        set: function (value) {
            setCss(this.name, {
                textAlign: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextAlign = function (value) {
        this.textAlign = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textAlignLast", {
        get: function () {
            return getCss(this.name, 'textAlignLast');
        },
        set: function (value) {
            setCss(this.name, {
                textAlignLast: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextAlignLast = function (value) {
        this.textAlignLast = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textAnchor", {
        get: function () {
            return getCss(this.name, 'textAnchor');
        },
        set: function (value) {
            setCss(this.name, {
                textAnchor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextAnchor = function (value) {
        this.textAnchor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textCombineUpright", {
        get: function () {
            return getCss(this.name, 'textCombineUpright');
        },
        set: function (value) {
            setCss(this.name, {
                textCombineUpright: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextCombineUpright = function (value) {
        this.textCombineUpright = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textDecoration", {
        get: function () {
            return getCss(this.name, 'textDecoration');
        },
        set: function (value) {
            setCss(this.name, {
                textDecoration: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextDecoration = function (value) {
        this.textDecoration = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textDecorationColor", {
        get: function () {
            return getCss(this.name, 'textDecorationColor');
        },
        set: function (value) {
            setCss(this.name, {
                textDecorationColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextDecorationColor = function (value) {
        this.textDecorationColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textDecorationLine", {
        get: function () {
            return getCss(this.name, 'textDecorationLine');
        },
        set: function (value) {
            setCss(this.name, {
                textDecorationLine: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextDecorationLine = function (value) {
        this.textDecorationLine = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textDecorationSkipInk", {
        get: function () {
            return getCss(this.name, 'textDecorationSkipInk');
        },
        set: function (value) {
            setCss(this.name, {
                textDecorationSkipInk: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextDecorationSkipInk = function (value) {
        this.textDecorationSkipInk = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textDecorationStyle", {
        get: function () {
            return getCss(this.name, 'textDecorationStyle');
        },
        set: function (value) {
            setCss(this.name, {
                textDecorationStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextDecorationStyle = function (value) {
        this.textDecorationStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textDecorationThickness", {
        get: function () {
            return getCss(this.name, 'textDecorationThickness');
        },
        set: function (value) {
            setCss(this.name, {
                textDecorationThickness: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextDecorationThickness = function (value) {
        this.textDecorationThickness = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textEmphasis", {
        get: function () {
            return getCss(this.name, 'textEmphasis');
        },
        set: function (value) {
            setCss(this.name, {
                textEmphasis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextEmphasis = function (value) {
        this.textEmphasis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textEmphasisColor", {
        get: function () {
            return getCss(this.name, 'textEmphasisColor');
        },
        set: function (value) {
            setCss(this.name, {
                textEmphasisColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextEmphasisColor = function (value) {
        this.textEmphasisColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textEmphasisPosition", {
        get: function () {
            return getCss(this.name, 'textEmphasisPosition');
        },
        set: function (value) {
            setCss(this.name, {
                textEmphasisPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextEmphasisPosition = function (value) {
        this.textEmphasisPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textEmphasisStyle", {
        get: function () {
            return getCss(this.name, 'textEmphasisStyle');
        },
        set: function (value) {
            setCss(this.name, {
                textEmphasisStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextEmphasisStyle = function (value) {
        this.textEmphasisStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textIndent", {
        get: function () {
            return getCss(this.name, 'textIndent');
        },
        set: function (value) {
            setCss(this.name, {
                textIndent: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextIndent = function (value) {
        this.textIndent = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textOrientation", {
        get: function () {
            return getCss(this.name, 'textOrientation');
        },
        set: function (value) {
            setCss(this.name, {
                textOrientation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextOrientation = function (value) {
        this.textOrientation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textOverflow", {
        get: function () {
            return getCss(this.name, 'textOverflow');
        },
        set: function (value) {
            setCss(this.name, {
                textOverflow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextOverflow = function (value) {
        this.textOverflow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textRendering", {
        get: function () {
            return getCss(this.name, 'textRendering');
        },
        set: function (value) {
            setCss(this.name, {
                textRendering: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextRendering = function (value) {
        this.textRendering = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textShadow", {
        get: function () {
            return getCss(this.name, 'textShadow');
        },
        set: function (value) {
            setCss(this.name, {
                textShadow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextShadow = function (value) {
        this.textShadow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textSizeAdjust", {
        get: function () {
            return getCss(this.name, 'textSizeAdjust');
        },
        set: function (value) {
            setCss(this.name, {
                textSizeAdjust: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextSizeAdjust = function (value) {
        this.textSizeAdjust = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textTransform", {
        get: function () {
            return getCss(this.name, 'textTransform');
        },
        set: function (value) {
            setCss(this.name, {
                textTransform: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextTransform = function (value) {
        this.textTransform = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textUnderlineOffset", {
        get: function () {
            return getCss(this.name, 'textUnderlineOffset');
        },
        set: function (value) {
            setCss(this.name, {
                textUnderlineOffset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextUnderlineOffset = function (value) {
        this.textUnderlineOffset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textUnderlinePosition", {
        get: function () {
            return getCss(this.name, 'textUnderlinePosition');
        },
        set: function (value) {
            setCss(this.name, {
                textUnderlinePosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextUnderlinePosition = function (value) {
        this.textUnderlinePosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "textWrap", {
        get: function () {
            return getCss(this.name, 'textWrap');
        },
        set: function (value) {
            setCss(this.name, {
                textWrap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTextWrap = function (value) {
        this.textWrap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "timelineScope", {
        get: function () {
            return getCss(this.name, 'timelineScope');
        },
        set: function (value) {
            setCss(this.name, {
                timelineScope: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTimelineScope = function (value) {
        this.timelineScope = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "top", {
        get: function () {
            return getCss(this.name, 'top');
        },
        set: function (value) {
            setCss(this.name, {
                top: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTop = function (value) {
        this.top = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "touchAction", {
        get: function () {
            return getCss(this.name, 'touchAction');
        },
        set: function (value) {
            setCss(this.name, {
                touchAction: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTouchAction = function (value) {
        this.touchAction = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transform", {
        get: function () {
            return getCss(this.name, 'transform');
        },
        set: function (value) {
            setCss(this.name, {
                transform: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransform = function (value) {
        this.transform = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transformBox", {
        get: function () {
            return getCss(this.name, 'transformBox');
        },
        set: function (value) {
            setCss(this.name, {
                transformBox: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransformBox = function (value) {
        this.transformBox = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transformOrigin", {
        get: function () {
            return getCss(this.name, 'transformOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                transformOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransformOrigin = function (value) {
        this.transformOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transformStyle", {
        get: function () {
            return getCss(this.name, 'transformStyle');
        },
        set: function (value) {
            setCss(this.name, {
                transformStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransformStyle = function (value) {
        this.transformStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transition", {
        get: function () {
            return getCss(this.name, 'transition');
        },
        set: function (value) {
            setCss(this.name, {
                transition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransition = function (value) {
        this.transition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transitionBehavior", {
        get: function () {
            return getCss(this.name, 'transitionBehavior');
        },
        set: function (value) {
            setCss(this.name, {
                transitionBehavior: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransitionBehavior = function (value) {
        this.transitionBehavior = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transitionDelay", {
        get: function () {
            return getCss(this.name, 'transitionDelay');
        },
        set: function (value) {
            setCss(this.name, {
                transitionDelay: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransitionDelay = function (value) {
        this.transitionDelay = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transitionDuration", {
        get: function () {
            return getCss(this.name, 'transitionDuration');
        },
        set: function (value) {
            setCss(this.name, {
                transitionDuration: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransitionDuration = function (value) {
        this.transitionDuration = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transitionProperty", {
        get: function () {
            return getCss(this.name, 'transitionProperty');
        },
        set: function (value) {
            setCss(this.name, {
                transitionProperty: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransitionProperty = function (value) {
        this.transitionProperty = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "transitionTimingFunction", {
        get: function () {
            return getCss(this.name, 'transitionTimingFunction');
        },
        set: function (value) {
            setCss(this.name, {
                transitionTimingFunction: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTransitionTimingFunction = function (value) {
        this.transitionTimingFunction = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "translate", {
        get: function () {
            return getCss(this.name, 'translate');
        },
        set: function (value) {
            setCss(this.name, {
                translate: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setTranslate = function (value) {
        this.translate = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "unicodeBidi", {
        get: function () {
            return getCss(this.name, 'unicodeBidi');
        },
        set: function (value) {
            setCss(this.name, {
                unicodeBidi: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setUnicodeBidi = function (value) {
        this.unicodeBidi = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "unicodeRange", {
        get: function () {
            return getCss(this.name, 'unicodeRange');
        },
        set: function (value) {
            setCss(this.name, {
                unicodeRange: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setUnicodeRange = function (value) {
        this.unicodeRange = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "userSelect", {
        get: function () {
            return getCss(this.name, 'userSelect');
        },
        set: function (value) {
            setCss(this.name, {
                userSelect: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setUserSelect = function (value) {
        this.userSelect = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "vectorEffect", {
        get: function () {
            return getCss(this.name, 'vectorEffect');
        },
        set: function (value) {
            setCss(this.name, {
                vectorEffect: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setVectorEffect = function (value) {
        this.vectorEffect = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "verticalAlign", {
        get: function () {
            return getCss(this.name, 'verticalAlign');
        },
        set: function (value) {
            setCss(this.name, {
                verticalAlign: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setVerticalAlign = function (value) {
        this.verticalAlign = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "viewTimeline", {
        get: function () {
            return getCss(this.name, 'viewTimeline');
        },
        set: function (value) {
            setCss(this.name, {
                viewTimeline: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setViewTimeline = function (value) {
        this.viewTimeline = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "viewTimelineAxis", {
        get: function () {
            return getCss(this.name, 'viewTimelineAxis');
        },
        set: function (value) {
            setCss(this.name, {
                viewTimelineAxis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setViewTimelineAxis = function (value) {
        this.viewTimelineAxis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "viewTimelineInset", {
        get: function () {
            return getCss(this.name, 'viewTimelineInset');
        },
        set: function (value) {
            setCss(this.name, {
                viewTimelineInset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setViewTimelineInset = function (value) {
        this.viewTimelineInset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "viewTimelineName", {
        get: function () {
            return getCss(this.name, 'viewTimelineName');
        },
        set: function (value) {
            setCss(this.name, {
                viewTimelineName: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setViewTimelineName = function (value) {
        this.viewTimelineName = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "viewTransitionName", {
        get: function () {
            return getCss(this.name, 'viewTransitionName');
        },
        set: function (value) {
            setCss(this.name, {
                viewTransitionName: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setViewTransitionName = function (value) {
        this.viewTransitionName = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "visibility", {
        get: function () {
            return getCss(this.name, 'visibility');
        },
        set: function (value) {
            setCss(this.name, {
                visibility: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setVisibility = function (value) {
        this.visibility = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAlignContent", {
        get: function () {
            return getCss(this.name, 'webkitAlignContent');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAlignContent: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAlignContent = function (value) {
        this.webkitAlignContent = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAlignItems", {
        get: function () {
            return getCss(this.name, 'webkitAlignItems');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAlignItems: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAlignItems = function (value) {
        this.webkitAlignItems = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAlignSelf", {
        get: function () {
            return getCss(this.name, 'webkitAlignSelf');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAlignSelf: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAlignSelf = function (value) {
        this.webkitAlignSelf = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimation", {
        get: function () {
            return getCss(this.name, 'webkitAnimation');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimation = function (value) {
        this.webkitAnimation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationDelay", {
        get: function () {
            return getCss(this.name, 'webkitAnimationDelay');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationDelay: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationDelay = function (value) {
        this.webkitAnimationDelay = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationDirection", {
        get: function () {
            return getCss(this.name, 'webkitAnimationDirection');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationDirection: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationDirection = function (value) {
        this.webkitAnimationDirection = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationDuration", {
        get: function () {
            return getCss(this.name, 'webkitAnimationDuration');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationDuration: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationDuration = function (value) {
        this.webkitAnimationDuration = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationFillMode", {
        get: function () {
            return getCss(this.name, 'webkitAnimationFillMode');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationFillMode: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationFillMode = function (value) {
        this.webkitAnimationFillMode = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationIterationCount", {
        get: function () {
            return getCss(this.name, 'webkitAnimationIterationCount');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationIterationCount: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationIterationCount = function (value) {
        this.webkitAnimationIterationCount = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationName", {
        get: function () {
            return getCss(this.name, 'webkitAnimationName');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationName: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationName = function (value) {
        this.webkitAnimationName = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationPlayState", {
        get: function () {
            return getCss(this.name, 'webkitAnimationPlayState');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationPlayState: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationPlayState = function (value) {
        this.webkitAnimationPlayState = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAnimationTimingFunction", {
        get: function () {
            return getCss(this.name, 'webkitAnimationTimingFunction');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAnimationTimingFunction: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAnimationTimingFunction = function (value) {
        this.webkitAnimationTimingFunction = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAppRegion", {
        get: function () {
            return getCss(this.name, 'webkitAppRegion');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAppRegion: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAppRegion = function (value) {
        this.webkitAppRegion = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitAppearance", {
        get: function () {
            return getCss(this.name, 'webkitAppearance');
        },
        set: function (value) {
            setCss(this.name, {
                webkitAppearance: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitAppearance = function (value) {
        this.webkitAppearance = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBackfaceVisibility", {
        get: function () {
            return getCss(this.name, 'webkitBackfaceVisibility');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBackfaceVisibility: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBackfaceVisibility = function (value) {
        this.webkitBackfaceVisibility = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBackgroundClip", {
        get: function () {
            return getCss(this.name, 'webkitBackgroundClip');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBackgroundClip: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBackgroundClip = function (value) {
        this.webkitBackgroundClip = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBackgroundOrigin", {
        get: function () {
            return getCss(this.name, 'webkitBackgroundOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBackgroundOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBackgroundOrigin = function (value) {
        this.webkitBackgroundOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBackgroundSize", {
        get: function () {
            return getCss(this.name, 'webkitBackgroundSize');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBackgroundSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBackgroundSize = function (value) {
        this.webkitBackgroundSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderAfter", {
        get: function () {
            return getCss(this.name, 'webkitBorderAfter');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderAfter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderAfter = function (value) {
        this.webkitBorderAfter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderAfterColor", {
        get: function () {
            return getCss(this.name, 'webkitBorderAfterColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderAfterColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderAfterColor = function (value) {
        this.webkitBorderAfterColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderAfterStyle", {
        get: function () {
            return getCss(this.name, 'webkitBorderAfterStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderAfterStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderAfterStyle = function (value) {
        this.webkitBorderAfterStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderAfterWidth", {
        get: function () {
            return getCss(this.name, 'webkitBorderAfterWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderAfterWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderAfterWidth = function (value) {
        this.webkitBorderAfterWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderBefore", {
        get: function () {
            return getCss(this.name, 'webkitBorderBefore');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderBefore: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderBefore = function (value) {
        this.webkitBorderBefore = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderBeforeColor", {
        get: function () {
            return getCss(this.name, 'webkitBorderBeforeColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderBeforeColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderBeforeColor = function (value) {
        this.webkitBorderBeforeColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderBeforeStyle", {
        get: function () {
            return getCss(this.name, 'webkitBorderBeforeStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderBeforeStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderBeforeStyle = function (value) {
        this.webkitBorderBeforeStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderBeforeWidth", {
        get: function () {
            return getCss(this.name, 'webkitBorderBeforeWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderBeforeWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderBeforeWidth = function (value) {
        this.webkitBorderBeforeWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderBottomLeftRadius", {
        get: function () {
            return getCss(this.name, 'webkitBorderBottomLeftRadius');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderBottomLeftRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderBottomLeftRadius = function (value) {
        this.webkitBorderBottomLeftRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderBottomRightRadius", {
        get: function () {
            return getCss(this.name, 'webkitBorderBottomRightRadius');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderBottomRightRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderBottomRightRadius = function (value) {
        this.webkitBorderBottomRightRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderEnd", {
        get: function () {
            return getCss(this.name, 'webkitBorderEnd');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderEnd = function (value) {
        this.webkitBorderEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderEndColor", {
        get: function () {
            return getCss(this.name, 'webkitBorderEndColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderEndColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderEndColor = function (value) {
        this.webkitBorderEndColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderEndStyle", {
        get: function () {
            return getCss(this.name, 'webkitBorderEndStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderEndStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderEndStyle = function (value) {
        this.webkitBorderEndStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderEndWidth", {
        get: function () {
            return getCss(this.name, 'webkitBorderEndWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderEndWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderEndWidth = function (value) {
        this.webkitBorderEndWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderHorizontalSpacing", {
        get: function () {
            return getCss(this.name, 'webkitBorderHorizontalSpacing');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderHorizontalSpacing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderHorizontalSpacing = function (value) {
        this.webkitBorderHorizontalSpacing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderImage", {
        get: function () {
            return getCss(this.name, 'webkitBorderImage');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderImage: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderImage = function (value) {
        this.webkitBorderImage = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderRadius", {
        get: function () {
            return getCss(this.name, 'webkitBorderRadius');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderRadius = function (value) {
        this.webkitBorderRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderStart", {
        get: function () {
            return getCss(this.name, 'webkitBorderStart');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderStart = function (value) {
        this.webkitBorderStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderStartColor", {
        get: function () {
            return getCss(this.name, 'webkitBorderStartColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderStartColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderStartColor = function (value) {
        this.webkitBorderStartColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderStartStyle", {
        get: function () {
            return getCss(this.name, 'webkitBorderStartStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderStartStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderStartStyle = function (value) {
        this.webkitBorderStartStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderStartWidth", {
        get: function () {
            return getCss(this.name, 'webkitBorderStartWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderStartWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderStartWidth = function (value) {
        this.webkitBorderStartWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderTopLeftRadius", {
        get: function () {
            return getCss(this.name, 'webkitBorderTopLeftRadius');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderTopLeftRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderTopLeftRadius = function (value) {
        this.webkitBorderTopLeftRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderTopRightRadius", {
        get: function () {
            return getCss(this.name, 'webkitBorderTopRightRadius');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderTopRightRadius: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderTopRightRadius = function (value) {
        this.webkitBorderTopRightRadius = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBorderVerticalSpacing", {
        get: function () {
            return getCss(this.name, 'webkitBorderVerticalSpacing');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBorderVerticalSpacing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBorderVerticalSpacing = function (value) {
        this.webkitBorderVerticalSpacing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxAlign", {
        get: function () {
            return getCss(this.name, 'webkitBoxAlign');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxAlign: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxAlign = function (value) {
        this.webkitBoxAlign = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxDecorationBreak", {
        get: function () {
            return getCss(this.name, 'webkitBoxDecorationBreak');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxDecorationBreak: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxDecorationBreak = function (value) {
        this.webkitBoxDecorationBreak = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxDirection", {
        get: function () {
            return getCss(this.name, 'webkitBoxDirection');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxDirection: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxDirection = function (value) {
        this.webkitBoxDirection = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxFlex", {
        get: function () {
            return getCss(this.name, 'webkitBoxFlex');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxFlex: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxFlex = function (value) {
        this.webkitBoxFlex = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxOrdinalGroup", {
        get: function () {
            return getCss(this.name, 'webkitBoxOrdinalGroup');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxOrdinalGroup: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxOrdinalGroup = function (value) {
        this.webkitBoxOrdinalGroup = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxOrient", {
        get: function () {
            return getCss(this.name, 'webkitBoxOrient');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxOrient: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxOrient = function (value) {
        this.webkitBoxOrient = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxPack", {
        get: function () {
            return getCss(this.name, 'webkitBoxPack');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxPack: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxPack = function (value) {
        this.webkitBoxPack = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxReflect", {
        get: function () {
            return getCss(this.name, 'webkitBoxReflect');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxReflect: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxReflect = function (value) {
        this.webkitBoxReflect = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxShadow", {
        get: function () {
            return getCss(this.name, 'webkitBoxShadow');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxShadow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxShadow = function (value) {
        this.webkitBoxShadow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitBoxSizing", {
        get: function () {
            return getCss(this.name, 'webkitBoxSizing');
        },
        set: function (value) {
            setCss(this.name, {
                webkitBoxSizing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitBoxSizing = function (value) {
        this.webkitBoxSizing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitClipPath", {
        get: function () {
            return getCss(this.name, 'webkitClipPath');
        },
        set: function (value) {
            setCss(this.name, {
                webkitClipPath: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitClipPath = function (value) {
        this.webkitClipPath = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnBreakAfter", {
        get: function () {
            return getCss(this.name, 'webkitColumnBreakAfter');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnBreakAfter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnBreakAfter = function (value) {
        this.webkitColumnBreakAfter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnBreakBefore", {
        get: function () {
            return getCss(this.name, 'webkitColumnBreakBefore');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnBreakBefore: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnBreakBefore = function (value) {
        this.webkitColumnBreakBefore = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnBreakInside", {
        get: function () {
            return getCss(this.name, 'webkitColumnBreakInside');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnBreakInside: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnBreakInside = function (value) {
        this.webkitColumnBreakInside = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnCount", {
        get: function () {
            return getCss(this.name, 'webkitColumnCount');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnCount: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnCount = function (value) {
        this.webkitColumnCount = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnGap", {
        get: function () {
            return getCss(this.name, 'webkitColumnGap');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnGap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnGap = function (value) {
        this.webkitColumnGap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnRule", {
        get: function () {
            return getCss(this.name, 'webkitColumnRule');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnRule: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnRule = function (value) {
        this.webkitColumnRule = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnRuleColor", {
        get: function () {
            return getCss(this.name, 'webkitColumnRuleColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnRuleColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnRuleColor = function (value) {
        this.webkitColumnRuleColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnRuleStyle", {
        get: function () {
            return getCss(this.name, 'webkitColumnRuleStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnRuleStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnRuleStyle = function (value) {
        this.webkitColumnRuleStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnRuleWidth", {
        get: function () {
            return getCss(this.name, 'webkitColumnRuleWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnRuleWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnRuleWidth = function (value) {
        this.webkitColumnRuleWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnSpan", {
        get: function () {
            return getCss(this.name, 'webkitColumnSpan');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnSpan: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnSpan = function (value) {
        this.webkitColumnSpan = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumnWidth", {
        get: function () {
            return getCss(this.name, 'webkitColumnWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumnWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumnWidth = function (value) {
        this.webkitColumnWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitColumns", {
        get: function () {
            return getCss(this.name, 'webkitColumns');
        },
        set: function (value) {
            setCss(this.name, {
                webkitColumns: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitColumns = function (value) {
        this.webkitColumns = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFilter", {
        get: function () {
            return getCss(this.name, 'webkitFilter');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFilter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFilter = function (value) {
        this.webkitFilter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlex", {
        get: function () {
            return getCss(this.name, 'webkitFlex');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlex: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlex = function (value) {
        this.webkitFlex = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlexBasis", {
        get: function () {
            return getCss(this.name, 'webkitFlexBasis');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlexBasis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlexBasis = function (value) {
        this.webkitFlexBasis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlexDirection", {
        get: function () {
            return getCss(this.name, 'webkitFlexDirection');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlexDirection: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlexDirection = function (value) {
        this.webkitFlexDirection = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlexFlow", {
        get: function () {
            return getCss(this.name, 'webkitFlexFlow');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlexFlow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlexFlow = function (value) {
        this.webkitFlexFlow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlexGrow", {
        get: function () {
            return getCss(this.name, 'webkitFlexGrow');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlexGrow: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlexGrow = function (value) {
        this.webkitFlexGrow = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlexShrink", {
        get: function () {
            return getCss(this.name, 'webkitFlexShrink');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlexShrink: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlexShrink = function (value) {
        this.webkitFlexShrink = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFlexWrap", {
        get: function () {
            return getCss(this.name, 'webkitFlexWrap');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFlexWrap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFlexWrap = function (value) {
        this.webkitFlexWrap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFontFeatureSettings", {
        get: function () {
            return getCss(this.name, 'webkitFontFeatureSettings');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFontFeatureSettings: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFontFeatureSettings = function (value) {
        this.webkitFontFeatureSettings = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitFontSmoothing", {
        get: function () {
            return getCss(this.name, 'webkitFontSmoothing');
        },
        set: function (value) {
            setCss(this.name, {
                webkitFontSmoothing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitFontSmoothing = function (value) {
        this.webkitFontSmoothing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitHyphenateCharacter", {
        get: function () {
            return getCss(this.name, 'webkitHyphenateCharacter');
        },
        set: function (value) {
            setCss(this.name, {
                webkitHyphenateCharacter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitHyphenateCharacter = function (value) {
        this.webkitHyphenateCharacter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitJustifyContent", {
        get: function () {
            return getCss(this.name, 'webkitJustifyContent');
        },
        set: function (value) {
            setCss(this.name, {
                webkitJustifyContent: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitJustifyContent = function (value) {
        this.webkitJustifyContent = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitLineBreak", {
        get: function () {
            return getCss(this.name, 'webkitLineBreak');
        },
        set: function (value) {
            setCss(this.name, {
                webkitLineBreak: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitLineBreak = function (value) {
        this.webkitLineBreak = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitLineClamp", {
        get: function () {
            return getCss(this.name, 'webkitLineClamp');
        },
        set: function (value) {
            setCss(this.name, {
                webkitLineClamp: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitLineClamp = function (value) {
        this.webkitLineClamp = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitLocale", {
        get: function () {
            return getCss(this.name, 'webkitLocale');
        },
        set: function (value) {
            setCss(this.name, {
                webkitLocale: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitLocale = function (value) {
        this.webkitLocale = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitLogicalHeight", {
        get: function () {
            return getCss(this.name, 'webkitLogicalHeight');
        },
        set: function (value) {
            setCss(this.name, {
                webkitLogicalHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitLogicalHeight = function (value) {
        this.webkitLogicalHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitLogicalWidth", {
        get: function () {
            return getCss(this.name, 'webkitLogicalWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitLogicalWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitLogicalWidth = function (value) {
        this.webkitLogicalWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMarginAfter", {
        get: function () {
            return getCss(this.name, 'webkitMarginAfter');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMarginAfter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMarginAfter = function (value) {
        this.webkitMarginAfter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMarginBefore", {
        get: function () {
            return getCss(this.name, 'webkitMarginBefore');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMarginBefore: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMarginBefore = function (value) {
        this.webkitMarginBefore = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMarginEnd", {
        get: function () {
            return getCss(this.name, 'webkitMarginEnd');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMarginEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMarginEnd = function (value) {
        this.webkitMarginEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMarginStart", {
        get: function () {
            return getCss(this.name, 'webkitMarginStart');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMarginStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMarginStart = function (value) {
        this.webkitMarginStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMask", {
        get: function () {
            return getCss(this.name, 'webkitMask');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMask: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMask = function (value) {
        this.webkitMask = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskBoxImage", {
        get: function () {
            return getCss(this.name, 'webkitMaskBoxImage');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskBoxImage: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskBoxImage = function (value) {
        this.webkitMaskBoxImage = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskBoxImageOutset", {
        get: function () {
            return getCss(this.name, 'webkitMaskBoxImageOutset');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskBoxImageOutset: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskBoxImageOutset = function (value) {
        this.webkitMaskBoxImageOutset = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskBoxImageRepeat", {
        get: function () {
            return getCss(this.name, 'webkitMaskBoxImageRepeat');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskBoxImageRepeat: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskBoxImageRepeat = function (value) {
        this.webkitMaskBoxImageRepeat = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskBoxImageSlice", {
        get: function () {
            return getCss(this.name, 'webkitMaskBoxImageSlice');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskBoxImageSlice: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskBoxImageSlice = function (value) {
        this.webkitMaskBoxImageSlice = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskBoxImageSource", {
        get: function () {
            return getCss(this.name, 'webkitMaskBoxImageSource');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskBoxImageSource: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskBoxImageSource = function (value) {
        this.webkitMaskBoxImageSource = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskBoxImageWidth", {
        get: function () {
            return getCss(this.name, 'webkitMaskBoxImageWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskBoxImageWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskBoxImageWidth = function (value) {
        this.webkitMaskBoxImageWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskClip", {
        get: function () {
            return getCss(this.name, 'webkitMaskClip');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskClip: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskClip = function (value) {
        this.webkitMaskClip = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskComposite", {
        get: function () {
            return getCss(this.name, 'webkitMaskComposite');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskComposite: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskComposite = function (value) {
        this.webkitMaskComposite = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskImage", {
        get: function () {
            return getCss(this.name, 'webkitMaskImage');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskImage: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskImage = function (value) {
        this.webkitMaskImage = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskOrigin", {
        get: function () {
            return getCss(this.name, 'webkitMaskOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskOrigin = function (value) {
        this.webkitMaskOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskPosition", {
        get: function () {
            return getCss(this.name, 'webkitMaskPosition');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskPosition = function (value) {
        this.webkitMaskPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskPositionX", {
        get: function () {
            return getCss(this.name, 'webkitMaskPositionX');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskPositionX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskPositionX = function (value) {
        this.webkitMaskPositionX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskPositionY", {
        get: function () {
            return getCss(this.name, 'webkitMaskPositionY');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskPositionY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskPositionY = function (value) {
        this.webkitMaskPositionY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskRepeat", {
        get: function () {
            return getCss(this.name, 'webkitMaskRepeat');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskRepeat: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskRepeat = function (value) {
        this.webkitMaskRepeat = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskRepeatX", {
        get: function () {
            return getCss(this.name, 'webkitMaskRepeatX');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskRepeatX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskRepeatX = function (value) {
        this.webkitMaskRepeatX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskRepeatY", {
        get: function () {
            return getCss(this.name, 'webkitMaskRepeatY');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskRepeatY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskRepeatY = function (value) {
        this.webkitMaskRepeatY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaskSize", {
        get: function () {
            return getCss(this.name, 'webkitMaskSize');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaskSize: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaskSize = function (value) {
        this.webkitMaskSize = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaxLogicalHeight", {
        get: function () {
            return getCss(this.name, 'webkitMaxLogicalHeight');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaxLogicalHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaxLogicalHeight = function (value) {
        this.webkitMaxLogicalHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMaxLogicalWidth", {
        get: function () {
            return getCss(this.name, 'webkitMaxLogicalWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMaxLogicalWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMaxLogicalWidth = function (value) {
        this.webkitMaxLogicalWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMinLogicalHeight", {
        get: function () {
            return getCss(this.name, 'webkitMinLogicalHeight');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMinLogicalHeight: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMinLogicalHeight = function (value) {
        this.webkitMinLogicalHeight = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitMinLogicalWidth", {
        get: function () {
            return getCss(this.name, 'webkitMinLogicalWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitMinLogicalWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitMinLogicalWidth = function (value) {
        this.webkitMinLogicalWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitOpacity", {
        get: function () {
            return getCss(this.name, 'webkitOpacity');
        },
        set: function (value) {
            setCss(this.name, {
                webkitOpacity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitOpacity = function (value) {
        this.webkitOpacity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitOrder", {
        get: function () {
            return getCss(this.name, 'webkitOrder');
        },
        set: function (value) {
            setCss(this.name, {
                webkitOrder: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitOrder = function (value) {
        this.webkitOrder = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPaddingAfter", {
        get: function () {
            return getCss(this.name, 'webkitPaddingAfter');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPaddingAfter: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPaddingAfter = function (value) {
        this.webkitPaddingAfter = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPaddingBefore", {
        get: function () {
            return getCss(this.name, 'webkitPaddingBefore');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPaddingBefore: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPaddingBefore = function (value) {
        this.webkitPaddingBefore = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPaddingEnd", {
        get: function () {
            return getCss(this.name, 'webkitPaddingEnd');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPaddingEnd: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPaddingEnd = function (value) {
        this.webkitPaddingEnd = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPaddingStart", {
        get: function () {
            return getCss(this.name, 'webkitPaddingStart');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPaddingStart: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPaddingStart = function (value) {
        this.webkitPaddingStart = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPerspective", {
        get: function () {
            return getCss(this.name, 'webkitPerspective');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPerspective: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPerspective = function (value) {
        this.webkitPerspective = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPerspectiveOrigin", {
        get: function () {
            return getCss(this.name, 'webkitPerspectiveOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPerspectiveOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPerspectiveOrigin = function (value) {
        this.webkitPerspectiveOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPerspectiveOriginX", {
        get: function () {
            return getCss(this.name, 'webkitPerspectiveOriginX');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPerspectiveOriginX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPerspectiveOriginX = function (value) {
        this.webkitPerspectiveOriginX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPerspectiveOriginY", {
        get: function () {
            return getCss(this.name, 'webkitPerspectiveOriginY');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPerspectiveOriginY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPerspectiveOriginY = function (value) {
        this.webkitPerspectiveOriginY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitPrintColorAdjust", {
        get: function () {
            return getCss(this.name, 'webkitPrintColorAdjust');
        },
        set: function (value) {
            setCss(this.name, {
                webkitPrintColorAdjust: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitPrintColorAdjust = function (value) {
        this.webkitPrintColorAdjust = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitRtlOrdering", {
        get: function () {
            return getCss(this.name, 'webkitRtlOrdering');
        },
        set: function (value) {
            setCss(this.name, {
                webkitRtlOrdering: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitRtlOrdering = function (value) {
        this.webkitRtlOrdering = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitRubyPosition", {
        get: function () {
            return getCss(this.name, 'webkitRubyPosition');
        },
        set: function (value) {
            setCss(this.name, {
                webkitRubyPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitRubyPosition = function (value) {
        this.webkitRubyPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitShapeImageThreshold", {
        get: function () {
            return getCss(this.name, 'webkitShapeImageThreshold');
        },
        set: function (value) {
            setCss(this.name, {
                webkitShapeImageThreshold: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitShapeImageThreshold = function (value) {
        this.webkitShapeImageThreshold = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitShapeMargin", {
        get: function () {
            return getCss(this.name, 'webkitShapeMargin');
        },
        set: function (value) {
            setCss(this.name, {
                webkitShapeMargin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitShapeMargin = function (value) {
        this.webkitShapeMargin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitShapeOutside", {
        get: function () {
            return getCss(this.name, 'webkitShapeOutside');
        },
        set: function (value) {
            setCss(this.name, {
                webkitShapeOutside: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitShapeOutside = function (value) {
        this.webkitShapeOutside = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTapHighlightColor", {
        get: function () {
            return getCss(this.name, 'webkitTapHighlightColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTapHighlightColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTapHighlightColor = function (value) {
        this.webkitTapHighlightColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextCombine", {
        get: function () {
            return getCss(this.name, 'webkitTextCombine');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextCombine: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextCombine = function (value) {
        this.webkitTextCombine = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextDecorationsInEffect", {
        get: function () {
            return getCss(this.name, 'webkitTextDecorationsInEffect');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextDecorationsInEffect: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextDecorationsInEffect = function (value) {
        this.webkitTextDecorationsInEffect = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextEmphasis", {
        get: function () {
            return getCss(this.name, 'webkitTextEmphasis');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextEmphasis: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextEmphasis = function (value) {
        this.webkitTextEmphasis = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextEmphasisColor", {
        get: function () {
            return getCss(this.name, 'webkitTextEmphasisColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextEmphasisColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextEmphasisColor = function (value) {
        this.webkitTextEmphasisColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextEmphasisPosition", {
        get: function () {
            return getCss(this.name, 'webkitTextEmphasisPosition');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextEmphasisPosition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextEmphasisPosition = function (value) {
        this.webkitTextEmphasisPosition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextEmphasisStyle", {
        get: function () {
            return getCss(this.name, 'webkitTextEmphasisStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextEmphasisStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextEmphasisStyle = function (value) {
        this.webkitTextEmphasisStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextFillColor", {
        get: function () {
            return getCss(this.name, 'webkitTextFillColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextFillColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextFillColor = function (value) {
        this.webkitTextFillColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextOrientation", {
        get: function () {
            return getCss(this.name, 'webkitTextOrientation');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextOrientation: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextOrientation = function (value) {
        this.webkitTextOrientation = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextSecurity", {
        get: function () {
            return getCss(this.name, 'webkitTextSecurity');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextSecurity: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextSecurity = function (value) {
        this.webkitTextSecurity = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextSizeAdjust", {
        get: function () {
            return getCss(this.name, 'webkitTextSizeAdjust');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextSizeAdjust: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextSizeAdjust = function (value) {
        this.webkitTextSizeAdjust = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextStroke", {
        get: function () {
            return getCss(this.name, 'webkitTextStroke');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextStroke: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextStroke = function (value) {
        this.webkitTextStroke = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextStrokeColor", {
        get: function () {
            return getCss(this.name, 'webkitTextStrokeColor');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextStrokeColor: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextStrokeColor = function (value) {
        this.webkitTextStrokeColor = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTextStrokeWidth", {
        get: function () {
            return getCss(this.name, 'webkitTextStrokeWidth');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTextStrokeWidth: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTextStrokeWidth = function (value) {
        this.webkitTextStrokeWidth = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransform", {
        get: function () {
            return getCss(this.name, 'webkitTransform');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransform: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransform = function (value) {
        this.webkitTransform = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransformOrigin", {
        get: function () {
            return getCss(this.name, 'webkitTransformOrigin');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransformOrigin: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransformOrigin = function (value) {
        this.webkitTransformOrigin = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransformOriginX", {
        get: function () {
            return getCss(this.name, 'webkitTransformOriginX');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransformOriginX: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransformOriginX = function (value) {
        this.webkitTransformOriginX = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransformOriginY", {
        get: function () {
            return getCss(this.name, 'webkitTransformOriginY');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransformOriginY: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransformOriginY = function (value) {
        this.webkitTransformOriginY = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransformOriginZ", {
        get: function () {
            return getCss(this.name, 'webkitTransformOriginZ');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransformOriginZ: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransformOriginZ = function (value) {
        this.webkitTransformOriginZ = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransformStyle", {
        get: function () {
            return getCss(this.name, 'webkitTransformStyle');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransformStyle: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransformStyle = function (value) {
        this.webkitTransformStyle = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransition", {
        get: function () {
            return getCss(this.name, 'webkitTransition');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransition: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransition = function (value) {
        this.webkitTransition = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransitionDelay", {
        get: function () {
            return getCss(this.name, 'webkitTransitionDelay');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransitionDelay: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransitionDelay = function (value) {
        this.webkitTransitionDelay = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransitionDuration", {
        get: function () {
            return getCss(this.name, 'webkitTransitionDuration');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransitionDuration: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransitionDuration = function (value) {
        this.webkitTransitionDuration = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransitionProperty", {
        get: function () {
            return getCss(this.name, 'webkitTransitionProperty');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransitionProperty: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransitionProperty = function (value) {
        this.webkitTransitionProperty = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitTransitionTimingFunction", {
        get: function () {
            return getCss(this.name, 'webkitTransitionTimingFunction');
        },
        set: function (value) {
            setCss(this.name, {
                webkitTransitionTimingFunction: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitTransitionTimingFunction = function (value) {
        this.webkitTransitionTimingFunction = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitUserDrag", {
        get: function () {
            return getCss(this.name, 'webkitUserDrag');
        },
        set: function (value) {
            setCss(this.name, {
                webkitUserDrag: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitUserDrag = function (value) {
        this.webkitUserDrag = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitUserModify", {
        get: function () {
            return getCss(this.name, 'webkitUserModify');
        },
        set: function (value) {
            setCss(this.name, {
                webkitUserModify: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitUserModify = function (value) {
        this.webkitUserModify = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitUserSelect", {
        get: function () {
            return getCss(this.name, 'webkitUserSelect');
        },
        set: function (value) {
            setCss(this.name, {
                webkitUserSelect: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitUserSelect = function (value) {
        this.webkitUserSelect = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "webkitWritingMode", {
        get: function () {
            return getCss(this.name, 'webkitWritingMode');
        },
        set: function (value) {
            setCss(this.name, {
                webkitWritingMode: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWebkitWritingMode = function (value) {
        this.webkitWritingMode = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "whiteSpace", {
        get: function () {
            return getCss(this.name, 'whiteSpace');
        },
        set: function (value) {
            setCss(this.name, {
                whiteSpace: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWhiteSpace = function (value) {
        this.whiteSpace = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "whiteSpaceCollapse", {
        get: function () {
            return getCss(this.name, 'whiteSpaceCollapse');
        },
        set: function (value) {
            setCss(this.name, {
                whiteSpaceCollapse: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWhiteSpaceCollapse = function (value) {
        this.whiteSpaceCollapse = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "widows", {
        get: function () {
            return getCss(this.name, 'widows');
        },
        set: function (value) {
            setCss(this.name, {
                widows: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWidows = function (value) {
        this.widows = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "width", {
        get: function () {
            return getCss(this.name, 'width');
        },
        set: function (value) {
            setCss(this.name, {
                width: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWidth = function (value) {
        this.width = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "willChange", {
        get: function () {
            return getCss(this.name, 'willChange');
        },
        set: function (value) {
            setCss(this.name, {
                willChange: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWillChange = function (value) {
        this.willChange = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "wordBreak", {
        get: function () {
            return getCss(this.name, 'wordBreak');
        },
        set: function (value) {
            setCss(this.name, {
                wordBreak: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWordBreak = function (value) {
        this.wordBreak = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "wordSpacing", {
        get: function () {
            return getCss(this.name, 'wordSpacing');
        },
        set: function (value) {
            setCss(this.name, {
                wordSpacing: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWordSpacing = function (value) {
        this.wordSpacing = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "wordWrap", {
        get: function () {
            return getCss(this.name, 'wordWrap');
        },
        set: function (value) {
            setCss(this.name, {
                wordWrap: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWordWrap = function (value) {
        this.wordWrap = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "writingMode", {
        get: function () {
            return getCss(this.name, 'writingMode');
        },
        set: function (value) {
            setCss(this.name, {
                writingMode: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setWritingMode = function (value) {
        this.writingMode = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "x", {
        get: function () {
            return getCss(this.name, 'x');
        },
        set: function (value) {
            setCss(this.name, {
                x: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setX = function (value) {
        this.x = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "y", {
        get: function () {
            return getCss(this.name, 'y');
        },
        set: function (value) {
            setCss(this.name, {
                y: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setY = function (value) {
        this.y = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "zIndex", {
        get: function () {
            return getCss(this.name, 'zIndex');
        },
        set: function (value) {
            setCss(this.name, {
                zIndex: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setZIndex = function (value) {
        this.zIndex = value;
        return this;
    };
    Object.defineProperty(Style.prototype, "zoom", {
        get: function () {
            return getCss(this.name, 'zoom');
        },
        set: function (value) {
            setCss(this.name, {
                zoom: value
            });
            this._updated();
        },
        enumerable: false,
        configurable: true
    });
    Style.prototype.setZoom = function (value) {
        this.zoom = value;
        return this;
    };
    Style.prototype.variable = function (name, value) {
        var _a;
        if (value === void 0) { value = null; }
        var vname = name.startsWith('--') ? name : '--' + name;
        if (value) {
            setCss(this.name, (_a = {},
                _a[vname] = value,
                _a));
            this._updated();
        }
        else {
            return getCss(this.name, vname);
        }
        return this;
    };
    Style.prototype._updated = function () {
        this.emit('update');
    };
    /**
     *
     * @param {props} props additional properties to add into the mix
     * @returns {Style}
     */
    Style.prototype.extends = function (props, override) {
        if (override === void 0) { override = true; }
        return Style.extends(this, props, this.name, override);
    };
    Style.trimRules = function (rules) {
        return trimRules(rules);
    };
    Style.register = function (name, props) {
        var s = new Style(name);
        s.set(props);
        return s;
    };
    Style.fromElement = function (element, name) {
        if (name === void 0) { name = null; }
        var styles = getComputedStyle(element);
        var csss = {};
        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
            var property = styles_1[_i];
            var value = styles.getPropertyValue(property);
            csss[property] = value;
        }
        return Style.register(name, csss);
    };
    Style.fromWidget = function (widget, name) {
        if (name === void 0) { name = null; }
        return Style.fromElement((0, elman_1.findEl)(widget.id)[0], name);
    };
    Style.from = function (target, name) {
        if (name === void 0) { name = null; }
        if ((0, type_1.isHTMLElement)(target)) {
            return Style.fromElement(target, name);
        }
        else if ((0, type_1.isWidget)(target)) {
            return Style.fromWidget(target, name);
        }
        else {
            throw new Error('Only HTMLElements and Widgets are allowed for style copying.');
        }
    };
    Style.copy = function (target, name, mode, style, update) {
        if (name === void 0) { name = null; }
        if (mode === void 0) { mode = "all"; }
        if (style === void 0) { style = null; }
        if (update === void 0) { update = true; }
        if (mode == "all" && target instanceof Style) {
            var newStyle_1 = style || new Style(name || (0, id_1.default)(5));
            newStyle_1.set(target.all);
            if (update)
                target.on('update', function () { return newStyle_1.set(target.all); });
            return newStyle_1;
        }
        else {
            var all = __assign({}, (getCss(target)));
            return Style.register(name || (0, id_1.default)(5), all);
        }
    };
    Style.extends = function (target, props, name, override) {
        if (name === void 0) { name = null; }
        if (override === void 0) { override = true; }
        var style = new Style(name);
        Style.copy(target, name, 'all', style, override);
        if (!override)
            target.on('update', function () {
                var p = __assign(__assign({}, target.all), props);
                style.set(p);
            });
        style.set(props);
        return style;
    };
    Style.calc = function () {
        var string = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            string[_i] = arguments[_i];
        }
        return 'calc(' + string.join(' ') + ')';
    };
    ;
    Style.var = function (string) { return 'var(--' + voca_1.default.kebabCase(string) + ')'; };
    ;
    Style.double = function (string) { return cssProperty([string, string]); };
    ;
    Style.linearGradient = function () {
        var colors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            colors[_i] = arguments[_i];
        }
        return "linear-gradient(".concat(colors.map(function (color) { return cssProperty(color); }).join(','), ")");
    };
    ;
    Style.radialGradient = function () {
        var colors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            colors[_i] = arguments[_i];
        }
        return "radial-gradient(".concat(colors.map(function (color) { return cssProperty(color); }).join(','), ")");
    };
    ;
    Style.deg = function (int) { return int + 'deg'; };
    ;
    Style.em = function (int) { return int + 'em'; };
    ;
    Style.rem = function (int) { return int + 'rem'; };
    ;
    Style.px = function (int) { return int + 'px'; };
    ;
    Style.p = function (int) { return int + '%'; };
    ;
    Style.INHERIT = 'inherit';
    Style.AUTO = 'auto';
    Style.FULL = '100%';
    Style.FULLWIDTH = '100vw';
    Style.FULLHEIGHT = '100dvh';
    Style.WRAP = 'wrap';
    Style.NONE = 'none';
    Style.BLOCK = 'block';
    Style.FLEX = 'flex';
    Style.GRID = 'grid';
    Style.NOWRAP = 'nowrap';
    Style.INITIAL = 'initial';
    Style.UNSET = 'unset';
    Style.CLIP = 'clip';
    Style.HIDDEN = 'hidden';
    Style.VISIBLE = 'visible';
    Style.UNIT = '16px';
    Style.HALFUNIT = '8px';
    Style.ONEANDHALFUNIT = '24px';
    Style.TWOUNITS = '32px';
    Style.THREEUNITS = '48px';
    Style.FOURUNITS = '64px';
    Style.FIVEUNITS = '80px';
    Style.BULKUNIT = '100px';
    Style.GRADIENT = {
        LEFT: 'to left',
        RIGHT: 'to right',
        TOP: 'to top',
        BOTTOM: 'to bottom',
    };
    return Style;
}(eventtarget_1.WidgetEventTarget));
exports.default = Style;
