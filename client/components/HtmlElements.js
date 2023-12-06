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
exports.Frame = exports.Frameset = exports.Hr = exports.Head = exports.Heading = exports.Iframe = exports.Image = exports.Input = exports.Li = exports.Label = exports.Legend = exports.Link = exports.Map = exports.Marquee = exports.Media = exports.Menu = exports.Meta = exports.Meter = exports.Mod = exports.Ol = exports.ObjectElement = exports.Optgroup = exports.Option = exports.Output = exports.Paragraph = exports.Param = exports.Picture = exports.Pre = exports.Progress = exports.Quote = exports.Script = exports.Select = exports.Slot = exports.Source = exports.Span = exports.Style = exports.Tablecaption = exports.Tablecell = exports.Tablecol = exports.Table = exports.Tablerow = exports.Tablesection = exports.Template = exports.Textarea = exports.Time = exports.Title = exports.Track = exports.Ul = exports.Video = exports.WebkitWidget = void 0;
exports.Anchor = exports.Area = exports.Audio = exports.Br = exports.Base = exports.Button = exports.Canvas = exports.Dlist = exports.Data = exports.Datalist = exports.Details = exports.Dialog = exports.Directory = exports.Div = exports.Embed = exports.Fieldset = exports.Font = exports.Form = void 0;
var elman_1 = require("../utils/elman");
var Widget_1 = require("../widgets/main/Widget");
var WebkitWidget = /** @class */ (function (_super) {
    __extends(WebkitWidget, _super);
    function WebkitWidget(options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, options) || this;
    }
    return WebkitWidget;
}(Widget_1.default));
exports.WebkitWidget = WebkitWidget;
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "controls", "src"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "video" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Video.prototype.play = function () {
        (0, elman_1.findEl)(this.id).at(0).play();
        return this;
    };
    Video.prototype.pause = function () {
        (0, elman_1.findEl)(this.id).at(0).pause();
        return this;
    };
    Video.prototype.paused = function () {
        (0, elman_1.findEl)(this.id).at(0).paused;
        return this;
    };
    Object.defineProperty(Video.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "controls", {
        set: function (value) {
            this.options.attr['controls'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Video;
}(WebkitWidget));
exports.Video = Video;
var Ul = /** @class */ (function (_super) {
    __extends(Ul, _super);
    function Ul(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "ul" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Ul.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ul.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ul;
}(WebkitWidget));
exports.Ul = Ul;
var Track = /** @class */ (function (_super) {
    __extends(Track, _super);
    function Track(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "kind", "src", "srclang", "label", "default"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "track" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Track.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "kind", {
        set: function (value) {
            this.options.attr['kind'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "srclang", {
        set: function (value) {
            this.options.attr['srclang'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "label", {
        set: function (value) {
            this.options.attr['label'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "default", {
        set: function (value) {
            this.options.attr['default'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Track;
}(WebkitWidget));
exports.Track = Track;
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "title" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Title.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Title.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Title.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Title;
}(WebkitWidget));
exports.Title = Title;
var Time = /** @class */ (function (_super) {
    __extends(Time, _super);
    function Time(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "datetime"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "time" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Time.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "datetime", {
        set: function (value) {
            this.options.attr['datetime'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Time;
}(WebkitWidget));
exports.Time = Time;
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "rows", "cols", "readonly"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "textarea" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Textarea.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Textarea.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Textarea.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Textarea.prototype, "rows", {
        set: function (value) {
            this.options.attr['rows'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Textarea.prototype, "cols", {
        set: function (value) {
            this.options.attr['cols'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Textarea.prototype, "readonly", {
        set: function (value) {
            this.options.attr['readonly'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Textarea;
}(WebkitWidget));
exports.Textarea = Textarea;
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "content"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "template" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Template.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Template.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Template.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Template.prototype, "content", {
        set: function (value) {
            this.options.attr['content'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Template;
}(WebkitWidget));
exports.Template = Template;
var Tablesection = /** @class */ (function (_super) {
    __extends(Tablesection, _super);
    function Tablesection(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "align"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "tablesection" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Tablesection.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesection.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesection.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablesection.prototype, "align", {
        set: function (value) {
            this.options.attr['align'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablesection;
}(WebkitWidget));
exports.Tablesection = Tablesection;
var Tablerow = /** @class */ (function (_super) {
    __extends(Tablerow, _super);
    function Tablerow(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "align", "valign"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "tablerow" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Tablerow.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerow.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerow.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerow.prototype, "align", {
        set: function (value) {
            this.options.attr['align'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablerow.prototype, "valign", {
        set: function (value) {
            this.options.attr['valign'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablerow;
}(WebkitWidget));
exports.Tablerow = Tablerow;
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "width", "border", "cellpadding", "cellspacing"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "table" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Table.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "border", {
        set: function (value) {
            this.options.attr['border'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "cellpadding", {
        set: function (value) {
            this.options.attr['cellpadding'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "cellspacing", {
        set: function (value) {
            this.options.attr['cellspacing'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Table;
}(WebkitWidget));
exports.Table = Table;
var Tablecol = /** @class */ (function (_super) {
    __extends(Tablecol, _super);
    function Tablecol(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "span"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "tablecol" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Tablecol.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecol.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecol.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecol.prototype, "span", {
        set: function (value) {
            this.options.attr['span'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablecol;
}(WebkitWidget));
exports.Tablecol = Tablecol;
var Tablecell = /** @class */ (function (_super) {
    __extends(Tablecell, _super);
    function Tablecell(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "align", "valign"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "tablecell" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Tablecell.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecell.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecell.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecell.prototype, "align", {
        set: function (value) {
            this.options.attr['align'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecell.prototype, "valign", {
        set: function (value) {
            this.options.attr['valign'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablecell;
}(WebkitWidget));
exports.Tablecell = Tablecell;
var Tablecaption = /** @class */ (function (_super) {
    __extends(Tablecaption, _super);
    function Tablecaption(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "align"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "tablecaption" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Tablecaption.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecaption.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecaption.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablecaption.prototype, "align", {
        set: function (value) {
            this.options.attr['align'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tablecaption;
}(WebkitWidget));
exports.Tablecaption = Tablecaption;
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable", "media"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "style" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Style.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "media", {
        set: function (value) {
            this.options.attr['media'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Style;
}(WebkitWidget));
exports.Style = Style;
var Span = /** @class */ (function (_super) {
    __extends(Span, _super);
    function Span(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "span" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Span.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Span;
}(WebkitWidget));
exports.Span = Span;
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable", "src", "media"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "source" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Source.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Source.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Source.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Source.prototype, "media", {
        set: function (value) {
            this.options.attr['media'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Source;
}(WebkitWidget));
exports.Source = Source;
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "slot" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Slot.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slot.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Slot;
}(WebkitWidget));
exports.Slot = Slot;
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "size", "multiple"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "select" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Select.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "size", {
        set: function (value) {
            this.options.attr['size'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Select.prototype, "multiple", {
        set: function (value) {
            this.options.attr['multiple'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Select;
}(WebkitWidget));
exports.Select = Select;
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    function Script(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable", "src"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "script" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Script.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Script;
}(WebkitWidget));
exports.Script = Script;
var Quote = /** @class */ (function (_super) {
    __extends(Quote, _super);
    function Quote(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "quote" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Quote.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quote.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Quote;
}(WebkitWidget));
exports.Quote = Quote;
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "max", "value"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "progress" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Progress.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Progress.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Progress.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Progress.prototype, "max", {
        set: function (value) {
            this.options.attr['max'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Progress.prototype, "value", {
        set: function (value) {
            this.options.attr['value'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Progress;
}(WebkitWidget));
exports.Progress = Progress;
var Pre = /** @class */ (function (_super) {
    __extends(Pre, _super);
    function Pre(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "width"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "pre" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Pre.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pre.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pre.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pre;
}(WebkitWidget));
exports.Pre = Pre;
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "picture" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Picture.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Picture;
}(WebkitWidget));
exports.Picture = Picture;
var Param = /** @class */ (function (_super) {
    __extends(Param, _super);
    function Param(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["type", "contenteditable", "value"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "param" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Param.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Param.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Param.prototype, "value", {
        set: function (value) {
            this.options.attr['value'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Param;
}(WebkitWidget));
exports.Param = Param;
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "paragraph" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Paragraph.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Paragraph;
}(WebkitWidget));
exports.Paragraph = Paragraph;
var Output = /** @class */ (function (_super) {
    __extends(Output, _super);
    function Output(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "output" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Output.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Output.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Output.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Output;
}(WebkitWidget));
exports.Output = Output;
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "value", "label", "selected"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "option" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Option.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "value", {
        set: function (value) {
            this.options.attr['value'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        set: function (value) {
            this.options.attr['label'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "selected", {
        set: function (value) {
            this.options.attr['selected'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Option;
}(WebkitWidget));
exports.Option = Option;
var Optgroup = /** @class */ (function (_super) {
    __extends(Optgroup, _super);
    function Optgroup(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "label"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "optgroup" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Optgroup.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Optgroup.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Optgroup.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Optgroup.prototype, "label", {
        set: function (value) {
            this.options.attr['label'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Optgroup;
}(WebkitWidget));
exports.Optgroup = Optgroup;
var ObjectElement = /** @class */ (function (_super) {
    __extends(ObjectElement, _super);
    function ObjectElement(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable", "data", "height", "width"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "object" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(ObjectElement.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectElement.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectElement.prototype, "data", {
        set: function (value) {
            this.options.attr['data'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return ObjectElement;
}(WebkitWidget));
exports.ObjectElement = ObjectElement;
var Ol = /** @class */ (function (_super) {
    __extends(Ol, _super);
    function Ol(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "ol" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Ol.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ol.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ol.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ol;
}(WebkitWidget));
exports.Ol = Ol;
var Mod = /** @class */ (function (_super) {
    __extends(Mod, _super);
    function Mod(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "mod" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Mod.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mod.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mod.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mod;
}(WebkitWidget));
exports.Mod = Mod;
var Meter = /** @class */ (function (_super) {
    __extends(Meter, _super);
    function Meter(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "value", "min", "max", "low", "high", "optimum"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "meter" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Meter.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "value", {
        set: function (value) {
            this.options.attr['value'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "min", {
        set: function (value) {
            this.options.attr['min'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "max", {
        set: function (value) {
            this.options.attr['max'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "low", {
        set: function (value) {
            this.options.attr['low'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "high", {
        set: function (value) {
            this.options.attr['high'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meter.prototype, "optimum", {
        set: function (value) {
            this.options.attr['optimum'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Meter;
}(WebkitWidget));
exports.Meter = Meter;
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["type", "contenteditable", "content"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "meta" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Meta.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meta.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meta.prototype, "content", {
        set: function (value) {
            this.options.attr['content'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Meta;
}(WebkitWidget));
exports.Meta = Meta;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable", "label"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "menu" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Menu.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "label", {
        set: function (value) {
            this.options.attr['label'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Menu;
}(WebkitWidget));
exports.Menu = Menu;
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "src"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "media" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Media.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Media;
}(WebkitWidget));
exports.Media = Media;
var Marquee = /** @class */ (function (_super) {
    __extends(Marquee, _super);
    function Marquee(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "behavior", "direction", "scrollamount", "loop"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "marquee" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Marquee.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marquee.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marquee.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marquee.prototype, "behavior", {
        set: function (value) {
            this.options.attr['behavior'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marquee.prototype, "direction", {
        set: function (value) {
            this.options.attr['direction'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marquee.prototype, "scrollamount", {
        set: function (value) {
            this.options.attr['scrollamount'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Marquee.prototype, "loop", {
        set: function (value) {
            this.options.attr['loop'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Marquee;
}(WebkitWidget));
exports.Marquee = Marquee;
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "map" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Map.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Map;
}(WebkitWidget));
exports.Map = Map;
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "rel", "href"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "link" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Link.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "rel", {
        set: function (value) {
            this.options.attr['rel'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "href", {
        set: function (value) {
            this.options.attr['href'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Link;
}(WebkitWidget));
exports.Link = Link;
var Legend = /** @class */ (function (_super) {
    __extends(Legend, _super);
    function Legend(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "align"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "legend" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Legend.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Legend.prototype, "align", {
        set: function (value) {
            this.options.attr['align'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Legend;
}(WebkitWidget));
exports.Legend = Legend;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "for"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "label" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Label.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "for", {
        set: function (value) {
            this.options.attr['for'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}(WebkitWidget));
exports.Label = Label;
var Li = /** @class */ (function (_super) {
    __extends(Li, _super);
    function Li(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "li" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Li.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Li.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Li.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Li;
}(WebkitWidget));
exports.Li = Li;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "contenteditable", "value", "readonly"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "input" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Input.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "value", {
        set: function (value) {
            this.options.attr['value'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "readonly", {
        set: function (value) {
            this.options.attr['readonly'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}(WebkitWidget));
exports.Input = Input;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "image" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Image.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Image;
}(WebkitWidget));
exports.Image = Image;
var Iframe = /** @class */ (function (_super) {
    __extends(Iframe, _super);
    function Iframe(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "src", "frameborder", "height", "width"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "iframe" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Iframe.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iframe.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iframe.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iframe.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iframe.prototype, "frameborder", {
        set: function (value) {
            this.options.attr['frameborder'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Iframe;
}(WebkitWidget));
exports.Iframe = Iframe;
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "heading" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Heading.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Heading;
}(WebkitWidget));
exports.Heading = Heading;
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "head" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Head.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Head.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Head.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Head;
}(WebkitWidget));
exports.Head = Head;
var Hr = /** @class */ (function (_super) {
    __extends(Hr, _super);
    function Hr(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "color", "width"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "hr" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Hr.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hr.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hr.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hr.prototype, "color", {
        set: function (value) {
            this.options.attr['color'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Hr;
}(WebkitWidget));
exports.Hr = Hr;
var Frameset = /** @class */ (function (_super) {
    __extends(Frameset, _super);
    function Frameset(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "frameset" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Frameset.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frameset.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frameset.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Frameset;
}(WebkitWidget));
exports.Frameset = Frameset;
var Frame = /** @class */ (function (_super) {
    __extends(Frame, _super);
    function Frame(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "src"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "frame" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Frame.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Frame;
}(WebkitWidget));
exports.Frame = Frame;
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "action", "method", "enctype", "target"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "form" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Form.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "action", {
        set: function (value) {
            this.options.attr['action'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "method", {
        set: function (value) {
            this.options.attr['method'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "enctype", {
        set: function (value) {
            this.options.attr['enctype'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "target", {
        set: function (value) {
            this.options.attr['target'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}(WebkitWidget));
exports.Form = Form;
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "font" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Font.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Font.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Font.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Font;
}(WebkitWidget));
exports.Font = Font;
var Fieldset = /** @class */ (function (_super) {
    __extends(Fieldset, _super);
    function Fieldset(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "disabled"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "fieldset" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Fieldset.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fieldset.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fieldset.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fieldset.prototype, "disabled", {
        set: function (value) {
            this.options.attr['disabled'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Fieldset;
}(WebkitWidget));
exports.Fieldset = Fieldset;
var Embed = /** @class */ (function (_super) {
    __extends(Embed, _super);
    function Embed(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "embed" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Embed.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Embed.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Embed.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Embed;
}(WebkitWidget));
exports.Embed = Embed;
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "align"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "div" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Div.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Div.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Div.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Div.prototype, "align", {
        set: function (value) {
            this.options.attr['align'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Div;
}(WebkitWidget));
exports.Div = Div;
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "compact"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "directory" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Directory.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Directory.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Directory.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Directory.prototype, "compact", {
        set: function (value) {
            this.options.attr['compact'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Directory;
}(WebkitWidget));
exports.Directory = Directory;
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "open"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "dialog" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Dialog.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "open", {
        set: function (value) {
            this.options.attr['open'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dialog;
}(WebkitWidget));
exports.Dialog = Dialog;
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "open"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "details" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Details.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "open", {
        set: function (value) {
            this.options.attr['open'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Details;
}(WebkitWidget));
exports.Details = Details;
var Datalist = /** @class */ (function (_super) {
    __extends(Datalist, _super);
    function Datalist(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "id"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "datalist" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Datalist.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Datalist.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Datalist.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Datalist;
}(WebkitWidget));
exports.Datalist = Datalist;
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "data" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Data.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}(WebkitWidget));
exports.Data = Data;
var Dlist = /** @class */ (function (_super) {
    __extends(Dlist, _super);
    function Dlist(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "compact"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "dlist" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Dlist.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dlist.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dlist.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dlist.prototype, "compact", {
        set: function (value) {
            this.options.attr['compact'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dlist;
}(WebkitWidget));
exports.Dlist = Dlist;
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "width", "height"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "canvas" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Canvas.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}(WebkitWidget));
exports.Canvas = Canvas;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["contenteditable", "value"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "button" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Button.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "value", {
        set: function (value) {
            this.options.attr['value'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(WebkitWidget));
exports.Button = Button;
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "href"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "base" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Base.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "href", {
        set: function (value) {
            this.options.attr['href'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Base;
}(WebkitWidget));
exports.Base = Base;
var Br = /** @class */ (function (_super) {
    __extends(Br, _super);
    function Br(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "br" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Br.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Br.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Br.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Br;
}(WebkitWidget));
exports.Br = Br;
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "controls", "src"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "audio" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Audio.prototype.play = function () {
        (0, elman_1.findEl)(this.id).at(0).play();
        return this;
    };
    Audio.prototype.pause = function () {
        (0, elman_1.findEl)(this.id).at(0).pause();
        return this;
    };
    Audio.prototype.paused = function () {
        (0, elman_1.findEl)(this.id).at(0).paused;
        return this;
    };
    Object.defineProperty(Audio.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "controls", {
        set: function (value) {
            this.options.attr['controls'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "src", {
        set: function (value) {
            this.options.attr['src'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Audio;
}(WebkitWidget));
exports.Audio = Audio;
var Area = /** @class */ (function (_super) {
    __extends(Area, _super);
    function Area(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "shape", "coords", "href", "alt"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "area" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Area.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "shape", {
        set: function (value) {
            this.options.attr['shape'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "coords", {
        set: function (value) {
            this.options.attr['coords'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "href", {
        set: function (value) {
            this.options.attr['href'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "alt", {
        set: function (value) {
            this.options.attr['alt'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Area;
}(WebkitWidget));
exports.Area = Area;
var Anchor = /** @class */ (function (_super) {
    __extends(Anchor, _super);
    function Anchor(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var attributes = ["name", "type", "contenteditable", "target", "href", "title"];
        if (!options.attr)
            options.attr = {};
        for (var i in options) {
            if (attributes.indexOf(i) > -1) {
                if (!options.attr)
                    options.attr = {};
                options.attr[i] = options[i];
                delete options[i];
            }
        }
        _this = _super.call(this, __assign(__assign({ class: '' }, options), { element: { name: "a" } })) || this;
        if (options.text) {
            _this.text(options.text);
        }
        return _this;
    }
    Object.defineProperty(Anchor.prototype, "name", {
        set: function (value) {
            this.options.attr['name'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "type", {
        set: function (value) {
            this.options.attr['type'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "contenteditable", {
        set: function (value) {
            this.options.attr['contenteditable'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "target", {
        set: function (value) {
            this.options.attr['target'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "href", {
        set: function (value) {
            this.options.attr['href'] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "title", {
        set: function (value) {
            this.options.attr['title'] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Anchor;
}(WebkitWidget));
exports.Anchor = Anchor;
