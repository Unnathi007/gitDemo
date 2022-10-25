const person={
    name:"Mosh",
    walk(){
        console.log("I am walking");
    },
    talk(){}
};
person.talk();
const targetMember='name';
console.log(person.name);
person[targetMember.value]='John';
console.log(person['name']);
// console.log(person.walk());
person.walk();
const walk=person.walk.bind(person);
walk();