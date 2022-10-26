export class Person{
    id
    name
    age

    constructor(){
        this.id=1
        this.pname="person-name"
        this.age=20
        console.log("Constructor Invoked")
    }
    display(){
        console.log(`ID : ${this.id}`)
    }
}
//let p=new Person();
//p.display()