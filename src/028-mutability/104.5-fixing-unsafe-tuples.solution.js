var myHouse = [0, 0];
var dangerousFunction = function (arrayOfNumbers) {
    arrayOfNumbers.pop();
    arrayOfNumbers.pop();
};
dangerousFunction(
// @ts-expect-error
myHouse);
