class person{
    
    constructor(id,name,age){
        this.id=id;
        this.person=name;
        this.age=age;
        console.log("constructor invoked!");
    }
    display(){
        console.log(`Id : ${this.id} Person : ${this.person} age : ${this.age}`)
    }
    display(id,name)
    {
        console.log(`ID : ${this.id}`);
    }
    display(...parameters)
    {
        for(let i=0;i<parameters.length;i++)
        {
            console.log(parameters[i]);
        }
    }
}

let p1 = new person(1,"ab",23);
let p2 = new person(2,"cd",45);
//step1: constructor is executed
//step2: object gets copy of member data
//step3:  memory is allocated
//step4: values are initialized

p1.display();
p2.display();
p1.display(1,"hah",78);