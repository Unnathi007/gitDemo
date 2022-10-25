person={
    id:12,
    name:'teja',
    age:22,
    college:'griet',
    work:function(){
        console.log('person does same work')
    },
    display:function(){
        console.log(`id:${this.id} name:${this.name} age:${this.age} college:${this.college}`)
    },
    displaywitharrow: () =>console.log(`id:${person.id} name:${person.name} age:${person.age} college:${peson.college}`)
}

console.log(person.id)
console.log(person['name'])
person.work()
person.display()
person.displaywitharraow()