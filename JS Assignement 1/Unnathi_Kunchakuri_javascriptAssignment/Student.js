export class Student{
    id
    name
    section
    schoolfees=0
    constructor(){
        this.id=1;
        this.name="void";
        this.section="A";
        this.schoolfees=12000;
    }
    display(){
        console.log(`id : ${this.id}, name : ${this.name} , section : ${this.section} , school Fees : ${this.schoolfees}`);
    }
}