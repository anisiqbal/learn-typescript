"use strict";
// This is a Typescript file: file name is "datatypes.ts"
// mean you pass let variable lname = string mean 'john', and lname = int mean '10' then your code is not run , show error.
// let lname = 'john';
// lname = 10
// string datatype 
let lname1;
lname1 = "Muhammad Anis";
let newname = lname1.toUpperCase();
console.log(newname);
// boolean datatype
function getStatus() {
    let status;
    status = true;
    console.log(status);
}
getStatus();
// numeric datatype
function getSalary() {
    let amount;
    amount = 300000;
    console.log(amount);
}
getSalary();
// function getBuy(){ //{} curly brasis is show blocked scope
//     let rupees: number;
//     rupees = 400000;
//     console.log(rupees);
// }
// getBuy();
function getAmount() {
    let rupees;
    rupees = 500000;
    console.log(rupees);
}
getAmount();
