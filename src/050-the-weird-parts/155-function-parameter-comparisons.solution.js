"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listenToEvent = function (callback) {
    callback("click", 0, 0, 1);
};
listenToEvent(function () { });
listenToEvent(function (event) {
});
listenToEvent(function (event, x, y) {
});
listenToEvent(function (event, x, y, screenId) {
});
