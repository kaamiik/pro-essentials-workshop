"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CODE
var createStringMap = function () {
    return new Map();
};
// TESTS
var numberMap = createStringMap();
numberMap.set("foo", 123);
numberMap.set("bar", 
// @ts-expect-error
true);
var objMap = createStringMap();
objMap.set("foo", { a: 123 });
objMap.set("bar", 
// @ts-expect-error
{ b: 123 });
var unknownMap = createStringMap();
