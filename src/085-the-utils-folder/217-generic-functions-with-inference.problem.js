"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var uniqueArray = function (arr) {
    return Array.from(new Set(arr));
};
(0, vitest_1.it)("returns an array of unique values", function () {
    var result = uniqueArray([1, 1, 2, 3, 4, 4, 5]);
    (0, vitest_1.expect)(result).toEqual([1, 2, 3, 4, 5]);
});
(0, vitest_1.it)("should work on strings", function () {
    var result = uniqueArray(["a", "b", "b", "c", "c", "c"]);
    (0, vitest_1.expect)(result).toEqual(["a", "b", "c"]);
});
