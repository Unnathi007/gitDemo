import {person} from './classDemo.js';

export class Employee extends person{
    jobrole;
    organization

    constructor()
    {
        super();
        this.jobrole = "Software Engineer";
        this.organization = "CyberArk";
    }

    printDetails()
    {
        console.log(`name : ${this.pname} age: ${this.age} jobRole: ${this.jobrole} organzation: ${this.organization}`);
    }
}