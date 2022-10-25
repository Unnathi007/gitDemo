import { Student } from "./6.js"
export class hosteler extends Student{
    messfee
    hostelfee
    totalfee
    constructor(id,name,section,schoolfees,messfee,hostelfee){
        super(id,name,section,schoolfees)
        this.messfee=messfee
        this.hostelfee=hostelfee
        this.totalfee=this.schoolfees+this.messfee+this.hostelfee
        console.log(`Name: ${this.name}\tTotal fee= ${this.totalfee}`)

    }
}
