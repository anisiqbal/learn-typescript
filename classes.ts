// creating a class /////

class Employee {

    //// How to Add properties //////

    id: number; 
    name : string;
    address: string;

    ///// Assign all properties using 'constructor'.
    //// In typescript you can have either 'Default Constructor' OR 'Parametrized Constructor'.

    //// How to Add constructor function //////

    constructor( id : number, name : string, address : string ) {
        this.address = address;
        this.name = name;
        this.id = id;
    }

    //// Add method to your class /////

    getNameWithAddress() : string{
        //// Vriables can replace with curly brasis{}.
        return `${this.name} stays at ${this.address}`;
    }

};



let john = new Employee(1, "john", "Highway 71");
let address = john.getNameWithAddress();

// john.id = 10;
// john.name = 'john';
// john.address = ' Highway 71';
console.log(address);

