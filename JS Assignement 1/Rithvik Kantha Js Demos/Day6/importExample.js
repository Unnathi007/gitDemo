import  {person}  from "./exportExample.js";
export class employee extends person{
    jobRole
    organization
    constructor(){
        super()
        this.jobRole = "Asst. software Engineer"
        this.organization = "CyberArk"
    }
    display(){
        console.log(`Job Role : ${this.jobRole} Organization : ${this.organization}`)
    }
}
