"use strict";
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
var _CanvasNode_x, _CanvasNode_y;
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var CanvasNode = /** @class */ (function () {
    function CanvasNode(position) {
        var _a, _b;
        _CanvasNode_x.set(this, void 0);
        _CanvasNode_y.set(this, void 0);
        __classPrivateFieldSet(this, _CanvasNode_x, (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : 0, "f");
        __classPrivateFieldSet(this, _CanvasNode_y, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : 0, "f");
    }
    Object.defineProperty(CanvasNode.prototype, "position", {
        get: function () {
            return {
                x: __classPrivateFieldGet(this, _CanvasNode_x, "f"),
                y: __classPrivateFieldGet(this, _CanvasNode_y, "f"),
            };
        },
        set: function (pos) {
            __classPrivateFieldSet(this, _CanvasNode_x, pos.x, "f");
            __classPrivateFieldSet(this, _CanvasNode_y, pos.y, "f");
        },
        enumerable: false,
        configurable: true
    });
    CanvasNode.prototype.move = function (x, y) {
        __classPrivateFieldSet(this, _CanvasNode_x, x, "f");
        __classPrivateFieldSet(this, _CanvasNode_y, y, "f");
    };
    return CanvasNode;
}());
_CanvasNode_x = new WeakMap(), _CanvasNode_y = new WeakMap();
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
(0, vitest_1.it)("Should let you set the position", function () {
    var canvasNode = new CanvasNode();
    (0, vitest_1.expect)(canvasNode.position).toEqual({ x: 0, y: 0 });
    canvasNode.position = { x: 10, y: 20 };
    (0, vitest_1.expect)(canvasNode.position).toEqual({ x: 10, y: 20 });
});
