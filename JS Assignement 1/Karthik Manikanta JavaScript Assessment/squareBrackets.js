const person={
    name:'Mosh',
    walk(){},
    talk(){}
}
person.talk();

const targetMember='name'
person[targetMember]='John'

console.log(person[targetMember])