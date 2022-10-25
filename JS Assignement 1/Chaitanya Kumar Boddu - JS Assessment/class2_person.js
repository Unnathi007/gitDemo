export class Person{
    id
    name 
    age
  //parameterized constructor
    constructor(id,name,age){
      this.id = id
      this.name = name
      this.age = age
    }
  
  
  display(){
      console.log(`ID : ${this.id} Name: ${this.name} Age: ${this.age}`)
  }
  }

  
