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
function _inheritStore(store, parentStore) {
    var stores = parentStore.getStores();
    for (var i in stores) {
        store.setStore(stores[i], i);
    }
}
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(state) {
        if (state === void 0) { state = {}; }
        var _this = _super.call(this) || this;
        _this.stores = {
            state: {}
        };
        _this.setStore(state);
        return _this;
    }
    Store.prototype.set = function (key, value, store) {
        if (store === void 0) { store = 'state'; }
        if (!this.stores[store])
            this.stores[store] = {};
        this.stores[store][key] = value;
        this.dispatchEvent(new Event('change'));
    };
    Store.prototype.get = function (key, store) {
        if (store === void 0) { store = 'state'; }
        return this.stores[store][key];
    };
    Store.prototype.getStore = function (store, id) {
        if (store === void 0) { store = 'state'; }
        if (id === void 0) { id = null; }
        var ideed = id ? this.stores[id] || {} : {};
        var s = __assign({}, this.stores[store]);
        return s;
    };
    Store.prototype.setStore = function (state, store) {
        if (store === void 0) { store = 'state'; }
        if (state)
            for (var i in state) {
                this.set(i, state[i], store);
            }
    };
    Store.prototype.getStores = function () {
        return this.stores;
    };
    Store.prototype.inherit = function (store) {
        var _this = this;
        store.addEventListener('change', function () {
            _inheritStore(_this, store);
        });
        _inheritStore(this, store);
    };
    return Store;
}(EventTarget));
exports.default = Store;
