"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var logId = function (obj) {
    console.log(obj.id);
};
var logName = function (obj) {
    console.log(obj.name);
};
var loggers = [logId, logName];
var logAll = function (obj) {
    loggers.forEach(function (func) { return func(obj); });
};
(0, vitest_1.it)("should log id and name of an object", function () {
    var consoleSpy = vitest_1.vitest.spyOn(console, "log");
    logAll({ id: "1", name: "Waqas" });
    (0, vitest_1.expect)(consoleSpy).toHaveBeenCalledWith("1");
    (0, vitest_1.expect)(consoleSpy).toHaveBeenCalledWith("Waqas");
});
