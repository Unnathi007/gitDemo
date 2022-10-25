class Person{
    
    constructor(id,pname,age=2) {

        this.id = id;//object level scope

        this.pname = pname

        this.age = age

        console.log('constructor invoked')

    }



    display() {

        let you = 3//function scope

        this.add = "sdalkfjdsalkfj"

        console.log(this.id)

        console.log(`ID: ${this.id} Name: ${this.pname} age: ${this.age}`)

    }



    getadd() {

        console.log(this.you)

        console.log(this.add)

    }

}



let p1 = new Person(2,'fghj',15);
let p2 = new Person(3,'fghghj');
//constuctor executed
//object gets a copy of member data
//memory is allocated
//values are initialized
let p3=p1;
p1.display();
p2.display();
p3.display();