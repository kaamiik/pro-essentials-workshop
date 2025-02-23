"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var CanvasNode = /** @class */ (function () {
    function CanvasNode() {
        this.x = 0;
        this.y = 0;
    }
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
