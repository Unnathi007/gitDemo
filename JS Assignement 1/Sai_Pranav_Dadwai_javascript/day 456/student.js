export class Student{
    
    constructor(id,name, section, fees,age){
        this.id=id
        this.name =name
        this.section=section
        this.fees=fees
        this.age=age
        console.log("constructor called")

    }
    display(){
        console.log(`ID: ${this.id} Name: ${this.name} Job: ${this.job} Age: ${this.age}`)
    }
}