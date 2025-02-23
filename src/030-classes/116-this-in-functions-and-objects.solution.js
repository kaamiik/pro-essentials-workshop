"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
function add() {
    return this.x + this.y;
}
function setValues(x, y) {
    this.x = x;
    this.y = y;
}
(0, vitest_1.it)("Should add the numbers together", function () {
    var calculator = {
        x: 0,
        y: 0,
        add: add,
        setValues: setValues,
    };
    calculator.setValues(1, 2);
    (0, vitest_1.expect)(calculator.add()).toEqual(3);
});
