import { Person } from "./person-export.js"

export class Employee extends Person{
    role
    organization

    constructor(){
        super()
        this.role='tester'
        this.organization='cyberark'
    }

    printDetails(){
        super.display()
        console.log(`role : ${this.role} Organization : ${this.organization}`);

    }
}

