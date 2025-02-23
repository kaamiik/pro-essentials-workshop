"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var hasDataAndId = function (value) {
    return (typeof value === "object" &&
        value !== null &&
        "data" in value &&
        typeof value.data === "object" &&
        value.data !== null &&
        "id" in value.data &&
        typeof value.data.id === "string");
};
var parseValue = function (value) {
    if (hasDataAndId(value)) {
        return value.data.id;
    }
    throw new Error("Parsing error!");
};
var parseValueAgain = function (value) {
    if (hasDataAndId(value)) {
        return value.data.id;
    }
    throw new Error("Parsing error!");
};
(0, vitest_1.describe)("parseValue", function () {
    (0, vitest_1.it)("Should handle a { data: { id: string } }", function () {
        var result = parseValue({
            data: {
                id: "123",
            },
        });
        (0, vitest_1.expect)(result).toBe("123");
    });
    (0, vitest_1.it)("Should error when anything else is passed in", function () {
        (0, vitest_1.expect)(function () { return parseValue("123"); }).toThrow("Parsing error!");
        (0, vitest_1.expect)(function () { return parseValue(123); }).toThrow("Parsing error!");
    });
});
(0, vitest_1.describe)("parseValueAgain", function () {
    (0, vitest_1.it)("Should handle a { data: { id: string } }", function () {
        var result = parseValueAgain({
            data: {
                id: "123",
            },
        });
        (0, vitest_1.expect)(result).toBe("123");
    });
    (0, vitest_1.it)("Should error when anything else is passed in", function () {
        (0, vitest_1.expect)(function () { return parseValueAgain("123"); }).toThrow("Parsing error!");
        (0, vitest_1.expect)(function () { return parseValueAgain(123); }).toThrow("Parsing error!");
    });
});
