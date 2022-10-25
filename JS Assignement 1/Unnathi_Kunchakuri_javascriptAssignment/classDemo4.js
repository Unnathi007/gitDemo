export class Person{
    
    constructor(id,pname,age=2) {

        // this.id = id;//object level scope

        // this.pname = pname

        // this.age = age
        this.id=1;
        this.pname='fgj';
        this.age=3;
        console.log('constructor invoked')

    }



    display() {

        // let you = 3//function scope

        // this.add = "sdalkfjdsalkfj"

        // console.log(this.id)

        console.log(`ID: ${this.id} Name: ${this.pname} age: ${this.age}`)

    }
    // display(id,name) {
    //     console.log(`ID: ${this.id} Name: ${this.pname} age: ${this.age}`)
    // }
    // display(...parameters) {
    //     for(let i=0;i<parameters.length;i++){
    //         console.log(parameters[i]);
    //     }
    //     console.log("any no. of params")
    // }


    // getadd() {

    //     console.log(this.you)

    //     console.log(this.add)

    // }

}



// let p1 = new Person(2,'fghj',15);
// //constuctor executed
// //object gets a copy of member data
// //memory is allocated
// //values are initialized

// p1.display();
// p1.display(1,'3456');
// p1.display(1,2,3,4,5,'fghj');