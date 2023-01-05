"use strict";
function add(a, b, num3) {
    return num3 ? a + b + num3 : a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 4));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 1));
const mult = function (num1, num2) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 2);
}
let numbers = [1, 2, 3];
console.log(add2(2, 3));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
//# sourceMappingURL=functions.js.map