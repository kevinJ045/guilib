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
var options_1 = require("../../utils/options");
var Text_1 = require("../main/Text");
var Link_1 = require("../main/Link");
var defaultButton = function (more, link) { return (0, options_1.default)({
    element: { name: link ? 'a' : 'button' },
    class: more ? 'button ' + more : 'button',
    accepts: false,
}); };
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(selectedOptions, otheroptions) {
        if (otheroptions === void 0) { otheroptions = null; }
        var options = Text_1.default.resolveOptions(selectedOptions, otheroptions, defaultButton(null, (otheroptions === null || otheroptions === void 0 ? void 0 : otheroptions.url) || (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.url)));
        return _super.call(this, options) || this;
    }
    return Button;
}(Link_1.default));
exports.default = Button;
