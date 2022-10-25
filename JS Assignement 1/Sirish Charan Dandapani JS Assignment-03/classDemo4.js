export class Person {
    //memeber data
    id
    pname
    age

    constructor() {
        this.id = 1
        this.pname = "person-name"
        this.age = 20
        console.log('constructor invoked')
    }

    display() {
        console.log(`ID: ${this.id} Name : ${this.pname} age: ${this.age}`)
    }
}
