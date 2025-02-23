"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes = {
    "/": {
        component: "Home",
    },
    "/about": {
        component: "About",
        // @ts-expect-error
        search: "?foo=bar",
    },
};
// @ts-expect-error
routes["/"].component = "About";
