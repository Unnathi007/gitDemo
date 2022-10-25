class Person{
   // NO need to declare attributes
  //parameterized constructor
    constructor(id,name,age){
      this.id = id
      this.name = name
      this.age = age
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

  let p1 = new Person(1,"p1",20)
  let p2 = new Person(2,"p2",21)

  p1.display()
  p1.display(12, "kumar")
  p1.display(12)
  p1.display()