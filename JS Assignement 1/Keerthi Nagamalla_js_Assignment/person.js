export class person{
    id
    name
    age
    constructor(){
        this.id=111
        this.pname="keerthi"
        this.age=22
    }
    // constructor(id,pname,age){
    //     this.id=id
    //     this.pname="pname"
    //     this.age=age
    // } js doesnt support multiple constructors
    display(){
        console.log(`id:${this.id} name:${this.pname} age:${this.age}`)
    }
}
// let p=new person()
// p.display()
// let l=new person(2,"kite",20)
// l.display()