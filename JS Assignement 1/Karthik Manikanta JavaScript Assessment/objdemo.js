//object
//properties & values
person={
    id:1,
    name: "karthik",
    age:12,
    work:function(){
        console.log("person does some work")
        return 5
    },
    display: ()=> console.log(`id: ${this.id} name: ${person.name} age: ${person.age} `),
    display1: function(){
        console.log(`id: ${this.id} name: ${this.name} age: ${person.age} work: ${person.work()}`)
    }
}

//this: represents current object
//this keyword should not be used when arrow function is used
//two diff ways to access the properties of the object
//console.log(person) //dot notation
console.log(person['name']) //square bracket notation
console.log(person.age)
person.work()
//person.display()
person.display1()


//get data from html document, data from elements of html and then assign to the properties of the object use []