export class Person{
    id
    name
    age
    constructor(){
        this.id= 1
        this.name = "Badri"
        this.age=20
        console.log("Constructor invoked")
    }
    display()
    {
        console.log(`id : ${this.id}  name: ${this.name}   age : ${this.age} `)
    }
}

/*let p= new Person()
p.display()*/