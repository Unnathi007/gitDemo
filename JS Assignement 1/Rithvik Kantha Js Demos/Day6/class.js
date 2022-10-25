class person{
    id
    name
    age
    
    constructor(id,age,name="ma"){
        this.id = id
        this.name = name
        this.age = age
    }
}
let p = new person(1,3);
console.log(p);