class Person{
  id =1
  name = "abc"
  age = 2

  constructor(){
    this.id = 1
    this.name = "person-name"
    this.age = 20
  } 


display(){
    console.log(`ID : ${this.id} Name: ${this.pname} Age: ${this.age}`)
}
}

let p = new Person()
console.log(p)