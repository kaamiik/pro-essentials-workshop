var createStringMap = function () {
    return new Map();
};
var stringMap = createStringMap();
stringMap.set("foo", "bar");
stringMap.set("bar", 
// @ts-expect-error
123);
var numberMap = createStringMap();
numberMap.set("foo", 123);
numberMap.set("bar", 
// @ts-expect-error
true);
var objMap = createStringMap();
objMap.set("foo", { a: 123 });
objMap.set("bar", 
// @ts-expect-error
{ b: 123 });
