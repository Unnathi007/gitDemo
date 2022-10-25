class Person{
    //member data
    id
    pname
    age

    //default constructor
    // constructor(){
    //     this.id=1,
    //     this.pname='person-name',
    //     this.age=20,
    //     console.log(`Constructor Invoked`)
    // }

    //parameterized constructor
    constructor(id,pname,age){
        this.id=id,
        this.pname=pname,
        this.age=age,
        console.log(`Constructor Invoked`)
    }

    //member function
    display(){
        console.log(`ID: ${this.id} Name: ${this.pname} Age:${this.age} Salary:${this.salary=20000}`)
    }
}

//let p=new Person()
//attributes can be created anywhere
let p=new Person(1,'Neha',20)
p.display()
