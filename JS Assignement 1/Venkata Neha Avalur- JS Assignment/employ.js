import {Person} from './assignment-2.js'

export class Employee extends Person{
    jobrole
    organization

    // parameterized constructor
    constructor(jobrole,organization){
        super()
        this.jobrole=jobrole
        this.organization=organization
        console.log(`Constructor of Employee Invoked`)
    }

    PrintDetails(){
        super.display()
        console.log(`employee job role : ${this.jobrole} organization : ${this.organization}`)
    }
}