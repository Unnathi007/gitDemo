class Person{
    //member data
    id  //we cannot declare the datatype in class, if declared it is an error
    pname
    age
    constructor(){
        this.id=1
        this.pname="karthik"
        this.age=22
        console.log("constructor is invoked")
    }
    //member functions
    // we cannot write the function keyword while writing a function in class
    //within in a function we can declare the datatypes
    display(){
        console.log(`ID: ${this.id} PNAME: ${this.pname} AGE: ${this.age}`)
    }
}

let p=new Person() //when this line gets executed; 1) constructor is executed; 2) object gets a copy of member data;
// 3) memory is allocated; 4) values are initialized
p.display()