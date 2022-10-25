//A closure is a function nested inside another
function mulFn() {
    var mult = 9;
    console.log("number of time this block was executed")
    return (val) => {
        mult = mult * val;
        return mult;
    }
}

var mult = mulFn();
console.log(mult(18))
console.log(mult(10))
console.log(mult(12))
console.log(mult(13))

var rentPrice = (initialRent) => {
    return {
        getRent: () => {
            return console.log(initialRent);
        },
        incRent: (amount) => {
            initialRent += amount
            console.log("increase rent", initialRent)
        },
        decRent: (amount) => {
            initialRent -= amount;
            console.log("decrease rent", initialRent)
        }
    }
}

let rent = rentPrice(8000)
rent.decRent(2000)
rent.incRent(4000)
rent.getRent()

const person = {
    name: 'Mosh',
    walk() { console.log("walking") },
    talk() { console.log("talking") }
}

person.talk()

const targetMember = 'name'
person[targetMember] = 'John'
console.log(person)