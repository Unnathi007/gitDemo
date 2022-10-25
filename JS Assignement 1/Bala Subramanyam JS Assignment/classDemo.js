export class person
{
    id
    pname
    age

   constructor()
   {
    this.id = 1;
    this.pname = "Balu";
    this.age = 22;
   }
    // constructor(id,pname,age)
    // {
    //     this.id = id;
    //     this.pname = pname;
    //     this.age = age;
    // }
    display()
    {
        console.log(`id: ${this.id} \nname: ${this.pname} \nage: ${this.age}\n salary:${this.salary}\n`);
    }
}



// let person2 = new person(10,"Shiva",25);
// person2.salary = 10000;

// person2.display();

// console.log(person2.salary);