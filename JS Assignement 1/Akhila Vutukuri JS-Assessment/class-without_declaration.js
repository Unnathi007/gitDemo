class Person{
    constructor(id,name,age){
        this.id=id
        this.name=name
        this.age=age
    }
    display(){
        console.log(`id:${this.id} name:${this.name} age:${this.age}`)
    }
}

let p1 = new Person(1,'akhila',12)
let p2 = new Person(2,'sai teja',61)

p1.display();
p2.display();