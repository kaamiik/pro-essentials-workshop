"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key);
};
(0, vitest_1.it)("Should work on string keys", function () {
    var obj = {
        foo: "bar",
    };
    (0, vitest_1.expect)(hasKey(obj, "foo")).toBe(true);
    (0, vitest_1.expect)(hasKey(obj, "bar")).toBe(false);
});
(0, vitest_1.it)("Should work on number keys", function () {
    var obj = {
        1: "bar",
    };
    (0, vitest_1.expect)(hasKey(obj, 1)).toBe(true);
    (0, vitest_1.expect)(hasKey(obj, 2)).toBe(false);
});
(0, vitest_1.it)("Should work on symbol keys", function () {
    var _a;
    var fooSymbol = Symbol("foo");
    var barSymbol = Symbol("bar");
    var obj = (_a = {},
        _a[fooSymbol] = "bar",
        _a);
    (0, vitest_1.expect)(hasKey(obj, fooSymbol)).toBe(true);
    (0, vitest_1.expect)(hasKey(obj, barSymbol)).toBe(false);
});
