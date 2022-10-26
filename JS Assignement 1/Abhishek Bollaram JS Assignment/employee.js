import {Game} from './classDemo.js'
export class Employee extends Game{
    constructor(){
        super()
        this.organization = 'CyberArk'
        this.empID = 2700
    }

    displayEmployeeDetails(){
        super.displayGameDetails();
        console.log(`organization : ${this.organization} empID : ${this.empID}`)
    }
}