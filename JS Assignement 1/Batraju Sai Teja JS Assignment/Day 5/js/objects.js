person = {
    fullName:'sai teja',
    age:'22',
    profession:'Hero',
    company : 'CyberArk',
    about : function(){
        console.log(`${this.fullName} is a great human being`);
    },
    work : function(){
        console.log(`${this.fullName} works in ${this.company}`);
    }
}

console.log(person.profession);
console.log(person.name);
console.log(person);
person.about();
person.work();