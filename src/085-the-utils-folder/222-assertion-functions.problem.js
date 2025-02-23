"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
function assertIsAdminUser(user) {
    if (!("roles" in user)) {
        throw new Error("User is not an admin");
    }
}
var handleRequest = function (user) {
    assertIsAdminUser(user);
    user.roles;
};
(0, vitest_1.it)("Should error if you pass a user", function () {
    (0, vitest_1.expect)(function () {
        handleRequest({ id: "1", name: "Bob" });
    }).toThrowError("User is not an admin");
});
(0, vitest_1.it)("Should pass if you pass an admin user", function () {
    handleRequest({ id: "1", name: "Bob", roles: ["admin"] });
});
