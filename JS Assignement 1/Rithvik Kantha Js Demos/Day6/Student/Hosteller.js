import { Student } from "./Student.js";
export class Hosteller extends Student{
    messFees
    hostelFees
    constructor(id,name,section,schoolfees,messFees,hostelFees){
        super(id,name,section,schoolfees);
        this.messFees = messFees
        this.hostelFees = hostelFees
    }
    claculateFees(){
        let Total = this.messFees + this.hostelFees + this.schoolfees
        return Total;
    }
}
