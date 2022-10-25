import { Person } from "./class.js";
export class employee extends Person{
    jobrole
    org
    constructor(){
        super()
        this.jobrole='Admin'
        this.org='ADP'
    }
    printdetails(){
        super.display()
        console.log(this.jobrole)
        console.log(this.org)
    }
}