class person{
    id
    name
    age

    constructor(id,pname,age){
        this.id=id
        this.pname=pname
        this.age=age
        console.log("Constructor Invoked")
    }
    display(){
        console.log(`ID : ${this.id}`)
    }
}
let p=new person();
p.display()
let b=person();
