"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasNode = /** @class */ (function () {
    function CanvasNode(x, y) {
        this.x = x;
        this.y = y;
    }
    CanvasNode.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
        return this;
    };
    return CanvasNode;
}());
var node = new CanvasNode(0, 0).move(10, 20).move(30, 40);
