class Person{
    id =1
    name = "abc"
    age = 2
  
    constructor(){
      this.id = 1
      this.name = "person-name"
      this.age = 20
    } 
  
    display(id){
        console.log(`ID : ${this.id} `)
    }
    
    display(id, name){
      console.log(`ID : ${this.id} Name: ${this.name} `)
  }
    display(){
        console.log(`ID : ${this.id} Name: ${this.name} Age: ${this.age}`)
    }
 
  }
  
  let p = new Person()
  p.display()
  p.display(12)