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

    //member functions

    display() {

        console.log(`ID : ${this.id}  Name : ${this.pname}  Age : ${this.age}`)

    }

}