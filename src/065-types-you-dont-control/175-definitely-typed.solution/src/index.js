"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diff_1 = require("diff");
var message = "Hello, world!";
var secondMessage = "Goodbye, world!";
var diff = diff_1.default.diffChars(message, secondMessage);
