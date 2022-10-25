class Person{
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

    display(id){
        console.log("This is id");
    }
    display(pname){
        console.log("This is pname");
    }
    display(age){
        console.log('This is age');
    }

    anotherfunction(...parameters){
        for(let i=0;i<parameters.length;i++){
            console.log(parameters[i]);
        }
    }
}

let pqr1=new Person(2,'teja',21)
// pqr1.display()
// pqr1.display(pqr1.id)
// pqr1.display('8')

pqr1.anotherfunction(1,'abc',3,'sdfv')
