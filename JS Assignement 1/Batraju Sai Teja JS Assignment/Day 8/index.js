// const Person = {
//     name : 'sai',
//     age : 22,
//     walk() {},
//     talk() {}
// }

// Person.talk()
// const attribute = 'name'
// Person[attribute] = 'teja'

// console.log(Person.name);

// fun1();
// console.log(a);
// function fun1(){
//     a=10;
// }

const Person = {
    name : 'helo',
    walk(){
        console.log(this);
    }
}
Person.walk();
const x = Person.walk;
x();
