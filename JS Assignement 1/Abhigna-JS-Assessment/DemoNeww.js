const person={
    name:'Mos',
    walk() {},
    talk() {},
};

person.talk();
console.log(person);
const targetMember="name";
person[targetMember]='John';
console.log(person);
console.log("--------------");

const person2={
    name:'Mos1',
    walk() {
        console.log(this);
        return 10;
    },
    talk() {},
};

person2.walk();
const e=person2.walk;
e();

console.log("--------------");
const person3={
    name:'Mos3',
    walk() {
        console.log(this);
    },
    talk() {},
};

person3.walk();
const el=person3.walk.bind(person);
el();

console.log("--------------");
