"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var handleFormData = function (e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var value = Object.fromEntries(data.entries());
    return value;
};
(0, vitest_1.it)("Should handle a form submit", function () {
    var form = document.createElement("form");
    form.innerHTML = "\n    <input name=\"name\" value=\"John Doe\" />\n  ";
    form.onsubmit = function (e) {
        var value = handleFormData(e);
        (0, vitest_1.expect)(value).toEqual({ name: "John Doe" });
    };
    form.requestSubmit();
    vitest_1.expect.assertions(1);
});
