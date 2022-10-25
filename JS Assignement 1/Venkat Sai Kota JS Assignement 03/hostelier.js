import { Student } from "./student.js";

export class Hostelier extends Student{
    constructor(id,name,section,schoolfees,messfees,hostelfees){
        super(id,name,section,schoolfees)
        this.messfees=messfees;
        this.hostelfees=hostelfees;
    }
    calculateTotalFees() {
        console.log(this.hostelfees+this.messfees+this.schoolfees)
    }
}