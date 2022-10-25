const Person = {
    name: 'teja',
    walk(){},
    talk(){}
}

Person.talk()

const targetMember = 'name'
console.log(Person.name);

Person[targetMember] = 'desani'
console.log(Person.name);