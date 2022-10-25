let person={
    id:123,
    bname:"kite",
    walk(){
        console.log(this)
    }
}
person.walk()
// const walk=person.walk
const walk=person.walk.bind(person)
walk()