"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// CODE
var isProblemOrSolution = function (filename) {
    var splitFilename = filename.split(".");
    var finalIndex = splitFilename.length - 1;
    var extension = splitFilename[finalIndex];
    var isProblem = extension === "problem";
    var isSolution = extension === "solution";
    return isProblem || isSolution;
};
// CODE
var users = [
    {
        name: "Waqas",
    },
    {
        name: "Zain",
    },
];
var usersWithIds = users.map(function (user, index) { return (__assign(__assign({}, user), { id: index })); });
