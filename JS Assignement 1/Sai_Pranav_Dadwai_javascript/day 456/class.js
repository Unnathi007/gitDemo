export class Person{
    id
    name
    job
    age
    constructor(){
        this.id=4
        this.name ="lolol"
        this.job="none"
        this.age=17
        console.log("constructor called")

    }
    display(){
        console.log(`ID: ${this.id} Name: ${this.name} Job: ${this.job} Age: ${this.age}`)
    }
}
//let p = new Person();
//p.display();