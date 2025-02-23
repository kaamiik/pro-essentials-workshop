"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var CanvasNode = /** @class */ (function () {
    function CanvasNode(position) {
        var _a, _b;
        this.x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : 0;
        this.y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : 0;
    }
    Object.defineProperty(CanvasNode.prototype, "position", {
        get: function () {
            return {
                x: this.x,
                y: this.y,
            };
        },
        enumerable: false,
        configurable: true
    });
    CanvasNode.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return CanvasNode;
}());
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
