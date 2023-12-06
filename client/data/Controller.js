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
exports.ArrayController = void 0;
var Controller = /** @class */ (function () {
    function Controller(val) {
        this.taken = [];
        this.changeListeners = [];
        this.value = val;
        this.type = typeof val;
    }
    Controller.prototype.take = function (taker) {
        this.taken.push(taker);
    };
    Controller.prototype.isTakenBy = function (taker) {
        return this.taken.indexOf(taker) > -1;
    };
    Controller.prototype.set = function (newValue, doNoyNotify) {
        if (doNoyNotify === void 0) { doNoyNotify = false; }
        this.value = newValue;
        if (doNoyNotify !== true)
            this.notifyChangeListeners(typeof doNoyNotify == "function" ? doNoyNotify : false);
    };
    Controller.prototype.get = function () {
        return this.value;
    };
    Controller.prototype.onChange = function (callback) {
        this.changeListeners.push(callback);
    };
    Controller.prototype.notifyChangeListeners = function (notify) {
        var _this = this;
        if (notify === void 0) { notify = false; }
        var ignoreIndex = typeof notify == "function" ? this.changeListeners.indexOf(notify) : -1;
        this.changeListeners.forEach(function (callback, index) {
            if (index == ignoreIndex)
                return;
            callback(_this.value);
        });
    };
    return Controller;
}());
var ArrayController = /** @class */ (function (_super) {
    __extends(ArrayController, _super);
    function ArrayController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayController.prototype.push = function (item) {
        this.value.push(item);
        this.notifyChangeListeners();
        return this;
    };
    ArrayController.prototype.unshift = function (item) {
        this.value.unshift(item);
        this.notifyChangeListeners();
        return this;
    };
    ArrayController.prototype.pop = function () {
        var popped = this.value.pop();
        this.notifyChangeListeners();
        return popped;
    };
    ArrayController.prototype.shift = function () {
        var popped = this.value.shift();
        this.notifyChangeListeners();
        return popped;
    };
    ArrayController.prototype.forEach = function (callback) {
        this.value.forEach(callback);
        return this;
    };
    ArrayController.prototype.setArray = function (array) {
        this.set(array);
        return this;
    };
    return ArrayController;
}(Controller));
exports.ArrayController = ArrayController;
exports.default = Controller;
