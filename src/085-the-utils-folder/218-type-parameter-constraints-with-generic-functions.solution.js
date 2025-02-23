"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var UNKNOWN_CODE = 8000;
var addCodeToError = function (error) {
    var _a;
    return __assign(__assign({}, error), { code: (_a = error.code) !== null && _a !== void 0 ? _a : UNKNOWN_CODE });
};
(0, vitest_1.it)("Should accept a standard error", function () {
    var errorWithCode = addCodeToError(new Error("Oh dear!"));
    console.log(errorWithCode.message);
});
(0, vitest_1.it)("Should accept a custom error", function () {
    var customErrorWithCode = addCodeToError({
        message: "Oh no!",
        code: 123,
        filepath: "/",
    });
});
(0, vitest_1.it)("Should fail if you pass something without a message in", function () {
    addCodeToError(
    // @ts-expect-error
    {
        code: 4000,
    });
});
