class Person{
    id
    name
    age

    constructor(id,age,name){
        this.id=id;
        this.name=name;
        this.age=age;
        console.log('constructor invoked');
    }

    paramArrayFunction(...Array){
        Array.forEach(a => console.log(`${a}\n`));
    }
}

let p = new Person(1,'saiteja',22);
p.paramArrayFunction(1,2,3,4,5,6,7);