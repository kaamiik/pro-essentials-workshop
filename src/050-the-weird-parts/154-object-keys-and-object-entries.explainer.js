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
var users = [
    {
        name: "Waqas",
    },
    {
        name: "Zain",
    },
];
var usersWithIds = users.map(function (user, index) { return (__assign(__assign({}, user), { id: index, age: 30 })); });
var userKeys = usersWithIds.map(function (user) {
    var keys = Object.keys(user);
    return keys;
});
