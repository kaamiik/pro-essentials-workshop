"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var findUsersByName = function (searchParams, users) {
    if (searchParams.name) {
        return users.filter(function (user) { return user.name.includes(searchParams.name); });
    }
    return users;
};
(0, vitest_1.it)("Should find the exact name", function () {
    var result = findUsersByName({
        name: "Bob",
    }, [
        {
            id: "1",
            name: "Bob",
        },
        {
            id: "2",
            name: "Alice",
        },
    ]);
    (0, vitest_1.expect)(result).toEqual([
        {
            id: "1",
            name: "Bob",
        },
    ]);
});
