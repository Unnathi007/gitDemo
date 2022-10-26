import {Person} from "./class.js";

export class Employee extends Person{
    jobRole
    organization

    constructor(){
        super()
        this.jobRole="Associate Software Engineer"
        this.organization="CyberArk"
    }

    printFun(){
        console.log(`Role in ${this.organization} is ${this.jobRole}`)
    }
}