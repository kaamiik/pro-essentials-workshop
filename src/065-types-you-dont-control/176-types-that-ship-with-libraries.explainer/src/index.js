"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var user = zod_1.z.object({
    name: zod_1.z.string(),
});
