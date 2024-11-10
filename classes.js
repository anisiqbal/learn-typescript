"use strict";
// creating a class /////
class Employee {
    ///// Assign all properties using 'constructor'.
    //// In typescript you can have either 'Default Constructor' OR 'Parametrized Constructor'.
    //// How to Add constructor function //////
    constructor(id, name, address) {
        this.address = address;
        this.name = name;
        this.id = id;
    }
    //// Add method to your class /////
    getNameWithAddress() {
        //// Vriables can replace with curly brasis{}.
        return `${this.name} stays at ${this.address}`;
    }
}
;
let john = new Employee(1, "john", "Highway 71");
let address = john.getNameWithAddress();
// john.id = 10;
// john.name = 'john';
// john.address = ' Highway 71';
console.log(address);
