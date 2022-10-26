import { Person } from './funcoverloading.js';

export function function1(){
    console.log("in function 1")
}
export function function2(){
    console.log("in function 2")
}



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

        console.log(`Job Role : ${this.jobrole} Organization : ${this.organization}`)

    }



}