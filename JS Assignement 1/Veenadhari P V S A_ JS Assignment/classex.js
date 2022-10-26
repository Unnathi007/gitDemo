class Person{
    id 
    name
    age

    // constructor(){ 
    //     this.id=5
    //     this.name='ravi'
    //     this.age=60
    //     console.log("constructor invoked")
    // }
    constructor(id,name,age){ // parameetrised constructor
        this.id=id  
        this.name=name
        this.age=age
        console.log("constructor invoked")
    }
    display(){
        console.log(`ID : ${this.id} NAME : ${this.name} AGE : ${this.age}`)
    }
}

//step1: constructor is executed
//2: object gets a copy of member data
//3: memory is allocated
//4: values are initialised
//5: a copy of class is allocted to the object


// let p= new Person()
// p.display()

let p1=new Person(1,'Nancy',18)
let p2=new Person(2,'Sandy',20)
p1.display();
p2.display()