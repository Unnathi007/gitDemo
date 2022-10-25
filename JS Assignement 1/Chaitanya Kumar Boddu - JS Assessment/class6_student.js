import {Person} from './class2_person.js'

export class Student extends Person{
    fav_subject
    school_fee
 
     constructor(id,name,age,fav_subject,school_fee){
        super(id,name,age)
        this.fav_subject = fav_subject
        this.school_fee = school_fee
     }

     printDetails()
     {
        super.display()
        console.log(`Favourite Subject is: ${this.fav_subject} and School Fee: ${this.school_fee}`)
     }

}