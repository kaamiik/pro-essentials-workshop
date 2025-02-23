"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
function sum(valuesOrA, b) {
    if (typeof valuesOrA === "object") {
        return valuesOrA.a + valuesOrA.b;
    }
    return valuesOrA + b;
}
(0, vitest_1.it)("Should work when passed an object", function () {
    (0, vitest_1.expect)(sum({ a: 1, b: 2 })).toEqual(3);
});
(0, vitest_1.it)("Should work when passed two numbers", function () {
    (0, vitest_1.expect)(sum(1, 2)).toEqual(3);
});
(0, vitest_1.it)("Should error in TS when passed incorrect arguments", function () {
    sum(
    // @ts-expect-error too many arguments
    { a: 1, b: 2 }, 2);
    sum(
    // @ts-expect-error not enough arguments
    1);
});
