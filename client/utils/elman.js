"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siblings = exports.emptyElement = exports.setCss = exports.setClasses = exports.setObjectProps = exports.setAttributeMap = exports.createElement = exports.GUIDOMTREE = exports.findEl = exports.registerElement = void 0;
var elementList = {};
exports.GUIDOMTREE = elementList;
var specificTypes = 'large|transparent|outline'.split('|');
var typedElements = 'button|input'.split('|');
function registerElement(element, id) {
    elementList[id] = element;
}
exports.registerElement = registerElement;
function findEl(id) {
    return elementList[id];
}
exports.findEl = findEl;
function createElement(element, classes, attr) {
    var el = document.createElement(element);
    if (attr)
        setAttributeMap(el, attr);
    if (classes)
        setClasses(el, classes);
    return el;
}
exports.createElement = createElement;
function setAttributeMap(element, attr) {
    for (var i in attr) {
        if (attr[i])
            element.setAttribute(i, attr[i].toString());
        else if (attr[i] == false)
            element.removeAttribute(i);
    }
}
exports.setAttributeMap = setAttributeMap;
function setObjectProps(element, attr) {
    for (var i in attr) {
        element[i] = attr[i];
    }
}
exports.setObjectProps = setObjectProps;
function setClasses(element, classes, type) {
    if (type === void 0) { type = 'add'; }
    if (!classes.trim())
        return;
    var classNames = classes.trim().match(' ') ? classes.trim().split(' ') : [classes.trim()];
    classNames.forEach(function (className) { return element
        .classList[type](className); });
}
exports.setClasses = setClasses;
function setCss(element, values, value) {
    if (value === void 0) { value = null; }
    if (typeof values === 'string') {
        if (value === null) {
            return window.getComputedStyle(element).getPropertyValue(values);
        }
        else {
            if (typeof value == 'number')
                value = value + 'px';
            element.style[values] = value;
        }
    }
    else if (typeof values === 'object') {
        for (var prop in values) {
            var value_1 = values[prop];
            if (!prop.startsWith('--') && typeof value_1 == 'number')
                value_1 = value_1 + 'px';
            if (prop in element.style)
                element.style[prop] = value_1;
            else
                element.style.setProperty(prop, value_1);
        }
    }
}
exports.setCss = setCss;
function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
exports.emptyElement = emptyElement;
function siblings(element) {
    var _a;
    return Array.from(((_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.children) || []).filter(function (child) { return child !== element; }).map(function (el) { return el; });
}
exports.siblings = siblings;
