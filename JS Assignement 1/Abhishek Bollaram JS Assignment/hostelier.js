import {Student} from './student.js'
export class Hostelier extends Student{
    constructor(id, name, section, fee, messFee, hostelFee){
        super(id, name, section, fee)
        this.messFee = messFee
        this.hostelFee = hostelFee
    }

    calculateTotalFee(){
        let totalFee = this.messFee + this.hostelFee + this.fee
        console.log('total fee is : ', totalFee)
    }
}