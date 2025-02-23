function printNamesReadonly(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
function printNamesMutable(names) {
    for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
        var name_2 = names_2[_i];
        console.log(name_2);
    }
}
// Mutable arrays are assignable to readonly arrays
var mutableNames = ["John", "Jane", "Mike"];
printNamesReadonly(mutableNames);
printNamesMutable(mutableNames);
// Readonly arrays are NOT assignable to mutable arrays
var readonlyNames = ["John", "Jane", "Mike"];
printNamesReadonly(readonlyNames);
printNamesMutable(readonlyNames);
