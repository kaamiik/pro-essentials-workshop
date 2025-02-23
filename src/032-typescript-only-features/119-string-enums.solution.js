"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
})(Method || (Method = {}));
var request = function (url, method) {
    // ...
};
(0, vitest_1.it)("Should force you to use the enum values", function () {
    request("https://example.com", 
    // @ts-expect-error
    "GET");
    request("https://example.com", 
    // @ts-expect-error
    "POST");
    request("https://example.com", Method.GET);
    request("https://example.com", Method.POST);
});
(0, vitest_1.it)("Should give you an error if you pass a different enum with the same value", function () {
    var Method2;
    (function (Method2) {
        Method2["GET"] = "GET";
        Method2["POST"] = "POST";
        Method2["PUT"] = "PUT";
        Method2["DELETE"] = "DELETE";
    })(Method2 || (Method2 = {}));
    request("https://example.com", 
    // @ts-expect-error
    Method2.GET);
});
