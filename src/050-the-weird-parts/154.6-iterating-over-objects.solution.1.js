"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
function printUser(user) {
    Object.keys(user).forEach(function (key) {
        console.log(user[key]);
    });
}
(0, vitest_1.it)("Should log all the keys of the user", function () {
    var consoleSpy = vitest_1.vitest.spyOn(console, "log");
    printUser({
        id: 1,
        name: "Waqas",
    });
    (0, vitest_1.expect)(consoleSpy).toHaveBeenCalledWith(1);
    (0, vitest_1.expect)(consoleSpy).toHaveBeenCalledWith("Waqas");
});
