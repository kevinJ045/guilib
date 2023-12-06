"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLElement = exports.isWidget = exports.isPosition = void 0;
var Widget_1 = require("../widgets/main/Widget");
function isPosition(pos) {
    return pos == "absolute"
        || pos == "relative"
        || pos == "static"
        || pos == "fixed"
        || pos == "inherit"
        || pos == "sticky";
}
exports.isPosition = isPosition;
function isWidget(thing) {
    return thing instanceof Widget_1.default;
}
exports.isWidget = isWidget;
function isHTMLElement(thing) {
    return thing instanceof HTMLElement;
}
exports.isHTMLElement = isHTMLElement;
