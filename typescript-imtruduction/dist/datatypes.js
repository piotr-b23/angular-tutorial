"use strict";
let fname;
fname = "John";
let newname = fname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["test", "test"];
let depList;
depList = [12, 13, 15, 16, 18];
let resultArray = depList.filter((x) => x > 13);
let sum = depList.reduce((acc, num) => acc + num);
console.log(resultArray);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[1]);
let departament;
departament = "IT";
departament = 10;
//# sourceMappingURL=datatypes.js.map