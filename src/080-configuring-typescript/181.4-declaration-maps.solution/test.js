"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./dist/index.js");
(0, index_js_1.myFunc)("Hello world");
(0, index_js_1.myFunc)(
// @ts-expect-error
123);
