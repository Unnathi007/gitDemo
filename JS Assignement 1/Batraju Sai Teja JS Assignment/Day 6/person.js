export class Person {
    id
    name
    age

    constructor() {
        this.id = 1;
        this.name = 'saiteja';
        this.age = 22;
    }

    display() {
        console.log(`Id: ${this.id}\nName:${this.name}\nAge:${this.age}`);
    }
}
/*
let p = new Person();

when the above line is executed:
1.constructur is invoked
2.object gets copy of member data
3.memory is allocated
4.values are initialized

p.display();
*/