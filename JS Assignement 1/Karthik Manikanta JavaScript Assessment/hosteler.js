import {Student} from './student.js'
export class Hosteler extends Student{
    constructor(messFee, hostelFee){
        super()
        this.messFee = messFee
        this.hostelFee = hostelFee
    }

    calculateTotalFee(){
        let totalFee = this.messFee + this.hostelFee + this.fee
        console.log('total fee is : ', totalFee)
    }
}