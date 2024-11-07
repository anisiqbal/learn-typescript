"use strict";
//// Add Function This is your name function //////////
function add(num1, num2) {
    return num1 + num2;
}
;
console.log(add(2, 3));
//// subtract Function This is arrow function ///////
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
///// This is your function Expression /////
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
////// Optional Parameter //////
function add1(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add1(2, 3));
console.log(add1(2, 3, 5));
