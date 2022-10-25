import { student } from "./student.js";

export class hosteler extends student{
    messfees
    totalfees
    constructor(id,sname,schoolfees,messfees){
        super(id,sname,schoolfees);
        this.messfees=messfees;
        this.totalfees=this.schoolfees+this.messfees;
    }

    display(){
        super.display();
        console.log(`messfee : ${this.messfees} \n`);
    }

    printTotalFee(){
        console.log(`Total fee is ${this.totalfees}`);
    }
}
