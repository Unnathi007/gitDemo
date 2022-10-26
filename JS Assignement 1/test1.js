import { Person } from "./classdemo.js";

export class Employee extends Person{
    constructor(){
        super();
        this.jobrole="consultant"
        this.organization="Cyberark"
    }
    printDetails(){
        super.display();
        console.log(`${this.jobrole} ${this.organization}`)
    }

}