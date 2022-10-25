class Person
{
    id
    pname
    age
    constructor()
    {
        this.id=1
        this.pname="Ashwani"
        this.age=20
        console.log("Constructor invoked")
    }
    display()
    {
        console.log(`id: ${this.id} \npname: ${this.pname} \nage: ${this.age}`)
    }
}

let p=new Person();
p.display()
