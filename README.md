///// START TYPESCRIPT ////////

what is Angular?
. A UI framework built by google.
. A component-based framework for building scalable app.
. Provided collection of libraries to cover features like Routing,Forms.

-> Framework Vs Liabraries?
what is Framework?
. Framework generally contains  set of liabraries.
. You can extend the frameworks.
. some example are Angular, .Net , ionic, Expressjs.

-> what is Liabraries?
. Libraries generally perform specific operation.
. you can combine multiple libraries to build apps.
. some example are React, MomentJS, Lodash.

-> Features of Angular.
. Template 
. Data Binding
. Forms 
. Routing 
. Observables
. PWA

-> Introduction to Typescript.
. why Typescript ?
. compiles to javascript.
. keeps your code evergreen 
. supported by all major libraries and FrameWorks.

-> installing and creating First Typescript program.
. install Node 
. Use latest version of Nodejs
. `npm init` to create a package.json
. intall Typescript "npm i typescript"
. initialize Typescript
. "tsc --init" if error type this command `npm install -g typescript` after same run command `tsc --init`.

- first you create a file with the name of "datatypes.ts".
- 2nd you create a file with the name of "test.js".

-> // test.js File of JAVASCRIPT FILE //

let fname = 'test'
fname = 10;
// This is a javascript file: file name is "test.js"
// mean you pass let variable fname = string , and fname = int then your code is run.

-> // datatypes.ts File of Typescript File //

let lname = 'john';
// lname = 10
// This is a Typescript file: file name is "datatypes.ts"
// mean you pass let variable lname = string mean let lname = 'john';, and lname = int mean '10' then your code is not run , show error.

after that ....

You pass command 'tsc' in Terminal.
then create file automatically with the name of datatypes.js.
typescript comes with its own compiler got TSC so rum command of "tsc".
like..

"use strict";
let lname = 'john';
lname = 10;

// This is a datatypes file: file name is "datatypes.js"
// mean you pass let variable lname = string mean let lname = 'john';, and lname = int mean '10' then your code is run.


DATA TYPES:::

=> Agenda:
- Data Types
- Type inference
- Union and Intersection Types
- Generics
- Literal Types

=> Data Types:
. String
. number
. boolean 
. array 
. enum 
. tuple
. any
. void
. never

//////// Data Types ////////

let lname : string;

lname = "Muhammad Anis";

let newname = lname.toUpperCase();

console.log(newname);


=> 1st command "tsc" mean your typescript code compile javascript code.
   mean first you pass command in terminal "tsc" that answer in file of datatypes.js

then

=> 2nd command node dataypes answer is show in terminal.
   mean 2nd you pass command in terminal "node datatypes" that answer in Terminal.

=> Let & Const is blocked scope variable 

. let value is changable 

. const value is not changable


// boolean datatype
function getStatus() {
    let status: boolean;
    status = true;
    console.log(status);
}
getStatus();


// numeric datatype
function getSalary() {
    let amount: number;
    amount = 300000;
    console.log(amount);
}
getSalary();


function getBuy(){ //{} curly brasis is show blocked scope
    let rupees: number;
    rupees = 400000;
    console.log(rupees);
}
getBuy();





