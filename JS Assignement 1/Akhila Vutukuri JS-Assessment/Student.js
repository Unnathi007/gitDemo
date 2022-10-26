export class Student{
    id
    pname
    section
    schoolFees

    constructor(){
        this.id=1
        this.pname="akhila"
        this.section="A"
        this.schoolFees=2500
    }
    display(){
        console.log(`id:${this.id}\nName:${this.name} \nage:${this.age}`)
    }
}
