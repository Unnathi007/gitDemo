import { Student } from "./student.js"

export class hosteler extends Student{
    messfee
    hostelfee
    totalfee

    constructor(id,name,section,schoolfees,messfee,hostelfee){
        super(id,name,section,schoolfees)
        this.messfee=messfee
        this.hostelfee=hostelfee
    }

    sum(){
        this.totalfee=this.schoolfees+this.messfee+this.hostelfee
        console.log(`Total fee=\t ${this.totalfee}`)
    }
}