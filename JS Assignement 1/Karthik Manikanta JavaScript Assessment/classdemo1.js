class Person{
    //member data
    id  //we cannot declare the datatype in class, if declared it is an error
    pname
    age
    constructor(id,name,age,num){
        this.id=id
        this.pname=name
        this.age=age
        this.marks=num
        console.log("constructor is invoked")
    }
    //member functions
    // we cannot write the function keyword while writing a function in class
    //within in a function we can declare the datatypes
    display(){
        console.log(`ID: ${this.id} PNAME: ${this.pname} AGE: ${this.age} MARKS:${this.marks}`)
    }
}

let p1=new Person(1,"karthik",22,98) //when this line gets executed; 1) constructor is executed; 2) object gets a copy of member data;
// 3) memory is allocated; 4) values are initialized
p1.display()
let p2=new Person(2,"rohith",22,98)
p2.display()