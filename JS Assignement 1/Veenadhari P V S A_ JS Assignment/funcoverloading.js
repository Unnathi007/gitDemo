export class Person{
    id 
    name
    age

    constructor(){ 
        this.id=500
        this.name='ravi'
        this.age=60
    }
    display(){
        console.log(`ID : ${this.id} NAME : ${this.name} AGE : ${this.age}`)
    }
    // display(id){
    //     console.log(`ID : ${id} NAME : ${this.name} AGE : ${this.age}`)
    // }
}

// let p1=new Person(1,'Nancy',18)
// let p2=new Person(2,'Sandy',20)
// p1.display();
// p1.display()
// p2.display()