import { Person } from "./person.js";

export class Employee extends Person{
    jobrole
    organization

    constructor(){
        super()
        this.jobrole="Associate Software Engineer";
        this.organization="CyberArk";
    }

    printDetails(){
        super.display();
        console.log(`Job Role : ${this.jobrole} \n Organization : ${this.organization}`);
    }
}