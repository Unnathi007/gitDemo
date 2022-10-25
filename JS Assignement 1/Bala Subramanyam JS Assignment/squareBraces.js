const person = {
    pName : "balu",
    walk(){
        console.log("Hello")
    },
    talk(){
        console.log("talking..")
    }
}

person.talk();
const targetMember = "pName"
person.targetMember = "john"
console.log(person)