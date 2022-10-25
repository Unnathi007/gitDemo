person={
    id:1,
    name:'lolol',
    age:12,
    work: function(){
        console.log('software')},
        display:function(){
            console.log(`id:${this.id} name: ${this.name} age: ${this.age}`)
        
    },
    lol:()=> person.age+" "+person.name
}
console.log(person['name'])
person.work()
person.display()
console.log(person.lol())
car={
    number:1445,
    model:'pop',
    age:12,
    work: function(){
        console.log('race')},
        display:function(){
            console.log(`id:${this.number} name: ${this.model} age: ${this.age}`)
        
    },
    lol:()=> car.age+" "+car.model
}
console.log(car.lol())
