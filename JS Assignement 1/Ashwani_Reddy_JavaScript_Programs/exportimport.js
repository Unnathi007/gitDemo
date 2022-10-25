import {Person} from './export.js'

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
        console.log(`Job Role : ${this.jobrole}\n Organization : ${this.organization}\n`)
    }
}
