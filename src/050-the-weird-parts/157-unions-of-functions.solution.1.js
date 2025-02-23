var objOfFunctions = {
    string: function (input) { return input.toUpperCase(); },
    number: function (input) { return input.toFixed(2); },
    boolean: function (input) { return (input ? "true" : "false"); },
};
var format = function (input) {
    var inputType = typeof input;
    var formatter = objOfFunctions[inputType];
    return formatter(input);
};
