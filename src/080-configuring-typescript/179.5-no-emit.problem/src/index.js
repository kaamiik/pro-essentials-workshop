"use strict";
// How do we use TypeScript as a linter, instead of a transpiler?
// We want to prevent it from emitting .js files into ./dist.
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunc = void 0;
var myFunc = function () {
    console.log("Hello!");
};
exports.myFunc = myFunc;
