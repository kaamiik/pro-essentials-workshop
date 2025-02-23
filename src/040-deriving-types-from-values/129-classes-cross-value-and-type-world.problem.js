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
var positionFromCanvasNode = function (node) {
    return {
        x: node.x,
        y: node.y,
    };
};
(0, vitest_1.describe)("positionFromCanvasNode", function () {
    (0, vitest_1.it)("Should return the position of the node", function () {
        var canvasNode = new CanvasNode();
        (0, vitest_1.expect)(positionFromCanvasNode(canvasNode)).toEqual({ x: 0, y: 0 });
        canvasNode.move(10, 20);
        (0, vitest_1.expect)(positionFromCanvasNode(canvasNode)).toEqual({ x: 10, y: 20 });
    });
});
