"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Widget_1 = require("../widgets/main/Widget");
var elman_1 = require("./elman");
var type_1 = require("./type");
var doAll = function (all, cb) {
    var response = [];
    all.forEach(function (element) {
        var r = cb(element);
        if (r)
            response.push(r);
    });
    response = response.filter(function (item) { return !(item instanceof Dom); });
    if (response.length) {
        response = response.shift();
    }
    else {
        response = all;
    }
    return Array.isArray(response) ? all : response;
};
var Dom = /** @class */ (function () {
    function Dom(element, classes, attributes) {
        var _this = this;
        if (classes === void 0) { classes = null; }
        if (attributes === void 0) { attributes = null; }
        this.elements = [];
        if (element instanceof HTMLElement) {
            this.elements.push(element);
        }
        else {
            var el = document.querySelectorAll(element);
            el.forEach(function (el) { return _this.elements.push(el); });
        }
        if (classes) {
            this.addClass(classes);
        }
        if (attributes) {
            this.attr(attributes);
        }
    }
    Dom.prototype.at = function (index) {
        return this.elements.at(index);
    };
    Dom.prototype.push = function (child) {
        if (child instanceof Widget_1.default) {
            this.elements.push((0, elman_1.findEl)(child.id));
        }
        else {
            this.elements.push(child);
        }
        return this;
    };
    Dom.prototype.unshift = function (child) {
        if (child instanceof Widget_1.default) {
            this.elements.unshift((0, elman_1.findEl)(child.id));
        }
        else {
            this.elements.unshift(child);
        }
        return this;
    };
    Dom.prototype.shift = function () {
        return this.elements.shift();
    };
    Dom.prototype.pop = function () {
        return this.elements.pop();
    };
    Dom.prototype.forEach = function (callback) {
        this.elements.forEach(callback);
        return this;
    };
    Object.defineProperty(Dom.prototype, "length", {
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    Dom.prototype.addClass = function (classes) {
        return doAll(this, function (el) { return (0, elman_1.setClasses)(el, classes, 'add'); });
    };
    Dom.prototype.removeClass = function (classes) {
        return doAll(this, function (el) { return (0, elman_1.setClasses)(el, classes, 'remove'); });
    };
    Dom.prototype.toggleClass = function (classes) {
        return doAll(this, function (el) { return (0, elman_1.setClasses)(el, classes, 'toggle'); });
    };
    Dom.prototype.hasClass = function (classes) {
        return this.elements.at(0).classList.contains(classes);
    };
    Dom.prototype.attr = function (attr) {
        if (typeof attr == 'object')
            doAll(this, function (el) { return (0, elman_1.setAttributeMap)(el, attr); });
        return typeof attr == "string" ? this.elements.at(0).attributes[attr].value : this;
    };
    Dom.prototype.getAttr = function (attr) {
        return this.elements.at(0).attributes[attr].value;
    };
    Dom.prototype.prop = function (attr) {
        if (typeof attr == 'object')
            doAll(this, function (el) { return (0, elman_1.setObjectProps)(el, attr); });
        return typeof attr == "string" ? this.elements.at(0)[attr] : this;
    };
    Dom.prototype.getProp = function (attr) {
        return this.elements.at(0)[attr];
    };
    Dom.prototype.html = function (html) {
        if (html)
            this.elements.at(0).innerHTML = html;
        return this.elements.at(0).innerHTML;
    };
    Dom.prototype.width = function (width) {
        if (width === void 0) { width = null; }
        if (width)
            doAll(this, function (el) { return el.style.width = typeof width == "number" ? width + 'px' : width; });
        return width ? this : this.at(0).getBoundingClientRect().width;
    };
    Dom.prototype.height = function (height) {
        if (height === void 0) { height = null; }
        if (height)
            doAll(this, function (el) { return el.style.height = typeof height == "number" ? height + 'px' : height; });
        return height ? this : this.at(0).getBoundingClientRect().height;
    };
    Dom.prototype.text = function (text) {
        if (typeof text == "string")
            this.elements.at(0).innerText = text;
        return this.elements.at(0).innerText;
    };
    Dom.prototype.append = function (element) {
        var _this = this;
        if (element instanceof Dom) {
            element.forEach(function (element) { return _this.at(0).appendChild(element); });
        }
        else {
            this.at(0).appendChild(element);
        }
        return this;
    };
    Dom.prototype.appendTo = function (element) {
        return doAll(this, function (el) { return element.appendChild(el); });
    };
    Dom.prototype.prepend = function (element) {
        var _this = this;
        if (element instanceof Dom) {
            element.forEach(function (element) { return _this.at(0).insertBefore(element, _this.at(0).firstChild); });
        }
        else {
            this.at(0).insertBefore(element, this.at(0).firstChild);
        }
        return this;
    };
    Dom.prototype.prependTo = function (element) {
        return doAll(this, function (el) { return element.insertBefore(el, element.firstChild); });
    };
    Dom.prototype.css = function (values, value) {
        return doAll(this, function (el) { return (0, elman_1.setCss)(el, values, value); });
    };
    Dom.prototype.remove = function () {
        return doAll(this, function (el) { return el.remove(); });
    };
    Dom.prototype.empty = function () {
        return doAll(this, function (el) { return (0, elman_1.emptyElement)(el); });
    };
    Dom.prototype.children = function () {
        return Dom.from(this.at(0).children.length ? this.at(0).children : []);
    };
    Dom.prototype.siblings = function () {
        return Dom.from((0, elman_1.siblings)(this.at(0)));
    };
    Dom.prototype.parent = function () {
        return this.at(0).parentNode ? new Dom(this.at(0).parentNode) : null;
    };
    Dom.prototype.closest = function (selector) {
        return new Dom(this.at(0).closest(selector));
    };
    Dom.prototype.find = function (arg) {
        if (typeof arg === 'string') {
            return Dom.from(Array.from(this.at(0).querySelectorAll(arg)));
        }
        else if (typeof arg === 'function') {
            return Array.prototype.find.call(this, arg);
        }
        return undefined;
    };
    Dom.prototype.on = function (event, callback) {
        doAll(this, function (el) {
            if (!el.domEventListeners)
                el.domEventListeners = [];
            el.domEventListeners.push({ event: event, callback: callback });
            el.addEventListener(event, callback);
        });
        return this;
    };
    Dom.prototype.is = function (selector) {
        var element = this.elements.at(0);
        if ('matches' in element) {
            return element.matches(selector);
        }
        else if ('msMatchesSelector' in element && typeof element.msMatchesSelector === "function") {
            return element.msMatchesSelector(selector);
        }
        else if ('webkitMatchesSelector' in element && typeof element.msMatchesSelector === "function") {
            return element.webkitMatchesSelector(selector);
        }
        else if ('mozMatchesSelector' in element && typeof element.msMatchesSelector === "function") {
            return element.mozMatchesSelector(selector);
        }
        else {
            var matches = document.querySelectorAll(selector);
            return Array.from(matches).indexOf(element) !== -1;
        }
    };
    Dom.prototype.off = function (name, callback) {
        if (callback === void 0) { callback = null; }
        doAll(this, function (el) {
            if (!el.domEventListeners)
                el.domEventListeners = [];
            el.domEventListeners.forEach(function (event) {
                if (callback) {
                    if (event.event === name && event.callback == callback)
                        el.removeEventListener(name, callback);
                }
                else {
                    if (event.event === name)
                        el.removeEventListener(name, event.callback);
                }
            });
            el.domEventListeners = el.domEventListeners.filter(function (event) {
                if (callback) {
                    return event.event !== name && event.callback !== callback;
                }
                else {
                    return event.event !== name;
                }
            });
        });
        return this;
    };
    Dom.prototype.trigger = function (event, data) {
        doAll(this, function (el) {
            el.dispatchEvent(new Event(event, data));
        });
        return this;
    };
    Dom.prototype.show = function () {
        return doAll(this, function (el) {
            el.style.display = '';
        });
    };
    Dom.prototype.hide = function () {
        return doAll(this, function (el) {
            el.style.display = 'none';
        });
    };
    Dom.prototype.toggle = function () {
        return doAll(this, function (el) {
            el.style.display = el.style.display === 'none' ? '' : 'none';
        });
    };
    Dom.prototype.enable = function () {
        return doAll(this, function (el) {
            if ((0, type_1.isHTMLElement)(el)) {
                el.disabled = false;
                el.setAttribute('disabled', 'false');
            }
        });
    };
    Dom.prototype.disable = function () {
        return doAll(this, function (el) {
            if ((0, type_1.isHTMLElement)(el)) {
                el.disabled = true;
                el.setAttribute('disabled', 'true');
            }
        });
    };
    Dom.from = function (elements) {
        var e = new Dom(Array.from(elements).shift());
        Array.from(elements).forEach(function (el) { return e.push(el); });
        return e;
    };
    Dom.create = function (element, classes, attr) {
        if (classes === void 0) { classes = ""; }
        if (attr === void 0) { attr = {}; }
        return new Dom((0, elman_1.createElement)(element, classes, attr));
    };
    return Dom;
}());
exports.default = Dom;
