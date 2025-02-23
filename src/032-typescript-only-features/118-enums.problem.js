"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
};
function log(opts) {
    if (opts.level >= opts.globalLogLevel) {
        console.log(opts.message);
    }
}
(0, vitest_1.it)("Should log if the level is higher than the global log level", function () {
    var consoleLog = vitest_1.vi.spyOn(console, "log");
    log({
        globalLogLevel: LogLevel.INFO,
        level: LogLevel.ERROR,
        message: "Hello!",
    });
    (0, vitest_1.expect)(consoleLog).toHaveBeenCalledWith("Hello!");
});
(0, vitest_1.it)("Should log if the level is equal to the global log level", function () {
    var consoleLog = vitest_1.vi.spyOn(console, "log");
    log({
        globalLogLevel: LogLevel.INFO,
        level: LogLevel.INFO,
        message: "Hello!",
    });
    (0, vitest_1.expect)(consoleLog).toHaveBeenCalledWith("Hello!");
});
(0, vitest_1.it)("Should not log if the level is lower than the global log level", function () {
    var consoleLog = vitest_1.vi.spyOn(console, "log");
    log({
        globalLogLevel: LogLevel.INFO,
        level: LogLevel.DEBUG,
        message: "Hello!",
    });
    (0, vitest_1.expect)(consoleLog).not.toHaveBeenCalled();
});
(0, vitest_1.it)("Should give you a TS error if you pass an invalid log level", function () {
    log({
        globalLogLevel: LogLevel.INFO,
        // @ts-expect-error
        level: 123,
        message: "Hello!",
    });
});
