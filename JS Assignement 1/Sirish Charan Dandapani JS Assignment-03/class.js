class Person {
    //memeber data
    id
    pname
    age

    constructor() {
        this.id = 1
        this.pname = "person-name"
        this.age = 20
        console.log('constructor invoked')
    }

    display() {
        console.log(`ID: ${this.id} Name : ${this.pname} age: ${this.age}`)
    }
}

class Person1 {
    id
    pname
    age

    constructor(id, pname, age) {
        this.id = id
        this.pname = pname
        this.age = age
        console.log('constructor invoked')
    }

    display() {
        let you = 3
        this.add = "sdalkfjdsalkfj"
        console.log(this.id)
        console.log(`ID: ${this.id} Name: ${this.pname} age: ${this.age}`)
    }

    getadd() {
        console.log(this.you)
        console.log(this.add)
    }
}

class Person {
    //memeber data
    id
    pname
    age

    constructor() {
        this.id = 1
        this.pname = "person-name"
        this.age = 20
        console.log('constructor invoked')
    }

    display() {
        console.log(`ID: ${this.id} Name : ${this.pname} age: ${this.age}`)
    }
    display(id) {
        console.log(`ID: ${this.id}`)
    }
    display(id, pname) {
        console.log(`ID: ${this.id} Name : ${this.pname}`)
    }
    display(id, age) {
        console.log(`ID: ${this.id} age: ${this.age}`)
    }

}

//step 1: constructor is executed
//step 2: object gets a copy of member data
//step 3: memeory is allocated
//step 4: values are initalized

console.log("*********How to declare and use a class and object**********")
let p = new Person();
p.display();

console.log("*********Person1 class with parameterized constructor**********")
let p1 = new Person1(1, "dksl", 12)
let p2 = new Person1(1, "woeiru", 15)

p1.display()
p2.display()
p1.getadd()
let p3 = Person()