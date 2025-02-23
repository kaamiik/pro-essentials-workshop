"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var CanvasNode = /** @class */ (function () {
    function CanvasNode() {
        this.x = 0;
        this.y = 0;
    }
    CanvasNode.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return CanvasNode;
}());
(0, vitest_1.it)("Should be able to move", function () {
    var canvasNode = new CanvasNode();
    (0, vitest_1.expect)(canvasNode.x).toEqual(0);
    (0, vitest_1.expect)(canvasNode.y).toEqual(0);
    canvasNode.move(10, 20);
    (0, vitest_1.expect)(canvasNode.x).toEqual(10);
    (0, vitest_1.expect)(canvasNode.y).toEqual(20);
});
(0, vitest_1.it)("Should be able to receive an initial position", function () {
    var canvasNode = new CanvasNode({
        x: 10,
        y: 20,
    });
    (0, vitest_1.expect)(canvasNode.x).toEqual(10);
    (0, vitest_1.expect)(canvasNode.y).toEqual(20);
});
