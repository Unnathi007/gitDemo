class Person{
    
   
    constructor(id,name, job, age ){
        this.id=id
        this.name = name
        this.job=job
        this.age=age
        console.log("constructor called")

    }
    display(){
        console.log(`ID: ${this.id} Name: ${this.name} Job: ${this.job} Age: ${this.age}`)
    }
    display(id){
        console.log(`ID:${this.id}`)
    }
    display(id,name){
        console.log(`ID:${this.id} Name: ${this.name}`)
    }
    anotherfunction(...parameters){
        parameters.forEach((a)=> console.log(a))
}
}
let p1 = new Person(1,'lol','none','20');
let p2 = new Person(2,'pop','lol','32');
p1.display();
p2.display();
//p2.display(2);
p1.anotherfunction(1,2,3,4,4)