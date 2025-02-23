var objOfFunctions = {
    string: function (input) { return input.toUpperCase(); },
    number: function (input) { return input.toFixed(2); },
    boolean: function (input) { return (input ? "true" : "false"); },
};
var format = function (input) {
    if (typeof input === "string") {
        return objOfFunctions.string(input);
    }
    else if (typeof input === "number") {
        return objOfFunctions.number(input);
    }
    else {
        return objOfFunctions.boolean(input);
    }
};
