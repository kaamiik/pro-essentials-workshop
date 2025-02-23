// API's are NOT transformed
var str = "Hello, world!";
str.replaceAll("Hello", "Goodbye");
// Syntax IS transformed:
var myFunc = function (input) {
    // Optional chaining
    var search = input === null || input === void 0 ? void 0 : input.search;
    // Nullish coalescing
    var defaultedSearch = search !== null && search !== void 0 ? search : "Hello";
};
