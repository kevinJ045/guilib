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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ref = exports.ComponentStyles = exports.asyncComponent = exports.onComponent = exports.typeref = exports.ref = exports.buildComponent = exports.componentEvents = exports.makeComponent = exports.components = void 0;
var extra_1 = require("../../extra");
var eventtarget_1 = require("../../utils/eventtarget");
var id_1 = require("../../utils/id");
var Widget_1 = require("./Widget");
exports.components = [];
function findComponent(component) {
    return exports.components.find(function (c) { return c.component == component; });
}
function makeComponent(component, props, event) {
    if (event === void 0) { event = true; }
    var args = Array.isArray(props.args) ? props.args : [];
    if (event)
        component.emit('beforeBuildStart', { component: component, props: props });
    // @ts-ignore
    var widget = component.build.apply(component, __spreadArray([props], args, false));
    if (event)
        component.emit('afterBuild', { component: component, props: props });
    if (!(widget instanceof Widget_1.default))
        throw new TypeError('Component.build does not return a widget.');
    component._currentWidget = widget;
    component._buildProps = props;
    return widget;
}
exports.makeComponent = makeComponent;
var componentEvents;
(function (componentEvents) {
    componentEvents["onBeforeInit"] = "beforeInit";
    componentEvents["onInitState"] = "initState";
    componentEvents["onBuildStart"] = "buildStart";
    componentEvents["onBuildEnd"] = "buildEnd";
    componentEvents["onRebuild"] = "rebuild";
})(componentEvents || (exports.componentEvents = componentEvents = {}));
function getEventKeyByName(value) {
    for (var key in componentEvents) {
        if (componentEvents[key] === value) {
            return key;
        }
    }
    return undefined;
}
function buildComponent(component, props, from) {
    if (from === void 0) { from = null; }
    var _comp = new component(props);
    _comp._beforeInit();
    if (component.inheritState !== false && from)
        _comp._inheritState(from);
    _comp.emit('beforeInit', { component: component, props: props });
    _comp.initState(props);
    _comp.emit('initState', { component: component, props: props });
    var widget = _comp.make(props);
    _comp.emit('buildStart', { component: component, props: props, widget: widget });
    widget.component = _comp;
    _comp.afterBuild(__assign(__assign({}, props), { page: widget }));
    _comp.emit('buildEnd', { component: component, props: props, widget: widget });
    return widget;
}
exports.buildComponent = buildComponent;
/**
 * A class decorator to define references before class initiation.
 */
function ref(target, propertyKey) {
    var key = "";
    if (typeof propertyKey == "object")
        key = propertyKey.name;
    else
        key = propertyKey;
    Object.defineProperty(target, key, {
        get: function () {
            return this._data[key];
        },
        set: function (newValue) {
            this._data[key] = newValue;
            this.update();
        }
    });
}
exports.ref = ref;
function typeref(type) {
    return function (target, propertyKey) {
        var key = "";
        if (typeof propertyKey == "object")
            key = propertyKey.name;
        else
            key = propertyKey;
        Object.defineProperty(target, key, {
            get: function () {
                return this._data[key];
            },
            set: function (newValue) {
                var _this = this;
                var s = function () {
                    _this._data[key] = newValue;
                    _this.update();
                };
                if (type == "array" && Array.isArray(newValue)) {
                    s();
                }
                else if (typeof newValue == type) {
                    s();
                }
                else if (type == "null" && typeof newValue == "undefined") {
                    s();
                }
                else {
                    throw new TypeError(newValue + ' is not of type ' + type);
                }
            }
        });
    };
}
exports.typeref = typeref;
/**
 * An event decorator to listen to class events before class initiaition.
 */
