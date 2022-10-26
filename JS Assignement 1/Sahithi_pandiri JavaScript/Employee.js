import { Person } from "./Class1.js";
export class Employee extends Person{
    jobrole
    organization
    id=100
    constructor(){
        super()
        this.jobrole='consultant'
        this.organization='cyberArk'
    }
    printDetails(){
        // super.display();
        // console.log(super.age)
       console.log(super.id)
       console.log(this.id)
    }
}
let e=new Employee();
e.printDetails();