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

    display(id){
        this.id=id;
        console.log(`${this.id}`);
    }

    display(id,name){
        this.id=id;
        this.name=name;
        console.log(`ID: ${this.id} , Name: ${this.name}`);
    }
}

let p = new Person();
p.display(2);
p.display(2,'sai');