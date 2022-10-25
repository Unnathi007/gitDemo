class person{
    id
    pname
    age
    constructor()
    {
        this.id = 1;
        this.pname = "balu";
        this.age = 22;
    }

    display(){
        console.log(`id: ${this.id} \nname: ${this.pname} \nage: ${this.age}\n salary:${this.salary}\n`);
    }
    display(id)
    {
        console.log(`id: ${this.id} \n`);
    }
   

    display(...parameters)
    {
        for(let i = 0;i < parameters.length;i++)
        {
            console.log(parameters[i]);
        }
    }
}

let person1 = new person();

person1.display();
person1.display(1);
person1.display(1,2);