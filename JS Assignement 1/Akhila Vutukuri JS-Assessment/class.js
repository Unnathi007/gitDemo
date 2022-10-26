export class Person{
    id
    name
    age

    constructor(){
        this.id=1
        this.name="akhila"
        this.age=12
        console.log("constructor invoked")
    }
    display(){
        console.log(`id:${this.id}\nName:${this.name} \nage:${this.age}`)
    }
}

/*let p = new Person(); // constructor is invoked, object gets copy of member data, memory is allocated and values are initialised
p.display();
*/

