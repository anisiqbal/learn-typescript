
//// Add Function This is your name function //////////

function add (num1: number, num2: number): number{
    return num1 + num2; 
};
console.log(add(2,3));


//// subtract Function This is arrow function ///////

const sub = ( num1: number, num2: number): number => num1 - num2;

console.log(sub(2,3));

///// This is your function Expression /////
const mult = function (num1: number, num2: number): number{
    return num1 * num2;
};

console.log(mult(2,3));




////// Optional Parameter //////

function add1 (num1: number , num2: number, num3?: number ): number{
    return num3? num1 + num2 + num3: num1 + num2; 
} 

console.log(add1(2,3));
console.log(add1(2,3,5));


///// Required parameter ////////


const sub1 = ( num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub1(2,3));
console.log(sub1(2,3,5));



