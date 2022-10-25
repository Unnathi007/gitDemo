import {Student} from './Student.js';
export class Hostelier extends Student{
      messFee
      hostelFee
      totalFee=0
      constructor(){
        super();
        this.messFee=2000;
        this.hostelFee=8000;
        this.totalFee=this.messFee+this.hostelFee+this.schoolfees;
      }
      printDetails(){
        super.display();
        console.log(`Mess Fee : ${this.messFee}, Hostel Fee : ${this.hostelFee} , Total Fee : ${this.totalFee}`);
      }
}