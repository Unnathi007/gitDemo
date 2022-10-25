import { Student } from "./student.js"

export class hosteller extends Student{
  

    constructor(id,name,sec,schoolfees)
    {
        super(id,name,sec,schoolfees)
        this.messfees=10000
        this.hostelfees=10000
    }
    display()
    {
        console.log(`id:${this.id}  name: ${this.name} sec:${this.sec} fees:${this.schoolfees}`)
        let totfees=(this.hostelfees + this.schoolfees + this.messfees)*12;
        console.log(`Total fees : ${totfees}`)
    }
}