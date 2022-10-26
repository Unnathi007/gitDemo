class person{
    id
    person
    age

    constructor(){
        this.id=1;
        this.person="abhigna";
        this.age=20;
        console.log("constructor invoked!");
    }
    display(){
        console.log(`Id : ${this.id} Person : ${this.person} age : ${this.age}`)
    }
}

let p = new person();
//step1: constructor is executed
//step2: object gets copy of member data
//step3:  memory is allocated
//step4: values are initialized

p.display();