/*
const person={
    name:"karthik",
    age:15,
    walk(){
        console.log(this)
    }
}
person['age']=22
const age1='age'
person[age1]=23
person.walk()

const walk1=person.walk
walk1()
*/


//binding
const person={
    name:"karthik",
    age:15,
    walk(){
        console.log(this)
    }
}
person['age']=22
const age1='age'
person[age1]=23
person.walk()

const walk1=person.walk.bind(person)
walk1()