"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createRandomNumber = function () {
    var num = Math.random();
    if (num > 0.5) {
        return {
            success: true,
            data: 123,
        };
    }
    return {
        success: false,
        error: new Error("Something went wrong"),
    };
};
var result = createRandomNumber();
if (result.success) {
    console.log(result.data);
}
else {
    console.error(result.error);
}
