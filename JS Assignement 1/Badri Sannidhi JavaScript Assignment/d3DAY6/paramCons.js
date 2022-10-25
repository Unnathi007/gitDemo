class Person{
    /*id
    pname
    age*/
    constructor(id,pname,age){
        this.id= id
        this.pname = pname
        this.age=age
        console.log("Constructor invoked")
    }
    display()
    {
        console.log(`id : ${this.id}  name: ${this.pname}   age : ${this.age} `)
    }
}

let p1= new Person(1,"Luffy",17)
p1.display()
let p2= new Person(2,"Zoro",19)
p2.display()