function onComponent(target, propertyKey) {
    var key = "";
    if (typeof propertyKey == "object")
        key = propertyKey.name;
    else
        key = propertyKey;
    var eventKey = getEventKeyByName(key);
    if (eventKey && !target.events) {
        var prev_1 = target.afterConstruct;
        var afterConstruct = function () {
            // @ts-ignore
            var that = this;
            that.on(key, target[key]);
            if (typeof prev_1 == "function")
                prev_1.call(that);
        };
        target.afterConstruct = afterConstruct;
    }
}
exports.onComponent = onComponent;
function asyncComponent(options) {
    return function (constructor, extended) {
        constructor.prototype.buildAsync = constructor.prototype.build;
        constructor.prototype.build = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var mainWidget = new Widget_1.default({
                children: [((_a = options === null || options === void 0 ? void 0 : options.loading) === null || _a === void 0 ? void 0 : _a.call(options)) || null]
            });
            this.buildAsync.apply(this, args).then(function (widget) {
                var parent = mainWidget.parent(true);
                if (!parent)
                    mainWidget.remove('*');
                widget.to(parent || mainWidget);
                if (parent)
                    mainWidget.remove();
            });
            return mainWidget;
        };
    };
}
exports.asyncComponent = asyncComponent;
var ComponentStyles = /** @class */ (function () {
    function ComponentStyles(styles) {
        this.styles = {};
        this.id = (0, id_1.default)(6);
        for (var i in styles) {
            this.set(i, styles[i]);
        }
    }
    ComponentStyles.prototype.set = function (name, styles) {
        var n = this.id + '_' + name;
        this.styles[n] = new extra_1.Style(n, styles);
        return this;
    };
    ComponentStyles.prototype.get = function (name) {
        var n = this.id + '_' + name;
        return this.styles[n];
    };
    ComponentStyles.prototype.remove = function (name) {
        var n = this.id + '_' + name;
        delete this.styles[n];
        return this;
    };
    ComponentStyles.prototype.change = function (name, styles) {
        var n = this.id + '_' + name;
        for (var i in styles) {
            this.styles[n][i] = styles[i];
        }
        return this;
    };
    return ComponentStyles;
}());
exports.ComponentStyles = ComponentStyles;
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     */
    function Component(props) {
        var _this = _super.call(this) || this;
        /**
         * DO NOT OVERRIDE
         * The eventEmitMethod tells the event emitter to emit the events as
         * raw data instead of an event data.
         */
        _this._eventEmitMethod = "raw";
        /**
         * The data from Ref and Component::ref is stored here in the component.
         */
        _this._data = {};
        exports.components.push({ component: _this });
        _this._buildProps = props;
        _this.id = (0, id_1.default)(12);
        return _this;
    }
    Object.defineProperty(Component.prototype, "_beforeInit", {
        /**
         * DO NOT OVERRIDE!!
         *
         * This function is not overridable, or in other words,
         * this function is a core function to make the Component
         * logic work, please don't touch it
         */
        get: function () {
            var _this = this;
            return function () {
                for (var i in _this) {
                    if (_this[i] instanceof Ref) {
                        _this.ref(i, _this[i].value);
                    }
                    if (typeof i == "function" && i in componentEvents) {
                        _this.on(componentEvents[i], _this[i]);
                    }
                }
            };
        },
        /**
         * DO NOT OVERRIDE!!
         *
         * This function is not overridable, or in other words,
         * this function is a core function to make the Component
         * logic work, please don't touch it
         */
        set: function (value) { },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "_inheritState", {
        /**
         * DO NOT OVERRIDE!!
         *
         * This function is not overridable, or in other words,
         * this function is a core function to make the Component
         * logic work, please don't touch it
         */
        get: function () {
            var _this = this;
            return function (component) {
                for (var i in component) {
                    if (!(i in Component.prototype)) {
                        _this[i] = component[i];
                    }
                }
                for (var i in component._data) {
                    if (i in _this._data) {
                        _this._data[i] = component._data[i];
                    }
                    else {
                        _this.ref(i, component._data[i]);
                    }
                }
            };
        },
        /**
         * DO NOT OVERRIDE!!
         *
         * This function is not overridable, or in other words,
         * this function is a core function to make the Component
         * logic work, please don't touch it
         */
        set: function (value) { },
        enumerable: false,
        configurable: true
    });
    /**
     * initState runs right after a component is constructed
     * and right before it's built.
     * the job is done right after inheritance and before the build
     * is done, it is also not expected to return anything useful
     */
    Component.prototype.initState = function (props) { };
    /**
     * build runs after initState, it has a little different buildProps,
     * and it can be executed again when state changes, meant to be used as a basic
     * template and be manipulated in the afterBuild section later on
     */
    Component.prototype.build = function (props) {
        return new Widget_1.default({});
    };
    /**
     * afterBuild, as the name suggests, runs after build, it's props has
     * the previously built widget as a parameter, so you can use that
     * to manipulate the previously built component from here.
     *
     * You can also use afterBuild for async requests using Controllers and
     * such for stateful change.
     */
    Component.prototype.afterBuild = function (props) { };
    /**
     *
     * Makes reference setters and getters for a data value
     * that can be used to make a Stateful component.
     *
     * When a ref is changed, the entire Component is re-rendered
     * with the new value.
     *
     * @param {string} property : property name
     * @param {any} value : property initial value
     * @returns {Component}
     *
     */
    Component.prototype.ref = function (property, value) {
        var _this = this;
        if (value === void 0) { value = null; }
        var that = this;
        if (property in Component.prototype)
            return this;
        if (property in this) {
            if (value == null && that[property] instanceof Ref)
                value = that[property];
            delete that[property];
        }
        Object.defineProperty(this, property, {
            get: function () { return _this._data[property]; },
            set: function (newValue) {
                _this._data[property] = newValue;
                _this.update();
            },
        });
        this._data[property] = value;
        return this;
    };
    Object.defineProperty(Component.prototype, "make", {
        /**
         * DO NOT OVERRIDE!!
         *
         * This function is not overridable, or in other words,
         * this function is a core function to make the Component
         * logic work, please don't touch it
         */
        get: function () {
            var _this = this;
            return function (props) {
                if (props === void 0) { props = null; }
                return makeComponent(_this, props);
            };
        },
        /**
         * DO NOT OVERRIDE!!
         *
         * This function is not overridable, or in other words,
         * this function is a core function to make the Component
         * logic work, please don't touch it
         */
        set: function (value) { },
        enumerable: false,
        configurable: true
    });
    /**
     * DO NOT OVERRIDE!!
     *
     * The update function is used to re-render the component when a ref
     * is changed, you can use this to re-render anytime but you shouldn't
     * override it.
     */
    Component.prototype.update = function () {
        if (this._currentWidget) {
            var comp = findComponent(this);
            var rendererElement = false;
            if (comp) {
                if (comp.preventNextUpdate) {
                    comp.preventNextUpdate = false;
                    return this;
                }
                else if (comp.preventAllUpdates) {
                    return this;
                }
                if (comp.rendererElement && typeof comp.rendererElement == "string" || comp.rendererElement instanceof Widget_1.default)
                    rendererElement = comp.rendererElement;
            }
            var el = rendererElement == false ? this._currentWidget : (rendererElement instanceof Widget_1.default ? rendererElement : this._currentWidget.find(rendererElement) || this._currentWidget);
            var parent_1 = rendererElement ? el : el.parent(true);
            if (rendererElement) {
                el.remove('*');
            }
            else
                this._currentWidget.remove();
            var oldWidget = this._currentWidget;
            var newWidget = makeComponent(this, this._buildProps.wrap ? this._buildProps.wrap({ page: oldWidget }) : __assign(__assign({}, this._buildProps), { page: oldWidget }), false);
            var lastWidget = newWidget;
            if (typeof rendererElement == "string" && newWidget.find(rendererElement))
                lastWidget = newWidget.find(rendererElement).children();
            else if (rendererElement)
                newWidget.children();
            if (parent_1) {
                lastWidget.to(parent_1);
            }
            this.emit('rebuild', { widget: lastWidget, oldWidget: oldWidget, component: this, props: this._buildProps });
        }
    };
    /**
     * DO NOT OVERRIDE
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     *
     * A method to prevent the next component update/rebuild,
     *
     * Can be used to stop a build loop.
     *
     * @deprecated
     */
    Component.prototype.preventNextUpdate = function () {
        findComponent(this).
            preventNextUpdate = true;
    };
    /**
     * DO NOT OVERRIDE
     *
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     *
     * This function can be used to disable
     * the rebuildability of the entire component.
     *
     * @deprecated
     */
    Component.prototype.preventAllUpdates = function (prevent) {
        findComponent(this).
            preventAllUpdates = prevent;
    };
    /**
     *
     * DO NOT OVERRIDE
     *
     * This function is not overridable, or in other words,
     * this function is a core function to make the Component
     * logic work, please don't touch it
     *
     * This class can be used to set a base renderer widget inside of your widget so it does not remove
     * everything everytime you update.
     *
     * @param {string | Widget} widget The widget selector for the renderer widget or the renderer widget itself.
     */
    Component.prototype.rendererWidget = function (widget) {
        findComponent(this).
            rendererElement = widget;
    };
    /**
     * Get a style from the styles in a component
     * @param {string} name the style name inside the component style
     */
    Component.prototype.getStyle = function (name) {
        if (this.styles) {
            return this.styles.get(name);
        }
        return null;
    };
    /**
     * DO NOT OVERRIDE!!
     *
     * This function is to build Components inside other Components.
     */
    Component.buildFor = function (parent, props) {
        return buildComponent(this, props, parent);
    };
    /**
     * An option to disable layouts in this component.
     */
    Component.layouts = true;
    /**
     * An option to set the title for this component.
     */
    Component.title = null;
    /**
     * An option to set the body class for this component.
     */
    Component.bodyClass = null;
    /**
     * An option to disable state inheritance in this component.
     */
    Component.inheritState = true;
    /**
     * An option to load css files into this component
     *
     * for example google fonts, cdns...
     */
    Component.links = [];
    /**
     * An option to load js files into this component
     *
     * for example cdns, vanilla libraries...
     */
    Component.scripts = [];
    /**
     * Update mode refers to how the page updates when you
     * made changes to your files.
     *
     * If the updateMode is reinit, it will re-import the js and re init
     * everything without reloading.
     *
     * If the updateMode is refresh, it will refresh the page on file
     * update to sync the changes.
     */
    Component.updateMode = "reinit";
    return Component;
}(eventtarget_1.WidgetEventTarget));
exports.default = Component;
/**
 * @deprecated Use the {@link ref} class decorator instead
 * @see {ref}
 *
 * The Ref class can only be used in Components and
 * it's use is to make a referencable stateful variable for a
 * component to make it re-render when the value is changed.
 */
var Ref = /** @class */ (function () {
    function Ref(value) {
        if (value === void 0) { value = null; }
        if (value != null)
            this.value = value;
    }
    return Ref;
}());
exports.Ref = Ref;
