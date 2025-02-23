"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
var obj = {};
obj.a = 1;
obj.b = 2;
// 2
var menuConfig = {
    home: {
        label: "Home",
        link: "/home",
    },
    services: {
        label: "Services",
        children: [
            {
                label: "Consulting",
                link: "/services/consulting",
            },
            {
                label: "Development",
                link: "/services/development",
            },
        ],
    },
};
// 3
var element = document.getElementById("app");
