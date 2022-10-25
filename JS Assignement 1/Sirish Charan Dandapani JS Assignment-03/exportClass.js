import { Person } from './classDemo4.js';
export class Employee extends Person{
    jobrole
    organization
    constructor(){
        super()
        this.jobrole='consultant'
        this.organization='cyberark'
    }

    printDetails(){
       super.display();
       console.log(`Ogranization: ${this.organization} , JobRole : ${this.jobrole} `);

    }
}