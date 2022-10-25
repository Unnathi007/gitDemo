class Person
{
    id
    pname
    age
    constructor(id,name,age)
    {
        this.id=id
        this.pname=name
        this.age=age
    }
    display(id)
    {
        console.log(`id: ${id}\n`)
    }
    display(id,name)
    {
        console.log(`id: ${id}\npname: ${name} \n`)
    }
    display()
    {
        console.log(`id: ${this.id} \npname: ${this.pname} \nage: ${this.age}\nsalary:${this.salary}\n`)
    }
}

let p1=new Person(1,"Ashwani",20);
let p2=new Person(2,"Sai",19)
p1.salary=65000
p1.display()
p2.display()
p1.display(3)
p1.display(4,'Kiran')
