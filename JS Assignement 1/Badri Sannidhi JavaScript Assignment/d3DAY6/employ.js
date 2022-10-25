import { Person } from "./classObj.js";

export class employee extends Person{

    jobrole
    organization
    constructor()
    {
        super()
        this.jobrole="ASE"
        this.organization="CyberArk"
    }
    printInfo()
    {
        super.display()
        console.log(`Jobrole : ${this.jobrole} Organization : ${this.organization}  `)
    }
}