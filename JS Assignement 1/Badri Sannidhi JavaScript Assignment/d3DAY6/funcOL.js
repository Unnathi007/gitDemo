class Person{
    id
    pname
    age
    constructor()
    {
        this.id= 7
        this.pname = "Hatake Kakashi"
        this.age=28
        console.log(" Default Constructor invoked")
    }
    /*constructor(id,pname,age){
        this.id= id
        this.pname = pname
        this.age=age
        console.log("Constructor invoked")
    }*/
    display()
    {
        console.log(`id : ${this.id}  name: ${this.pname}   age : ${this.age} `)
    }
    display(id)
    {
        console.log(`ID : ${this.id}`)
    }
    display(id,pname)
    {
        console.log(`ID : ${this.id}  name: ${this.pname}`)
    }
    anotherfunction(...parameters)
    {
        for(let i=0;i<parameters.length;i++)
            console.log(parameters[i])
    }
}

let p1= new Person()
p1.display()
/*let p2= new Person()
p2.display()*/
p1.anotherfunction(1,2,"human")