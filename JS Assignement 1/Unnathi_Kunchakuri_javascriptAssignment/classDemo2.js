class Person{
    id
    pname
    age
    constructor(id,pname,age=2) {

        this.id = id;

        this.pname = pname

        this.age = age

        console.log('constructor invoked')

    }



    display() {

        console.log(`ID: ${this.id} Name : ${this.pname} age: ${this.age}`)

    }
    

}



let p1 = new Person(2,'fghj',15);
let p2 = new Person(3,'fghghj');
//constuctor executed
//object gets a copy of member data
//memory is allocated
//values are initialized

p1.display();
p2.display();