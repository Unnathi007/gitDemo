import { Student } from "./student.js";
export class hostel extends Student{
   
    constructor(id,name, section, fees,age,mess_fee, hostel_fee){
        super(id,name, section, fees,age)
        this.mess_fee=mess_fee
        this.hostel_fee=hostel_fee
        console.log("lol")
    }
    total_fee(){
        let total =this.hostel_fee+this.mess_fee+this.fees
        console.log(total)


        
    }
}