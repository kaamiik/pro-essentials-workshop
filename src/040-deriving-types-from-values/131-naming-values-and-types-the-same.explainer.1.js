"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
exports.Logger = {
    log: function (message) {
        console.log(message);
    },
    info: function (message) {
        console.info("INFO: ".concat(message));
    },
    warn: function (message) {
        console.warn("WARNING: ".concat(message));
    },
    error: function (message) {
        console.error("ERROR: ".concat(message));
    },
};
