export class Person{
    id
    name
    age

    constructor(){
        this.id = 101
        this.name = "Rohith"
        this.age = 19
    }

    display(){
        console.log(`Id : ${this.id} \nName : ${this.name} \nAge : ${this.age} \n`);
    }
}

// let p = new Person()
// p.display()
