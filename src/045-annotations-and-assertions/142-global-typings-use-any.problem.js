"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var getObj = function () {
    var obj = JSON.parse('{ "a": 123, "b": 456 }');
    return obj;
};
(0, vitest_1.it)("Should return an obj", function () {
    var obj = getObj();
    (0, vitest_1.expect)(obj.b).toEqual(456);
    (0, vitest_1.expect)(
    // @ts-expect-error c doesn't exist on obj
    obj.c).toEqual(undefined);
});
