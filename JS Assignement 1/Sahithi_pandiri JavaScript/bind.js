const person = {
    name : 'sahithi',
    walk(){
        console.log(this);
    }
};

const value = person.walk;
// value();
// console.log(person.walk());
console.log(person.walk)
console.log(value)