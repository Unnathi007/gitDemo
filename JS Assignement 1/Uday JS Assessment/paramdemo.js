class Product{
    constructor(pname,price,units){
        this.pname=pname
        this.price=price
        this.units=units
    }
}

let p1=new Product("pen",10,10)
let p2=new Product("book",100,5)
let p3=new Product("ball",20,10)

sales(p1,p2,p3)
function sales(...objs){
    let s=0
    for(let i=0;i<objs.length;i++){
        s+=objs[i].price*objs[i].units
    }
    console.log(s)
}