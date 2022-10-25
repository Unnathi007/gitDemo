let person = {
    id:1,
    name: 'new name',
    age:12,
    work: function() {
        console.log('person does some work')
    },
    display: () => console.log(`id: ${person.id} name: ${person.name} age: ${person.age}`)
} 

let GoGo = {
    stand: 'golden experience',
    team: 'Passione',
    standCry: function() {
        console.log("Muda Muda Muda")
    }
}



console.log(person.id)
console.log(person['name'])
person.work()
person.display()

console.log(GoGo.stand)
console.log(GoGo.team)
GoGo.standCry()

let anotherperson = {...person, job: 'consultant', email:'slakdfj@gmail.com'}
console.log(anotherperson)
