const person ={
    name : 'Mosh',
    walk() {},
    talk() {
        console.log("My name is ",this.name);
    }
}

person.talk();

const targetMember = 'name';
person[targetMember]='John'
console.log(person.name)