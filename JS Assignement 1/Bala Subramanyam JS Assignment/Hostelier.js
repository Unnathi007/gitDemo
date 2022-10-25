import {Student} from './Student.js'

export class Hostelier extends Student{
    messFees
    hostelFees
    constructor(id,sname,section,schoolFees,messFees,hostelFees)
    {
        super(id,sname,section,schoolFees);

        this.messFees = messFees
        this.hostelFees = hostelFees;
    }

    getTotalFee()
    {
        let total = this.schoolFees + this.messFees + this.hostelFees;
        console.log(`Total fee of student ${this.sname} is ${total}`);
    }
}