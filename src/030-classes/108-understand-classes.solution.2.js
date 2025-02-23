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
(0, vitest_1.it)("Should store some basic properties", function () {
    var canvasNode = new CanvasNode();
    (0, vitest_1.expect)(canvasNode.x).toEqual(0);
    (0, vitest_1.expect)(canvasNode.y).toEqual(0);
    // @ts-expect-error Property is readonly
    canvasNode.x = 10;
    // @ts-expect-error Property is readonly
    canvasNode.y = 20;
});
