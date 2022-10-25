let conCatenate = (fn,ln)=>
{
    return (fn+ln)
}
console.log(conCatenate('Ashwani ','Reddy'))


person ={
    id:1,
    name1:'Ashwani',
    age:18,
    work:function()
    {
        console.log(`Ashwani is Lazy to do any work`)
    },
    display:function()
    {
        console.log(`id: ${this.id} name:${this.name1} age:${this.age}`)
    },
    setDetails:function(id,name2,age)
    {
        this.id=id
        this.name1=name2
        this.age=age
        console.log(`id: ${this.id} name:${this.name1} age:${this.age}`)
    }
}
console.log(person.id)
console.log(person['name1'])
person.work()
person.display()
person.setDetails(2,'Suda',23)

car ={
    number:1256,
    name1:'Benz',
    color:'Red',
    Mileage:function()
    {
        console.log(`40Km per hour`)
    },
    display:function()
    {
        console.log(`number: ${this.number} name:${this.name1} color:${this.color}`)
    },
    setDetails:function(num,name,color)
    {
        this.number=num
        this.name1=name
        this.color=color
        console.log(`number: ${this.number} name:${this.name1} color:${this.color}`)
    }
}
console.log(car.name1)
car.Mileage()
car.display()
car.setDetails(5943,'Audi','White')