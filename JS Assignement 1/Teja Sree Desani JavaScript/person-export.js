export class Person{
    id
    pname
    age

    constructor(){
        this.id=1
        this.pname='tejasree'
        this.age=22
        console.log('constructor invoked');
    }

    display(){
        console.log(`ID : ${this.id} Name : ${this.pname} Age : ${this.age}`);
    }
}