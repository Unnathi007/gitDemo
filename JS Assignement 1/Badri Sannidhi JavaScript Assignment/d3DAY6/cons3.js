class Person{
    
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


let p3= new Person(3,"Sanji",19)
p3.display()