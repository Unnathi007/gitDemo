export class student{
    id
    sname
    section
    schoolfees
    constructor(){
        this.id=123
        this.sname="keerthi"
        this.section="A"
        this.schoolfees=50000
    }
    display(){
        console.log(`id:${this.id} name:${this.sname} section:${this.section} schoolfees:${this.schoolfees}`);
    }
}