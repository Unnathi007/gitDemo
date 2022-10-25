class person{
    id =1
    fname
    age
    constructor(id,name,age){
        this.id=id
        this.fname=name
        this.age=age
        console.log("constructor inovked")
    }
    display(){
        console.log(`ID: ${this.id} \t Name: ${this.fname} \t Age: ${this.age}`)
    }
}

let p =new person(10,"suda",20);
let q= new person()
let z=p
p.display();
q.display()
z.display()
z.id=1000000
console.log('changed')
p.display()
console.log("l")
z.display()