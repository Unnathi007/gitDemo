export class Person{
    id=200
    name
    age
    // constructor(){
    //     this.id=1
    //     this.name="sahithi"
    //     console.log("constructor invoked")
    // }
    constructor(id,name,age){
        this.id=id
        this.name=name
        this.age=age
    }
    display(){
        console.log("class 1 display func"+this.id +" "+ this.age)
        console.log("class 1 display func 2nd console"+`ID: ${this.id}  Name:${this.name}`)
    }
}
// let p=new Person();
// p.display()
// declaration of variables is  not required, initialization inside a constructor can have scope through out the class
let q=new Person("anurag",24)
q.display()