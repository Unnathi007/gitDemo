class Person1{
    id
    pname
    age

    constructor(){
        this.id=1
        this.pname='tejasree'
        this.age=22
        console.log('constructor invoked');
    }

    display(){
        console.log(`ID : ${this.id} Name : ${this.pname} Age : ${this.age}`);
    }
}

let p=new Person1();
p.display();

class Person2{
    id
    pname
    age

    constructor(id, pname, age){
        this.id=id
        this.pname=pname
        this.age=age
        console.log('constructor');
    }

    display(){
        console.log(`ID : ${this.id} Name : ${this.pname} Age : ${this.age}`);
    }
}

let p1=new Person2(2,'teja',21)
p1.display()

let p2=new Person2(3,'sree',20)
p2.display()


class Person3{

    constructor(id, pname, age){
        this.id=id
        this.pname=pname
        this.age=age
        console.log('constructor');
    }

    display(){
        console.log(`ID : ${this.id} Name : ${this.pname} Age : ${this.age}`);
    }
}

let pq1=new Person3(2,'teja',21)
pq1.display()

let pq2=new Person3(3,'sree',20)
pq2.display()