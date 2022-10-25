class Person{
    id 
    name
    job 
    age
   
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
}
let p = new Person(1,'lol','none','20');
let p2 = new Person(2,'pop','lol','32');
p.display();
p2.display();
