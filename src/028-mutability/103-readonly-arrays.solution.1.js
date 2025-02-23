function printNames(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
    // @ts-expect-error
    names.push("John");
    // @ts-expect-error
    names[0] = "Billy";
}
