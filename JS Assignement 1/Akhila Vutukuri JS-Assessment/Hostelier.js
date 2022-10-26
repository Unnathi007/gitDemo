import {Student} from "./Student.js";

export class Hostelier extends Student{
    hostelFee
    totalFee

    constructor(schoolFees,totalFee){
        super(schoolFees);
        this.hostelFee=2000
        this.totalFee = this.hostelFee + this.schoolFees
    }

    printFun(){
        console.log(`Total Fee is ${this.totalFee}`)
    }
}