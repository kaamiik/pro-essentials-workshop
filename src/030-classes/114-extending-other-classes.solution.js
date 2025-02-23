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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Shape_x, _Shape_y, _CanvasNode_viewMode;
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var Shape = /** @class */ (function () {
    function Shape(options) {
        var _a, _b;
        _Shape_x.set(this, void 0);
        _Shape_y.set(this, void 0);
        __classPrivateFieldSet(this, _Shape_x, (_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 0, "f");
        __classPrivateFieldSet(this, _Shape_y, (_b = options === null || options === void 0 ? void 0 : options.y) !== null && _b !== void 0 ? _b : 0, "f");
    }
    Object.defineProperty(Shape.prototype, "position", {
        get: function () {
            return {
                x: __classPrivateFieldGet(this, _Shape_x, "f"),
                y: __classPrivateFieldGet(this, _Shape_y, "f"),
            };
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.move = function (x, y) {
        __classPrivateFieldSet(this, _Shape_x, x, "f");
        __classPrivateFieldSet(this, _Shape_y, y, "f");
    };
    return Shape;
}());
_Shape_x = new WeakMap(), _Shape_y = new WeakMap();
var CanvasNode = /** @class */ (function (_super) {
    __extends(CanvasNode, _super);
    function CanvasNode(options) {
        var _a;
        var _this = _super.call(this, options) || this;
        _CanvasNode_viewMode.set(_this, void 0);
        __classPrivateFieldSet(_this, _CanvasNode_viewMode, (_a = options === null || options === void 0 ? void 0 : options.viewMode) !== null && _a !== void 0 ? _a : "visible", "f");
        return _this;
    }
    CanvasNode.prototype.hide = function () {
        __classPrivateFieldSet(this, _CanvasNode_viewMode, "hidden", "f");
    };
    Object.defineProperty(CanvasNode.prototype, "isHidden", {
        get: function () {
            return __classPrivateFieldGet(this, _CanvasNode_viewMode, "f") === "hidden";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasNode.prototype, "isSelected", {
        get: function () {
            return __classPrivateFieldGet(this, _CanvasNode_viewMode, "f") === "selected";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasNode.prototype, "isVisible", {
        get: function () {
            return __classPrivateFieldGet(this, _CanvasNode_viewMode, "f") === "visible";
        },
        enumerable: false,
        configurable: true
    });
    return CanvasNode;
}(Shape));
_CanvasNode_viewMode = new WeakMap();
(0, vitest_1.it)("Should be able to move", function () {
    var canvasNode = new CanvasNode();
    (0, vitest_1.expect)(canvasNode.position).toEqual({ x: 0, y: 0 });
    canvasNode.move(10, 20);
    (0, vitest_1.expect)(canvasNode.position).toEqual({ x: 10, y: 20 });
});
(0, vitest_1.it)("Should be able to receive an initial position", function () {
    var canvasNode = new CanvasNode({
        x: 10,
        y: 20,
    });
    (0, vitest_1.expect)(canvasNode.position).toEqual({ x: 10, y: 20 });
});
(0, vitest_1.it)("Should not be able to access x and y from the outside", function () {
    var canvasNode = new CanvasNode();
    (0, vitest_1.expect)(
    // @ts-expect-error
    canvasNode.x).toEqual(undefined);
    (0, vitest_1.expect)(
    // @ts-expect-error
    canvasNode.y).toEqual(undefined);
});
(0, vitest_1.it)('Should handle "hidden" view mode', function () {
    var canvasNode = new CanvasNode();
    (0, vitest_1.expect)(canvasNode.isVisible).toEqual(true);
    (0, vitest_1.expect)(canvasNode.isHidden).toEqual(false);
    (0, vitest_1.expect)(canvasNode.isSelected).toEqual(false);
    canvasNode.hide();
    (0, vitest_1.expect)(canvasNode.isVisible).toEqual(false);
    (0, vitest_1.expect)(canvasNode.isHidden).toEqual(true);
    (0, vitest_1.expect)(canvasNode.isSelected).toEqual(false);
});
