class Person{
    id
    name
    age

    constructor(id,age,name){
        this.id=id;
        this.name=name;
        this.age=age;
        console.log('constructor invoked');
    }

    display(){
        console.log(`Id: ${this.id}\nName:${this.name}\nAge:${this.age}`);
    }
}

let p = new Person(2, 12, 'akhila');
p.display();