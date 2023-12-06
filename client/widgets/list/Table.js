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
exports.Table = exports.TableRow = exports.TableController = void 0;
var Controller_1 = require("../../data/Controller");
var Widget_1 = require("../main/Widget");
var ListBuilder_1 = require("./ListBuilder");
var TableController = /** @class */ (function (_super) {
    __extends(TableController, _super);
    function TableController(_a) {
        var _b = _a === void 0 ? { columns: [], items: [] } : _a, columns = _b.columns, items = _b.items;
        var _this = _super.call(this, items) || this;
        _this.items = [];
        _this.columns = new Controller_1.ArrayController(columns);
        return _this;
    }
    TableController.prototype.setColumns = function (columns) {
        this.columns.set(columns);
        return this;
    };
    TableController.prototype.addColumn = function (columns) {
        this.columns.push(columns);
        return this;
    };
    TableController.prototype.get = function () {
        return this.transformItems(_super.prototype.get.call(this));
    };
    TableController.prototype.transformItems = function (items) {
        var _this = this;
        return items.map(function (item) { return _this.transformItem(item); });
    };
    TableController.prototype.transformItem = function (item) {
        var transformedItem = this.columns.get().map(function (column) {
            return item[column] !== undefined ? item[column] : null;
        });
        transformedItem.original = item;
        return transformedItem;
    };
    return TableController;
}(Controller_1.ArrayController));
exports.TableController = TableController;
var defaultGrid = function () { return ({
    element: { name: 'table' },
    class: 'table',
    itemsStateName: '$items_table',
    template: function (item) { return new TableRow({ values: item, originalItem: item.original }); },
    columns: [],
    items: [],
    empty: true
}); };
function _initTableColumns(table, columns) {
    if (table.options.empty !== false)
        table.find('thead').remove('*');
    var tr = new Widget_1.default({ element: { name: 'tr' } });
    columns.forEach(function (column) {
        var widget = new Widget_1.default({ element: { name: 'th' } });
        if (typeof column == 'string') {
            widget.text(column);
        }
        else if (column instanceof Widget_1.default) {
            widget.add(column);
        }
        tr.add(widget);
    });
    table.find('thead').add(tr);
}
function _initTable(table, state) {
    if (state[table.options.itemsStateName] && Array.isArray(state[table.options.itemsStateName])) {
        if (table.options.empty !== false)
            table.find('tbody').remove('*');
        state[table.options.itemsStateName].forEach(function (item, index) {
            table.appendItem(item, index);
        });
    }
    var columnsKey = table.options.itemsStateName + '_columns';
    var columns = state[columnsKey];
    function updateColumns(newColumns) {
        var _a;
        table.setStore((_a = {}, _a[columnsKey] = newColumns, _a));
        _initTableColumns(table, newColumns);
    }
    if (!columns && table.options.columns) {
        columns = table.options.columns;
        if (columns instanceof TableController || columns instanceof Controller_1.default) {
            var columnsToWatch_1 = columns instanceof TableController ? columns.columns : columns;
            if (!columnsToWatch_1.isTakenBy(table)) {
                columnsToWatch_1.take(table);
                columnsToWatch_1.onChange(function () { return updateColumns(columnsToWatch_1.get()); });
                updateColumns(columnsToWatch_1.get());
            }
        }
        else {
            updateColumns(columns);
        }
    }
}
function _initTableRow(row, options) {
    if (options.values) {
        options.values.forEach(function (col) {
            if (!col)
                return;
            if (typeof col == "function")
                col = col(options.originalItem, options.values);
            var widget = new Widget_1.default({ element: { name: !(col instanceof Widget_1.default) && typeof col == 'object' && col.type ? col.type : 'td' } });
            if (!(col instanceof Widget_1.default) && col !== null && typeof col == 'object' && col.value) {
                col = col.value;
            }
            if (typeof col == 'string') {
                widget.text(col);
            }
            else if (col instanceof Widget_1.default) {
                widget.add(col);
            }
            row.add(widget);
        });
    }
}
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(options) {
        var _this = _super.call(this, __assign({ element: { name: 'tr' } }, options)) || this;
        _initTableRow(_this, options);
        return _this;
    }
    TableRow.prototype._optionChange = function (options) {
        _initTableRow(this, options);
    };
    return TableRow;
}(Widget_1.default));
exports.TableRow = TableRow;
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(selectedOptions) {
        var _a;
        var _this = this;
        var children = [new Widget_1.default({ element: { name: 'thead' } }), new Widget_1.default({ element: { name: 'tbody' } })];
        if (Array.isArray(selectedOptions.children))
            (_a = selectedOptions.children).unshift.apply(_a, children);
        var options = __assign(__assign(__assign({}, defaultGrid()), { children: children }), selectedOptions);
        if (options.controller) {
            options.items = options.controller;
            options.columns = options.controller;
        }
        _this = _super.call(this, options, _initTable) || this;
        if (options.controller)
            _this.controller = options.controller;
        return _this;
    }
    Table.prototype.appendItem = function (item, index) {
        return this.find('tbody').add(this._fromTemplate(item, index));
    };
    Table.prototype.onItems = function (event, handler) {
        return this.onItems(event, handler);
    };
    return Table;
}(ListBuilder_1.default));
exports.Table = Table;
