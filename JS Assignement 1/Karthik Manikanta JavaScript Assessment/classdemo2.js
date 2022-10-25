class Person{
    constructor(id,name,age){
        this.id=id
        this.pname=name
        this.age=age
        console.log("constructor is invoked")
    }// we can write members/variable within the constructor also without writing in the class
    //member functions
    // we cannot write the function keyword while writing a function in class
    //within in a function we can declare the datatypes
    display(){
        console.log(`ID: ${this.id} PNAME: ${this.pname} AGE: ${this.age}`)
    }
    display(id){
        console.log(`ID: ${this.id}`)
    }
    display(id, pname)
    {
        console.log(`ID: ${this.id} PNAME: ${this.pname}`)
    }
    anotherfunction(...parameters){
        for(let i=0;i<parameters.length;i++)
        {
            console.log(parameters[i])
        }
    }
}

let p1=new Person(1,"karthik",22) 
//when this line gets executed; 1) constructor is executed; 2) object gets a copy of member data;
// 3) memory is allocated; 4) values are initialized
p1.display()
p1.display(3)
let p2=new Person(2,"abhishek",22)
p2.display()
p2.display(4,"mani");
p1.anotherfunction(1,8);