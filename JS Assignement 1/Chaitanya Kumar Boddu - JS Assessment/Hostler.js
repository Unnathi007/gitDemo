import {Student} from './class6_student.js'

export class Hostler extends Student{
    mess_fee
    hostel_fee

    constructor(id,name,age,fav_subject,school_fee,mess_fee,hostel_fee){
        super(id,name,age,fav_subject,school_fee)
        this.mess_fee = mess_fee
        this.hostel_fee = hostel_fee
    }
    totalFee(){
        let fee = this.school_fee + this.hostel_fee +this.mess_fee
        console.log(`Total fee = ${fee}`)
    }
   printAllDetails(){
      this.printDetails()
      console.log(`Mess Fee: ${this.mess_fee} Hostel Fee: ${this.hostel_fee}`)
   }
}