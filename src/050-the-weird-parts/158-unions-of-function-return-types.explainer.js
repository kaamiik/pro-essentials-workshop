var idToUppercase = function (obj) {
    return obj.id.toUpperCase();
};
var idToInt = function (obj) {
    return parseInt(obj.id);
};
var funcs = [idToUppercase, idToInt];
var resolveAll = function (obj) {
    return funcs.map(function (func) {
        return func(obj);
    });
};
var result = resolveAll({
    id: "123",
});
